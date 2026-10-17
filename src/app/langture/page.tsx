import { Metadata } from "next";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Langture-Bench - CLRLC",
  description: "A multilingual and multicultural corpus of African proverbs and benchmark for testing language model cultural understanding.",
};

export default function LangturePage() {
  const languageList = [
    { name: "Yoruba", region: "West Africa" },
    { name: "Ewe", region: "West Africa" },
    { name: "Hausa", region: "West Africa" },
    { name: "Igbo", region: "West Africa" },
    { name: "Twi/Akan", region: "West Africa" },
    { name: "Bambara", region: "West Africa" },
    { name: "Igala", region: "West Africa" },
    { name: "Fon", region: "West Africa" },
    { name: "Swahili", region: "East Africa" },
    { name: "Kikuyu", region: "East Africa" },
    { name: "Kinyarwanda", region: "East Africa" },
    { name: "Lingala", region: "Central Africa" },
  ];

  const steps = [
    {
      number: "01",
      title: "Collection and Annotation",
      description:
        "Native speakers collect proverbs and annotate their literal and figurative meanings.",
    },
    {
      number: "02",
      title: "Validation",
      description:
        "A native-speaker linguist reviews each entry and writes the multiple-choice question.",
    },
  ];

  const teamMembers = [
    { name: "Joy Olusanya", role: "Project Lead" },
    { name: "Anusha Dixit", role: "Co-Project Lead" },
    { name: "Opeyemi Osakuade", role: "Advisor" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2E2357] to-[#1F6F86] pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#5FD0DC]">
              Langture AI
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Langture-Bench
            </h1>

            <p className="text-xl text-[#CFC9E6] max-w-2xl">
              A Multilingual and Multicultural Corpus of African Proverbs
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white bg-white/20 rounded-full">
                In progress
              </span>
            </div>

            <div className="text-sm text-white/80">
              <p>10+ languages · 10,000+ target entries · 50+ contributors</p>
            </div>

            <div>
              <a
                href="https://forms.gle/N9Q3F7Qt8nWyKAwk7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2E2357] rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Become a contributor
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Teal underline */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1898A8] to-[#2E2357]" />
      </section>

      {/* Overview Section */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 inline-block">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              About
            </span>
          </div>

          <p className="text-lg text-[#1F1F1F] leading-relaxed max-w-3xl">
            Proverbs carry the wisdom, humour and values of a culture, yet AI systems rarely understand them. Langture-Bench is a curated corpus of African proverbs, each with its literal and figurative meaning, validated by native-speaker linguists. It is also built as a benchmark to test whether language models understand culture, not just vocabulary.
          </p>
        </div>
      </section>

      {/* What Each Entry Contains */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Structure
            </span>
            <h2 className="text-4xl font-bold text-[#111111] mt-4">
              What Each Entry Contains
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: 1, text: "The proverb in its original language" },
              { num: 2, text: "Its literal meaning" },
              { num: 3, text: "Its figurative meaning" },
              { num: 4, text: "A multiple-choice question that tests understanding of the figurative meaning" },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-[#F7F4EE] rounded-lg p-6 border border-[#D9D9D9] flex flex-col"
              >
                <div className="text-3xl font-bold text-[#2E2357] mb-3">
                  {item.num}
                </div>
                <p className="text-sm text-[#1F1F1F] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Coverage
            </span>
            <h2 className="text-4xl font-bold text-[#111111] mt-4">
              10+ African languages, including:
            </h2>
            <p className="text-[#1F1F1F] mt-6">
              Target: 1,000 proverbs per language
            </p>
          </div>

          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            @media (prefers-reduced-motion: no-preference) {
              .language-carousel-left {
                animation: scroll-left 30s linear infinite;
              }
              .language-carousel-right {
                animation: scroll-right 30s linear infinite;
              }
              .language-carousel-container:hover .language-carousel-left,
              .language-carousel-container:hover .language-carousel-right {
                animation-play-state: paused;
              }
            }
          `}</style>

          <div className="space-y-8">
            {/* Top row - scrolls left */}
            <div className="language-carousel-container overflow-hidden">
              <div className="language-carousel-left flex gap-3 w-fit">
                {[...languageList.slice(0, 6), ...languageList.slice(0, 6)].map((lang, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 bg-white rounded-full border border-[#D9D9D9] whitespace-nowrap flex-shrink-0"
                  >
                    <div className="text-[#111111] font-medium">{lang.name}</div>
                    <div className="text-xs text-[#1F1F1F]/60">{lang.region}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row - scrolls right */}
            <div className="language-carousel-container overflow-hidden">
              <div className="language-carousel-right flex gap-3 w-fit">
                {[...languageList.slice(6), ...languageList.slice(6)].map((lang, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-3 bg-white rounded-full border border-[#D9D9D9] whitespace-nowrap flex-shrink-0"
                  >
                    <div className="text-[#111111] font-medium">{lang.name}</div>
                    <div className="text-xs text-[#1F1F1F]/60">{lang.region}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient fade overlays */}
          <style>{`
            .language-carousel-container {
              position: relative;
              mask-image: linear-gradient(to right, transparent, black 2%, black 98%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 2%, black 98%, transparent);
            }
          `}</style>
        </div>
      </section>

      {/* How We Build It */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Process
            </span>
            <h2 className="text-4xl font-bold text-[#111111] mt-4">
              How We Build It
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-[#F7F4EE] rounded-lg p-8 border border-[#D9D9D9]"
              >
                <div className="text-4xl font-bold text-[#2E2357] mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1F1F1F]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Road Ahead */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Timeline
            </span>
            <h2 className="text-4xl font-bold text-[#111111] mt-4">
              The Road Ahead
            </h2>
          </div>

          {/* Progress track - desktop */}
          <div className="hidden lg:block">
            <div className="relative mb-16">
              {/* "Now" pill above Phase 1 */}
              <div className="absolute -top-10 left-0 z-10">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-green-100/20 text-green-600 rounded-full border border-green-300/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Now
                </span>
              </div>

              {/* Progress bar */}
              <div className="flex gap-0 h-2 rounded-full overflow-hidden bg-gray-200">
                <div className="flex-1 bg-[#1898A8]" />
                <div className="flex-1 bg-gray-300" />
                <div className="flex-1 bg-gray-300" />
              </div>
            </div>

            {/* Phase labels */}
            <div className="grid grid-cols-3 gap-0">
              <div className="text-left">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                  Phase 1
                </div>
                <h3 className="text-lg font-bold text-[#111111]">
                  Langture-Bench
                </h3>
              </div>
              <div className="text-center opacity-45">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                  Phase 2
                </div>
                <h3 className="text-lg font-bold text-[#111111]">
                  Langture-Speech
                </h3>
              </div>
              <div className="text-right opacity-45">
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                  Phase 3
                </div>
                <h3 className="text-lg font-bold text-[#111111]">
                  LangtureLM
                </h3>
              </div>
            </div>
          </div>

          {/* Progress track - mobile (stacked) */}
          <div className="lg:hidden space-y-6">
            {[
              { num: 1, name: "Langture-Bench", isCurrent: true },
              { num: 2, name: "Langture-Speech", isCurrent: false },
              { num: 3, name: "LangtureLM", isCurrent: false },
            ].map((phase) => (
              <div key={phase.num} className={phase.isCurrent ? "" : "opacity-45"}>
                {phase.isCurrent && (
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest bg-green-100/20 text-green-600 rounded-full border border-green-300/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Now
                    </span>
                  </div>
                )}
                <div className="h-2 rounded-full bg-[#1898A8] mb-3" />
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-600 mb-1">
                  Phase {phase.num}
                </div>
                <h3 className="text-lg font-bold text-[#111111]">
                  {phase.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Leadership
            </span>
            <h2 className="text-4xl font-bold text-[#111111] mt-4">
              Team
            </h2>
          </div>

          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-[#1F1F1F]">
                <p className="font-semibold text-[#111111]">{member.name}</p>
                <p className="text-sm">{member.role}</p>
              </div>
            ))}
            <div className="text-[#1F1F1F]">
              <p className="font-semibold text-[#111111]">50+ Contributors</p>
              <p className="text-sm">Data curators, annotators, validators and language leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="bg-gradient-to-r from-[#2E2357] to-[#1F6F86] py-16 lg:py-24 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-lg text-[#CFC9E6] mb-8">
              Speak one of these languages? Join Langture-Bench as a contributor or validator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="https://forms.gle/N9Q3F7Qt8nWyKAwk7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#2E2357] rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Apply to contribute
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@clrlc.org"
                className="inline-flex items-center gap-2 text-white hover:text-[#5FD0DC] transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Questions? Email info@clrlc.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
