/*import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Database, BrainCircuit, GraduationCap, Users } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { SectionHeading, Subheading } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Our Mission - CLRLC",
  description:
    "Our mission is to advance the representation of low-resource languages in AI.",
};

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <FadeIn>
          <SectionHeading as="h1" align="center">
            Our Mission
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-2xl text-muted-foreground leading-normal">
            Our mission is to advance the representation and inclusion of
            low-resource languages and cultures in Artificial Intelligence by
            fostering collaboration among researchers, linguists, technologists,
            and communities worldwide.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Database,
            title: "Data Curation",
            desc: "Curating high-quality datasets for inclusive AI systems.",
          },
          {
            icon: BrainCircuit,
            title: "Applied AI Research",
            desc: "Developing models for translation, speech, and NLP.",
          },
          {
            icon: GraduationCap,
            title: "Training & Mentorship",
            desc: "Supporting learners at all levels in AI technologies.",
          },
          {
            icon: Users,
            title: "Knowledge Exchange",
            desc: "Connecting experts and communities for meaningful impact.",
          },
        ].map((item, idx) => (
          <FadeIn key={idx}>
            <Card className="bg-muted/30 border-none shadow-sm h-full">
              <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                <item.icon className="w-12 h-12 text-primary" />
                <Subheading>{item.title}</Subheading>
                <p className="text-lg text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </StaggerContainer>

      <div className="max-w-4xl mx-auto prose prose-2xl dark:prose-invert text-center">
        <FadeIn delay={0.4}>
          <p className="text-xl leading-normal">
            We aim to create innovative and impactful solutions through data
            curation, applied AI/ NLP research, training programs, mentorship,
            workshops and conferences. Our training and mentorship programs
            support learners at beginner, intermediate, and advanced levels, for
            those interested in learning and building inclusive, culturally
            intelligent AI language technologies.
          </p>
          <p className="text-xl leading-normal">
            By connecting experts, nurturing talent, and promoting meaningful
            knowledge exchange, we aim to empower underrepresented communities,
            preserve cultural heritage, and drive sustainable progress in AI for
            under-resourced languages.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
*/