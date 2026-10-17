import { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Langture-Bench - CLRLC",
  description: "A multilingual and multicultural corpus of African proverbs and benchmark for testing language model cultural understanding.",
};

export default function LangtureBenchPage() {
  const languages = [
    {
      region: "West Africa",
      languages: ["Yoruba", "Ewe", "Hausa", "Igbo", "Twi/Akan", "Bambara"],
    },
    {
      region: "East Africa",
      languages: ["Swahili", "Kikuyu", "Kinyarwanda"],
    },
    {
      region: "Central Africa",
      languages: ["Lingala"],
    },
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

  const phases = [
    {
      name: "Phase 1",
      title: "Langture-Bench",
      description: "The proverb corpus and a paper (now)",
    },
    {
      name: "Phase 2",
      title: "Langture-Speech",
      description: "Recorded proverbs",
    },
    {
      name: "Phase 3",
      title: "LangtureLM",
      description: "A model built on both corpora",
    },
  ];

  const teamMembers = [
    { name: "Joy Olusanya", role: "Project Lead" },
    { name: "Anusha Dixit", role: "Co-Project Lead" },
    { name: "Opeyemi Osakuade", role: "Advisor" },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 lg:pt-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2E2357] to-[#1F6F86] pt-20 pb-16 lg:pt-28 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm"
          >
            ← Back to Research
          </Link>

          <div className="space-y-8">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#5FD0DC]">
              Langture
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

          <div className="space-y-8">
            {languages.map((group) => (
              <div key={group.region}>
                <h3 className="text-lg font-semibold text-[#111111] mb-4">
                  {group.region}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-white rounded-full text-[#111111] font-medium border border-[#D9D9D9]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

      {/* Progress Section */}
      <section className="bg-[#F7F4EE] py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 inline-block">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#1898A8]">
              Status
            </span>
          </div>

          <p className="text-lg text-[#1F1F1F] leading-relaxed max-w-3xl">
            Data curation is under way across all ten languages, led by language teams of native-speaker contributors.
          </p>
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

          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-[#D9D9D9]" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              {phases.map((phase, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-center">
                  {/* Circle indicator */}
                  <div className="mb-6 relative">
                    {idx === 0 ? (
                      // Current phase - green circle
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center border-4 border-green-500">
                          <CheckCircle2 className="w-8 h-8 text-green-600" />
                        </div>
                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-widest text-green-600 whitespace-nowrap">
                          Current phase
                        </span>
                      </div>
                    ) : (
                      // Future phases - faded circle
                      <div className="w-16 h-16 rounded-full bg-gray-200/50 flex items-center justify-center border-2 border-gray-300/50 opacity-40" />
                    )}
                  </div>

                  {/* Phase content */}
                  <div className={`text-center mt-8 ${idx !== 0 ? 'opacity-40 blur-sm' : ''}`}>
                    <div className="text-sm font-semibold uppercase tracking-widest text-[#1898A8] mb-2">
                      {phase.name}
                    </div>
                    <h3 className="text-xl font-bold text-[#111111]">
                      {phase.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
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
