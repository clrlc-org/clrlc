import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { RESEARCH_QUERY } from "@/sanity/lib/queries";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { ExternalLink, FileText, Mic, Brain, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Research - CLRLC",
  description:
    "Research overview, areas, and outputs at the Center for Low-Resource Languages & Cultures.",
};

export const revalidate = 60;

export default async function ResearchPage() {
  let researches = [];
  try {
    researches = await client.fetch(RESEARCH_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    researches = [];
  }

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-20">
      {/* Overview Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary mb-8 text-center md:text-left">
            Research Overview
          </h1>
          <div className="space-y-8 text-2xl text-muted-foreground leading-normal">
            <p>
              Research at the Center for Low-Resource Languages & Cultures
              (CLRLC) is open to anyone interested in low-resource and
              multilingual language technologies, including students,
              researchers, practitioners, and community members. Our research
              ecosystem is built around collaboration, learning, and shared
              purpose rather than rigid roles or institutional boundaries.
            </p>
            <p>
              CLRLC supports open and accessible research that addresses real
              challenges faced by underrepresented languages and cultures in
              artificial intelligence. While we produce academic and technical
              outputs, our primary goal is to build capacity, strengthen
              expertise, and create meaningful impact for both researchers and
              language communities.
            </p>
            <p>
              We do not impose predefined career tracks. Instead, CLRLC offers a
              flexible research environment where contributors can explore
              ideas, develop skills, collaborate across disciplines, and build
              research profiles at their own pace. We value curiosity,
              creativity, and responsibility, and we encourage contributors to
              shape research directions that align with their interests and the
              needs of the communities involved.
            </p>
            <p>
              Through mentorship, workshops, and collaborative projects, CLRLC
              fosters a research culture that is inclusive, ethical, and
              globally connected, advancing multilingual and low-resource AI
              while supporting the growth of emerging and established
              researchers alike.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-bold font-heading mb-10 text-center">
            Research Areas
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.1}>
            <Card className="h-full hover:shadow-lg transition-all border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Mic className="h-6 w-6 text-primary" />
                  Speech Technology
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Tools and models for processing and understanding speech in
                low-resource languages.
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full hover:shadow-lg transition-all border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Languages className="h-6 w-6 text-primary" />
                  Natural Language Processing (NLP)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Models and resources for translation, text analysis, and
                information extraction.
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full hover:shadow-lg transition-all border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="h-6 w-6 text-primary" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Algorithms for language-specific and culture-specific AI tasks.
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Publications Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        <FadeIn>
          <div className="border-b pb-4 mb-8">
            <h2 className="text-3xl font-bold font-heading mb-2">
              Publications & Papers
            </h2>
            <p className="text-3xl text-muted-foreground italic">
              “Check back for our latest publications.”
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-6">
          {researches.map((item: any) => (
            <FadeIn key={item._id}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">
                      {item.category ? item.category.toUpperCase() : "RESEARCH"}
                    </Badge>
                    {item.link && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="gap-2"
                        >
                          Read Paper <FileText className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <CardTitle className="text-xl md:text-2xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {item.authors && item.authors.length > 0
                      ? item.authors.join(", ")
                      : "CLRLC Research Team"}
                  </CardDescription>
                </CardHeader>
                {item.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </FadeIn>
          ))}
          {researches.length === 0 && (
            <div className="text-center py-12 text-muted-foreground bg-muted/30 rounded-lg">
              <p>No publications currently listed.</p>
            </div>
          )}
        </StaggerContainer>
      </div>
    </div>
  );
}
