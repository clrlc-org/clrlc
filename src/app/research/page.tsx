import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { RESEARCH_QUERY } from "@/sanity/lib/queries";
import { Badge } from "@/components/ui/badge";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading, Subheading } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Research - CLRLC",
  description:
    "Research overview, areas, and outputs at the Center for Low-Resource Languages & Cultures.",
};

export const revalidate = 60;

const floatAnimClass: Record<number, string> = {
  1: "[animation-name:research-float-1]",
  2: "[animation-name:research-float-2]",
  3: "[animation-name:research-float-3]",
};

const floatingLanguages = [
  { name: "Yoruba", top: "6%", left: "10%", duration: "12s", delay: "-2s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Hausa", top: "5%", left: "32%", duration: "14s", delay: "-6s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Igbo", top: "8%", left: "55%", duration: "10s", delay: "-4s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Swahili", top: "4%", left: "78%", duration: "13s", delay: "-8s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Amharic", top: "10%", left: "95%", duration: "11s", delay: "-1s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Zulu", top: "22%", left: "20%", duration: "15s", delay: "-9s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Twi", top: "20%", left: "45%", duration: "9s", delay: "-3s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Wolof", top: "25%", left: "68%", duration: "12s", delay: "-7s", size: "text-lg sm:text-xl", anim: 2, color: "text-white" },
  { name: "Shona", top: "18%", left: "88%", duration: "14s", delay: "-5s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Somali", top: "30%", left: "5%", duration: "10s", delay: "-10s", size: "text-sm", anim: 1, color: "text-teal-300/80" },
  { name: "Oromo", top: "38%", left: "30%", duration: "13s", delay: "-11s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Xhosa", top: "42%", left: "55%", duration: "11s", delay: "-4.5s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Quechua", top: "35%", left: "80%", duration: "15s", delay: "-6.5s", size: "text-sm sm:text-base", anim: 2, color: "text-teal-300/80" },
  { name: "Guarani", top: "48%", left: "12%", duration: "9s", delay: "-2.5s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Nahuatl", top: "55%", left: "40%", duration: "12.5s", delay: "-8.5s", size: "text-lg sm:text-xl", anim: 3, color: "text-white" },
  { name: "Maori", top: "50%", left: "65%", duration: "13.5s", delay: "-3.5s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Cherokee", top: "58%", left: "90%", duration: "11s", delay: "-9.5s", size: "text-sm", anim: 1, color: "text-purple-300/70" },
  { name: "Tagalog", top: "65%", left: "22%", duration: "14s", delay: "-1.5s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Uyghur", top: "70%", left: "48%", duration: "10s", delay: "-6s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Tibetan", top: "68%", left: "72%", duration: "15s", delay: "-12s", size: "text-sm sm:text-base", anim: 2, color: "text-purple-300/70" },
  { name: "Maithili", top: "75%", left: "8%", duration: "9.5s", delay: "-4s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Sinhala", top: "80%", left: "33%", duration: "12s", delay: "-7.5s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Khmer", top: "85%", left: "58%", duration: "13s", delay: "-10.5s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Lao", top: "78%", left: "82%", duration: "11.5s", delay: "-2.8s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Fula", top: "90%", left: "15%", duration: "14.5s", delay: "-5.5s", size: "text-sm", anim: 1, color: "text-teal-300/80" },
  { name: "Bambara", top: "92%", left: "42%", duration: "10.5s", delay: "-8s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Tigrinya", top: "88%", left: "65%", duration: "13.5s", delay: "-3s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Kinyarwanda", top: "95%", left: "88%", duration: "12s", delay: "-11.5s", size: "text-sm sm:text-base", anim: 3, color: "text-white" },
];

const focusAreas = [
  {
    name: "Data Curation",
    description:
      "We curate high-quality speech and text datasets for African and other low-resource languages, powering NLP tasks such as machine translation, ASR, and speech-to-speech translation, with expert annotation for linguistic and cultural accuracy.",
  },
  {
    name: "Language Models & Resources",
    description:
      "We develop language models, benchmarks, and open resources that bring underrepresented languages and their cultures into modern AI systems, in collaboration with researchers and institutions worldwide.",
  },
];

