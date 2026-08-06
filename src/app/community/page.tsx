import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { Card, CardContent } from "@/components/ui/card"; // Added this import for the new Card component
import { SectionHeading, Subheading } from "@/components/Heading";

export const metadata: Metadata = {
  title: "Community - CLRLC",
  description: "Join the CLRLC community.",
};

export default function CommunityPage() {
  return (
    <StaggerContainer>
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 max-w-4xl space-y-12">
        <div className="text-center space-y-6">
          <FadeIn>
            <SectionHeading as="h1" align="center">
              Join Our Community
            </SectionHeading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-muted-foreground leading-normal">
              Be part of a global network advancing research and technology for
              low-resource languages and cultures.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                <a
                  href="https://forms.gle/SYxmHtsQjgpESMYv7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fill Membership Form
                </a>
              </Button>
              <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                <a
                  href="https://docs.google.com/forms/d/1_ZRIERK7PXB0gFoo1gQgnuCS-HvwMZlm_WepTnStkJ0/viewform"
                  target="_blank"
                  rel="noreferrer"
                >
                  Request to Join the CLRLC Core Team
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 text-lg"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <Card className="bg-slate-50 border-none shadow-sm p-8 text-center">
            <CardContent className="space-y-4">
              <SectionHeading as="h2" align="center">
                Why Join CLRLC?
              </SectionHeading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
                <div className="space-y-2">
                  <Subheading>Collaborate</Subheading>
                  <p className="text-lg text-slate-600">
                    Connect with peers worldwide and work on impactful projects.
                  </p>
                </div>
                <div className="space-y-2">
                  <Subheading>Access Resources</Subheading>
                  <p className="text-lg text-slate-600">
                    Get access to datasets, tools, and mentorship opportunities.
                  </p>
                </div>
                <div className="space-y-2">
                  <Subheading>Make an Impact</Subheading>
                  <p className="text-lg text-slate-600">
                    Contribute to preserving languages and empowering
                    communities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </StaggerContainer>
  );
}
