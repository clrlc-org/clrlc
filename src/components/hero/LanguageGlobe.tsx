"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import createGlobe from "cobe";
import { HERO_LANGUAGES, type HeroLanguage } from "@/lib/hero-languages";

const ASH_GREY: [number, number, number] = [199 / 255, 199 / 255, 204 / 255]; // #C7C7CC
const GLOW: [number, number, number] = [0.93, 0.93, 0.95];
const TEAL: [number, number, number] = [24 / 255, 152 / 255, 168 / 255]; // #1898A8
const TEAL_BRIGHT: [number, number, number] = [95 / 255, 208 / 255, 220 / 255]; // #5FD0DC

const MARKER_SIZE = 0.035;
const MARKER_SIZE_ACTIVE = 0.075;
const MARKER_SURFACE = 0.85; // cobe draws markers at 0.8 + markerElevation (0.05) of the radius
const HIT_RADIUS_PX = 16;
const SPIN_PER_FRAME = 0.0015;
const PILL_COUNT = 3;
const PILL_INTERVAL_MS = 3000;
const PILL_SWAP_MS = 600;
const PILL_POSITIONS = [
  "left-0 top-[8%]",
  "right-0 top-[38%]",
  "left-[4%] bottom-[10%]",
];

// Every marker of every language, flattened so cobe can draw them in one list.
const MARKERS = HERO_LANGUAGES.flatMap((language, languageIndex) =>
  language.markers.map((location) => ({ location, languageIndex })),
);

const START_VIEW = rotationFor([5, 20]); // Africa

interface Rotation {
  phi: number;
  theta: number;
}

interface PillSlot {
  languageIndex: number;
  visible: boolean;
}

interface Hover {
  languageIndex: number;
  x: number;
  y: number;
}

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

// Unit-sphere position of a [latitude, longitude] pair, using cobe's convention.
function locationVector([lat, lng]: [number, number]) {
  const latRad = toRadians(lat);
  const lngRad = toRadians(lng) - Math.PI;
  const cosLat = Math.cos(latRad);
  return [-cosLat * Math.cos(lngRad), Math.sin(latRad), cosLat * Math.sin(lngRad)];
}

// The phi/theta that turn the globe so a [latitude, longitude] point faces the viewer.
function rotationFor(location: [number, number]): Rotation {
  const [x, y, z] = locationVector(location);
  return { phi: Math.atan2(-x, z), theta: Math.atan2(y, Math.hypot(x, z)) };
}

// Screen position (0 to 1 across the canvas) of a point, and whether it faces the viewer.
function project(location: [number, number], rotation: Rotation) {
  const [px, py, pz] = locationVector(location);
  const cosPhi = Math.cos(rotation.phi);
  const sinPhi = Math.sin(rotation.phi);
  const cosTheta = Math.cos(rotation.theta);
  const sinTheta = Math.sin(rotation.theta);
  const x = cosPhi * px + sinPhi * pz;
  const y = sinPhi * sinTheta * px + cosTheta * py - cosPhi * sinTheta * pz;
  const z = -sinPhi * cosTheta * px + sinTheta * py + cosPhi * cosTheta * pz;
  return {
    x: (x * MARKER_SURFACE + 1) / 2,
    y: (1 - y * MARKER_SURFACE) / 2,
    visible: z > 0,
  };
}

