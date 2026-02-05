import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { Card, CardContent } from "@/components/ui/card"; // Added this import for the new Card component

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
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
              Join Our Community
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl text-muted-foreground leading-normal">
              Be part of a global network of researchers, linguists, and
              technologists working to democratize AI.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                <a
                  href="https://forms.gle/SYxmHtsQjgpESMYv7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fill Membership Form
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
              <h2 className="text-2xl font-bold text-slate-900">
                Why Join CLRLC?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left pt-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-xl">
                    collaborate
                  </h3>
                  <p className="text-lg text-slate-600">
                    Connect with peers worldwide and work on impactful projects.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-xl">
                    Access Resources
                  </h3>
                  <p className="text-lg text-slate-600">
                    Get access to datasets, tools, and mentorship opportunities.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-primary text-xl">
                    Make an Impact
                  </h3>
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
