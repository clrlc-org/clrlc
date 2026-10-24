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
        className="mx-auto aspect-square w-full max-w-[400px] md:w-[575px] md:max-w-none"
      />
    ),
  },
);

export function HeroGlobe() {
  return <LanguageGlobe />;
}
