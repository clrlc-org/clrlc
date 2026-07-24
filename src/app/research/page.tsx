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

const markAnimClass: Record<number, string> = {
  1: "[animation-name:research-float-1]",
  2: "[animation-name:research-float-2]",
  3: "[animation-name:research-float-3]",
};

const floatingLanguages = [
  { name: "Yorùbá", top: "8%", left: "18%", duration: "12s", delay: "-2s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Hausa", top: "14%", left: "78%", duration: "14s", delay: "-6s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Igbo", top: "26%", left: "6%", duration: "10s", delay: "-4s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Swahili", top: "22%", left: "88%", duration: "13s", delay: "-8s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Amharic", top: "46%", left: "4%", duration: "11s", delay: "-1s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Zulu", top: "40%", left: "94%", duration: "15s", delay: "-9s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Twi", top: "68%", left: "10%", duration: "9s", delay: "-3s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Wolof", top: "74%", left: "86%", duration: "12s", delay: "-7s", size: "text-base sm:text-lg", anim: 2, color: "text-white" },
  { name: "Shona", top: "86%", left: "26%", duration: "14s", delay: "-5s", size: "text-sm sm:text-base", anim: 2, color: "text-white" },
  { name: "Somali", top: "90%", left: "62%", duration: "10s", delay: "-10s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Oromo", top: "10%", left: "48%", duration: "13s", delay: "-11s", size: "text-base sm:text-lg", anim: 3, color: "text-white" },
  { name: "Xhosa", top: "90%", left: "42%", duration: "11s", delay: "-4.5s", size: "text-sm", anim: 1, color: "text-white/80" },
  { name: "Quechua", top: "56%", left: "8%", duration: "15s", delay: "-6.5s", size: "text-sm sm:text-base", anim: 2, color: "text-teal-300/80" },
  { name: "Tigrinya", top: "60%", left: "92%", duration: "9s", delay: "-2.5s", size: "text-sm", anim: 1, color: "text-teal-300/80" },
  { name: "Nahuatl", top: "4%", left: "62%", duration: "12.5s", delay: "-8.5s", size: "text-sm sm:text-base", anim: 2, color: "text-purple-300/70" },
  { name: "Māori", top: "94%", left: "10%", duration: "13.5s", delay: "-3.5s", size: "text-sm", anim: 1, color: "text-purple-300/70" },
];

const focusAreas = [
  {
    name: "Data Curation",
    description:
      "We curate high-quality speech and text datasets for African and other low-resource languages, supporting research, model development, benchmarking, and inclusive language technologies.",
  },
  {
    name: "Language Models & Resources",
    description:
      "We develop language models, benchmarks, and open resources that bring underrepresented languages into modern AI systems.",
  },
  {
    name: "Training & Mentorship",
    description:
      "We build capacity through structured training programmes and mentorship, supporting students, researchers, and practitioners as they grow in NLP and AI.",
  },
  {
    name: "Webinars, Workshops & Events",
    description:
      "We host webinars, workshops, and community events that connect researchers, developers, linguists, and language communities for collaboration and knowledge exchange.",
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
      <section className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading as="h1" invert className="mb-6 lg:mb-8">
              Advancing AI:
              <br />
              For Every Language
            </SectionHeading>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <style>{`
                @keyframes research-mark-rotate {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
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
                    className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-semibold pointer-events-none motion-reduce:[animation-name:none] ${markAnimClass[item.anim]} ${item.size} ${item.color}`}
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

                <svg
                  viewBox="0 0 100 100"
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 origin-center [animation:research-mark-rotate_36s_linear_infinite] motion-reduce:[animation:none] sm:h-28 sm:w-28 lg:h-36 lg:w-36"
                >
                  <defs>
                    <linearGradient
                      id="research-mark-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#14b8a6" />
                      <stop offset="50%" stopColor="#1e3a8a" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="42"
                    r="30"
                    fill="none"
                    stroke="url(#research-mark-gradient)"
                    strokeWidth="3"
                  />
                  <ellipse
                    cx="50"
                    cy="42"
                    rx="13"
                    ry="30"
                    fill="none"
                    stroke="url(#research-mark-gradient)"
                    strokeWidth="2"
                    opacity="0.85"
                  />
                  <line
                    x1="20"
                    y1="42"
                    x2="80"
                    y2="42"
                    stroke="url(#research-mark-gradient)"
                    strokeWidth="2"
                    opacity="0.85"
                  />
                  <path
                    d="M24 28 Q50 20 76 28"
                    fill="none"
                    stroke="url(#research-mark-gradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <path
                    d="M24 56 Q50 64 76 56"
                    fill="none"
                    stroke="url(#research-mark-gradient)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <path
                    d="M32 66 L22 84 L44 70 Z"
                    fill="url(#research-mark-gradient)"
                    opacity="0.9"
                  />
                </svg>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-xl lg:text-2xl leading-relaxed text-white/70 max-w-3xl">
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
            <SectionHeading as="h2" className="text-4xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8">
              What We Focus On
            </SectionHeading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading as="h2" invert className="text-4xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8">
              Projects
            </SectionHeading>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="h-full rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-4">
                  Dataset / Machine Translation
                </span>

                <Subheading className="mb-4">YorGe-CS Corpus</Subheading>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  A Yoruba–German code-switched machine translation corpus
                  covering five domains: Education, Food, Business,
                  Agriculture, and Sport.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-white border border-border px-4 py-1.5 text-sm font-medium text-primary">
                    2,006 Sentence Pairs
                  </span>
                  <span className="inline-flex items-center rounded-full bg-white border border-border px-4 py-1.5 text-sm font-medium text-primary">
                    5 Domains
                  </span>
                  <Badge>Coming Soon</Badge>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full flex flex-col justify-center rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30">
                <Subheading className="mb-4">Langture</Subheading>
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
            <SectionHeading as="h2" className="text-4xl sm:text-4xl lg:text-5xl mb-6 lg:mb-8">
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
