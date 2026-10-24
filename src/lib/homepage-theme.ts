// Homepage-only look. Set HOMEPAGE_GRADIENT to false to return to the white hero
// and white menu; the white styles are kept below, so switching back is one line.
export const HOMEPAGE_GRADIENT = true;

export const heroTheme = HOMEPAGE_GRADIENT
  ? {
      // Top padding = menu height + gap: 73px menu + 32px on phones, 65px menu + 64px on desktop.
      section: "relative overflow-hidden bg-gradient-to-r from-[#2E2357] to-[#1F6F86] pt-[105px] pb-[32px] md:pt-[129px] md:pb-[64px] xl:pt-[98px] xl:pb-[64px]",
      showGrid: false,
      eyebrow: "border border-white/30 bg-white/10 text-[#5FD0DC]",
      eyebrowDot: "bg-[#5FD0DC]",
      heading: "text-white",
      accent: "text-white",
      intro: "text-white/85",
      primary: "bg-white text-[#2E2357] hover:bg-white/90",
      secondary: "border-2 border-white text-white hover:bg-white/10",
    }
  : {
      section: "relative overflow-hidden bg-white pt-[105px] pb-[32px] md:pt-[129px] md:pb-[64px] xl:pt-[98px] xl:pb-[64px]",
      showGrid: true,
      eyebrow: "border border-[#D9D9D9] bg-white text-slate-600 shadow-sm",
      eyebrowDot: "bg-[#1898A8]",
      heading: "text-[#0F1F3D]",
      accent: "text-[#1898A8]",
      intro: "text-[#4A4A4A]",
      primary: "bg-[#1898A8] text-white hover:bg-[#1898A8]/90",
      secondary: "border border-[#D9D9D9] bg-white text-[#1A1A1A] hover:bg-slate-50",
    };
