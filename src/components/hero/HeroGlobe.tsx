"use client";

import dynamic from "next/dynamic";

// Loaded in the browser only, after the hero text, so the globe never blocks the page.
const LanguageGlobe = dynamic(
  () => import("./LanguageGlobe").then((module) => module.LanguageGlobe),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden="true"
        className="mx-auto h-[300px] w-[300px] sm:h-[440px] sm:w-[440px] lg:h-[520px] lg:w-[520px] max-w-full"
      />
    ),
  },
);

export function HeroGlobe({ onDark = false }: { onDark?: boolean }) {
  return <LanguageGlobe onDark={onDark} />;
}
