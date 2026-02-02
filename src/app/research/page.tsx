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
import { ExternalLink, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Research - CLRLC",
  description: "Our research and publications.",
};

export const revalidate = 60;

export default async function ResearchPage() {
  let researches = []; // Renamed from publications to researches
  try {
    researches = await client.fetch(RESEARCH_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    researches = [];
  }

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-12">
      <div className="text-center space-y-4">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            Research & Publications
          </h1>
          <p className="text-muted-foreground">
            Explore our latest findings, datasets, and technical reports.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="space-y-6 max-w-4xl mx-auto">
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
          <div className="text-center py-12 text-muted-foreground">
            No research publications found. Please add content via the CMS.
          </div>
        )}
      </StaggerContainer>
    </div>
  );
}
