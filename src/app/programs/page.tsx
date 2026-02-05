import { Metadata } from "next";
import Image from "next/image";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Programs - CLRLC",
  description: "Overview of CLRLC programs, initiatives, and what we do.",
};

const programs = [
  {
    title: "Applied Research Projects",
    description:
      "We conduct cutting-edge research to develop language technologies that solve real-world problems. Our applied projects bridge the gap between theoretical AI and practical applications for low-resource languages.",
    image: "/images/programs/research.png",
    reverse: false,
  },
  {
    title: "Workshops, Mentorship & Training",
    description:
      "Empowering the next generation of AI researchers and practitioners through intensive workshops, long-term mentorship programs, and technical training designed to build local capacity and expertise.",
    image: "/images/programs/workshop.png",
    reverse: true,
  },
  {
    title: "Knowledge Exchange",
    description:
      "Fostering cross-disciplinary collaboration and knowledge exchange between linguists, computer scientists, and community stakeholders. We believe that diverse perspectives drive better AI solutions.",
    image: "/images/programs/collaboration.png",
    reverse: false,
  },
  {
    title: "Datasets Curation",
    description:
      "We curate high-quality datasets to build inclusive AI application systems, including machine translation, speech recognition, and other language technologies application. Our dataset curation focuses on under-resourced languages and cultures, ensuring ethical data collection, cultural relevance, and broad usability for global AI and NLP research and applications.",
    image: "/images/programs/data.png",
    reverse: true,
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 lg:py-24 space-y-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
        <FadeIn>
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            What We Do
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-slate-900 mt-2">
            Programs & Initiatives
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Overview of CLRLC programs and initiatives aimed at democratizing AI
            for under-resourced languages.
          </p>
        </FadeIn>
      </div>

      {/* Programs List */}
      <div className="container mx-auto px-4 md:px-6">
        <StaggerContainer className="space-y-24">
          {programs.map((program, index) => (
            <FadeIn key={program.title}>
              <div
                className={cn(
                  "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                  program.reverse && "lg:flex-row-reverse",
                )}
              >
                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 font-heading">
                    {program.title}
                  </h2>
                  <div className="h-1 w-20 bg-primary rounded-full" />
                  <p className="text-lg text-slate-600 leading-relaxed text-balance">
                    {program.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