export default async function ResearchPage() {
  let researches = [];
  try {
    researches = await client.fetch(RESEARCH_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    researches = [];
  }

  return (
    <div>
      {/* Overview */}
      <section className="relative overflow-hidden bg-primary pt-28 pb-10 lg:pt-36 lg:pb-14">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading as="h1" className="text-slate-900 mb-6 lg:mb-8">
              Advancing AI:
              <br />
              For Every Language
            </SectionHeading>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <style>{`
                @keyframes research-float-1 {
                  0%, 100% { opacity: 0; transform: translateY(0); }
                  15%, 50% { opacity: 0.35; transform: translateY(-6px); }
                  85% { opacity: 0; transform: translateY(6px); }
                }
                @keyframes research-float-2 {
                  0%, 100% { opacity: 0; transform: translateY(0); }
                  15%, 50% { opacity: 0.55; transform: translateY(-6px); }
                  85% { opacity: 0; transform: translateY(6px); }
                }
                @keyframes research-float-3 {
                  0%, 100% { opacity: 0; transform: translateY(0); }
                  15%, 50% { opacity: 0.75; transform: translateY(-6px); }
                  85% { opacity: 0; transform: translateY(6px); }
                }
              `}</style>
              <div className="relative h-64 sm:h-72 lg:h-[420px]">
                {floatingLanguages.map((item) => (
                  <span
                    key={item.name}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-semibold pointer-events-none motion-reduce:[animation-name:none] ${floatAnimClass[item.anim]} ${item.size} ${item.color}`}
                    style={{
                      top: item.top,
                      left: item.left,
                      animationDuration: item.duration,
                      animationDelay: item.delay,
                      animationTimingFunction: "ease-in-out",
                      animationIterationCount: "infinite",
                    }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl lg:text-2xl leading-relaxed text-white max-w-3xl">
                Our research focuses on advancing AI for low-resource
                languages through the development of high-quality speech and
                text dataset. We combine interdisciplinary research with
                community-driven approaches to build technologies that
                preserve linguistic and cultural diversity.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading as="h2" className="text-4xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 lg:mb-8">
              What We Focus On
            </SectionHeading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {focusAreas.map((area, index) => (
              <FadeIn key={area.name} delay={index * 0.1}>
                <div className="h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                  <Subheading className="mb-3">{area.name}</Subheading>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-primary py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading as="h2" className="text-4xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 lg:mb-8">
              Projects
            </SectionHeading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Dataset / Machine Translation
                </span>

                <Subheading className="mb-4 uppercase">YorGe-CS Corpus</Subheading>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  A Yoruba–German code-switched machine translation corpus
                  covering five domains: Education, Food, Business,
                  Agriculture, and Sport.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-white border border-border px-4 py-1.5 text-sm font-medium text-primary">
                    5 Domains
                  </span>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full flex flex-col justify-center rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <Subheading className="mb-4 uppercase">Langture</Subheading>
                <div>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* Publications & Papers */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading as="h2" className="text-4xl sm:text-4xl lg:text-5xl text-slate-900 mb-6 lg:mb-8">
              Publications & Papers
            </SectionHeading>
          </FadeIn>

          <StaggerContainer className="border-t border-border">
            {researches.map((item: any) => {
              const year = item.publishedAt
                ? new Date(item.publishedAt).getFullYear()
                : "—";
              const rowClasses =
                "group flex items-center justify-between gap-6 border-b border-border py-8 px-2 -mx-2 rounded-lg transition-colors hover:bg-secondary/60";

              const content = (
                <>
                  <div className="flex items-center gap-6 flex-1 min-w-0">
                    <span className="shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white font-heading font-bold text-base">
                      {year}
                    </span>
                    <div className="min-w-0">
                      <Subheading>{item.title}</Subheading>
                      {item.description && (
                        <p className="text-lg text-slate-600 leading-relaxed truncate max-w-xl">
                          {item.description}
                        </p>
                      )}
                      {item.category && (
                        <p className="text-sm text-slate-600/70 uppercase tracking-wide mt-1">
                          {item.category}
                        </p>
                      )}
                    </div>
                  </div>
                  {item.link && (
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground shrink-0 transition-colors group-hover:text-primary" />
                  )}
                </>
              );

              return (
                <FadeIn key={item._id}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className={rowClasses}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={rowClasses}>{content}</div>
                  )}
                </FadeIn>
              );
            })}

            {researches.length === 0 && (
              <FadeIn>
                <div className="text-center py-16 px-6 my-8 bg-white/60 border border-dashed border-border rounded-2xl">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Publications coming soon.
                  </p>
                </div>
              </FadeIn>
            )}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