function wrapAngle(angle: number) {
  return ((((angle + Math.PI) % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) - Math.PI;
}

function nearestMarker(
  canvas: HTMLCanvasElement,
  clientX: number,
  clientY: number,
  rotation: Rotation,
) {
  const rect = canvas.getBoundingClientRect();
  const px = clientX - rect.left;
  const py = clientY - rect.top;
  let best: number | null = null;
  let bestDistance = HIT_RADIUS_PX;
  MARKERS.forEach((marker, index) => {
    const point = project(marker.location, rotation);
    if (!point.visible) return;
    const distance = Math.hypot(point.x * rect.width - px, point.y * rect.height - py);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = index;
    }
  });
  return best;
}

export function LanguageGlobe() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const rotationRef = useRef<Rotation>({ ...START_VIEW });
  const tweenRef = useRef<Rotation | null>(null);
  const sizesRef = useRef<number[]>(MARKERS.map(() => MARKER_SIZE));
  const selectedRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);
  const hoverPausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragRef = useRef({ x: 0, y: 0, distance: 0 });
  const activeLanguagesRef = useRef<Set<number>>(new Set());

  const [size, setSize] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [slots, setSlots] = useState<PillSlot[]>(() =>
    Array.from({ length: PILL_COUNT }, (_, index) => ({ languageIndex: index, visible: true })),
  );
  const [selected, setSelected] = useState<number | null>(null);
  const [hover, setHover] = useState<Hover | null>(null);

  // Track the globe's width (300px on phones, up to 520px on desktop).
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize(Math.round(entry.contentRect.width));
    });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      reducedMotionRef.current = query.matches;
      setReducedMotion(query.matches);
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    activeLanguagesRef.current = new Set([
      ...slots.map((slot) => slot.languageIndex),
      ...(selected !== null ? [selected] : []),
    ]);
  }, [slots, selected]);

  // Create the globe once the canvas has a size. Recreate it when the size changes.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || size === 0) return;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: size,
      height: size,
      phi: rotationRef.current.phi,
      theta: rotationRef.current.theta,
      dark: 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2.4,
      baseColor: ASH_GREY,
      glowColor: GLOW,
      markerColor: TEAL,
      markers: [],
    });

    // cobe draws a frame each time update() is called, so drive the animation here.
    let frame = 0;
    const tick = () => {
      const rotation = rotationRef.current;
      const tween = tweenRef.current;

      if (tween) {
        const deltaPhi = tween.phi - rotation.phi;
        const deltaTheta = tween.theta - rotation.theta;
        rotation.phi += deltaPhi * 0.08;
        rotation.theta += deltaTheta * 0.08;
        if (Math.abs(deltaPhi) < 0.002 && Math.abs(deltaTheta) < 0.002) {
          rotation.phi = tween.phi;
          rotation.theta = tween.theta;
          tweenRef.current = null;
        }
      } else if (
        !reducedMotionRef.current &&
        !hoverPausedRef.current &&
        !draggingRef.current &&
        selectedRef.current === null
      ) {
        rotation.phi += SPIN_PER_FRAME;
      }

      const active = activeLanguagesRef.current;
      const sizes = sizesRef.current;
      globe.update({
        phi: rotation.phi,
        theta: rotation.theta,
        markers: MARKERS.map((marker, index) => {
          const isActive = active.has(marker.languageIndex);
          sizes[index] += ((isActive ? MARKER_SIZE_ACTIVE : MARKER_SIZE) - sizes[index]) * 0.15;
          return {
            location: marker.location,
            size: sizes[index],
            color: isActive ? TEAL_BRIGHT : TEAL,
          };
        }),
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
    };
  }, [size]);

  // Cycle the pills every few seconds. Paused for reduced motion and while a card is open.
  useEffect(() => {
    if (reducedMotion || selected !== null) return;

    const timers: number[] = [];
    let cursor = PILL_COUNT;
    let slot = 0;

    const interval = window.setInterval(() => {
      const fadingSlot = slot;
      slot = (slot + 1) % PILL_COUNT;
      setSlots((prev) =>
        prev.map((item, index) => (index === fadingSlot ? { ...item, visible: false } : item)),
      );

      const swap = window.setTimeout(() => {
        const inUse = new Set(activeLanguagesRef.current);
        let next = cursor % HERO_LANGUAGES.length;
        for (let step = 0; step < HERO_LANGUAGES.length; step++) {
          const candidate = (cursor + step) % HERO_LANGUAGES.length;
          if (!inUse.has(candidate)) {
            next = candidate;
            break;
          }
        }
        cursor = next + 1;
        setSlots((prev) =>
          prev.map((item, index) =>
            index === fadingSlot ? { languageIndex: next, visible: true } : item,
          ),
        );
      }, PILL_SWAP_MS);
      timers.push(swap);
    }, PILL_INTERVAL_MS);

    return () => {
      window.clearInterval(interval);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [reducedMotion, selected]);

  // Close the card when a click lands outside the globe area.
  useEffect(() => {
    if (selected === null) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) closeCard();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [selected]);

  function selectLanguage(languageIndex: number) {
    const language: HeroLanguage = HERO_LANGUAGES[languageIndex];
    const target = rotationFor(language.markers[0]);
    const rotation = rotationRef.current;
    const phi = rotation.phi + wrapAngle(target.phi - rotation.phi);
    selectedRef.current = languageIndex;
    setSelected(languageIndex);
    setHover(null);
    if (reducedMotionRef.current) {
      rotation.phi = phi;
      rotation.theta = target.theta;
      tweenRef.current = null;
    } else {
      tweenRef.current = { phi, theta: target.theta };
    }
  }

  function closeCard() {
    selectedRef.current = null;
    setSelected(null);
  }

  function handlePointerDown(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    draggingRef.current = true;
    dragRef.current = { x: event.clientX, y: event.clientY, distance: 0 };
    tweenRef.current = null;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLCanvasElement>) {
    const canvas = event.currentTarget;
    if (draggingRef.current) {
      const drag = dragRef.current;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      drag.x = event.clientX;
      drag.y = event.clientY;
      drag.distance += Math.hypot(dx, dy);
      const rotation = rotationRef.current;
      rotation.phi -= dx * 0.008;
      rotation.theta = Math.max(-0.9, Math.min(0.9, rotation.theta + dy * 0.005));
      return;
    }
    if (event.pointerType !== "mouse") return;
    const index = nearestMarker(canvas, event.clientX, event.clientY, rotationRef.current);
    if (index === null) {
      setHover(null);
      return;
    }
    const wrapperRect = wrapperRef.current?.getBoundingClientRect();
    if (!wrapperRect) return;
    setHover({
      languageIndex: MARKERS[index].languageIndex,
      x: event.clientX - wrapperRect.left,
      y: event.clientY - wrapperRect.top,
    });
  }

  function handlePointerUp(event: ReactPointerEvent<HTMLCanvasElement>) {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    event.currentTarget.releasePointerCapture(event.pointerId);
    if (dragRef.current.distance < 6) {
      const index = nearestMarker(
        event.currentTarget,
        event.clientX,
        event.clientY,
        rotationRef.current,
      );
      if (index !== null) selectLanguage(MARKERS[index].languageIndex);
    }
  }

  const selectedLanguage = selected !== null ? HERO_LANGUAGES[selected] : null;

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto w-[300px] sm:w-[440px] lg:w-[520px] max-w-full"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") hoverPausedRef.current = true;
      }}
      onPointerLeave={() => {
        hoverPausedRef.current = false;
        setHover(null);
      }}
    >
      <div className="relative" style={{ width: size || undefined, height: size || undefined }}>
      <canvas
        ref={canvasRef}
        style={{ width: size || undefined, height: size || undefined }}
        className="block touch-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          draggingRef.current = false;
        }}
        aria-label="Interactive globe showing where African languages are spoken. Drag to turn it."
        role="img"
      />

      {slots.map((slot, index) => {
        const language = HERO_LANGUAGES[slot.languageIndex];
        return (
          <button
            key={index}
            type="button"
            onClick={() => selectLanguage(slot.languageIndex)}
            aria-label={`Show where ${language.name} is spoken`}
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            className={`absolute ${PILL_POSITIONS[index]} whitespace-nowrap rounded-full border border-[#D9D9D9] bg-white px-3 py-1.5 text-xs sm:text-sm font-medium text-[#1898A8] shadow-md transition-opacity duration-500 hover:bg-[#F3F3F5] ${
              slot.visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {language.name}
          </button>
        );
      })}

      {hover && selected === null && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full border border-[#D9D9D9] bg-white px-3 py-1 text-sm font-medium text-[#1898A8] shadow-md"
          style={{
            left: hover.x,
            top: hover.y - 12,
            fontFamily: "var(--font-outfit), sans-serif",
          }}
        >
          {HERO_LANGUAGES[hover.languageIndex].name}
        </div>
      )}

      </div>

      {/* Reserved slot: on phones the card sits here under the globe, so the hero section
          always grows to contain it. On desktop the slot floats over the lower right. */}
      <div className="mx-auto mt-4 min-h-[96px] w-[260px] max-w-full lg:absolute lg:mx-0 lg:bottom-2 lg:right-0 lg:mt-0 lg:min-h-0">
        {selectedLanguage && (
          <div
            ref={cardRef}
            role="dialog"
            aria-label={`${selectedLanguage.name} details`}
            className="relative z-20 w-full rounded-xl border border-[#D9D9D9] bg-white p-4 text-[#1A1A1A] shadow-lg"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            <button
              type="button"
              onClick={closeCard}
              aria-label="Close"
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full text-lg leading-none text-slate-500 hover:bg-slate-100"
            >
              ×
            </button>
            <p className="pr-6 text-lg font-bold">{selectedLanguage.name}</p>
            <p className="mt-1 text-sm text-slate-600">
              Spoken in {selectedLanguage.spokenIn}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
