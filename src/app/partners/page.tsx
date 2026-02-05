import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import {
  Handshake,
  Heart,
  Share2,
  Users,
  Calendar,
  Database,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partners & Sponsorship - CLRLC",
  description:
    "Collaborate with CLRLC to support inclusive and ethical language technologies.",
};

const supportAreas = [
  {
    title: "Language Data Creation",
    description:
      "Support the curation and preservation of high-quality datasets for under-resourced languages.",
    icon: Database,
  },
  {
    title: "Research",
    description:
      "Fund or collaborate on cutting-edge research in NLP, speech technology, and machine learning.",
    icon: Share2,
  },
  {
    title: "Training & Fellowships",
    description:
      "Sponsor fellowships and training programs to build capacity in emerging research communities.",
    icon: Users,
  },
  {
    title: "Community Projects",
    description:
      "Partner on community-driven language technology projects that have direct social impact.",
    icon: Heart,
  },
  {
    title: "Events",
    description:
      "Sponsor workshops, webinars, and conferences that bring together researchers and practitioners.",
    icon: Calendar,
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 lg:py-24 space-y-20">
      {/* Header Section */}
      <div className="container mx-auto px-4 md:px-6 text-center space-y-6 max-w-4xl">
        <FadeIn>
          <span className="text-primary font-bold tracking-wider uppercase text-sm">
            Collaborate With Us
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading text-slate-900 mt-2">
            Partners & Sponsorship
          </h1>
          <p className="text-3xl text-muted-foreground leading-normal">
            The Center for Low-Resource Languages & Cultures is open to
            collaboration with communities, organisations, and funders who share
            our commitment to inclusive, ethical, and culturally grounded
            language technologies.
          </p>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Introduction */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-heading text-slate-900">
                Building a Better Future Together
              </h2>
              <div className="space-y-4 text-2xl text-slate-600 leading-relaxed">
                <p>
                  We welcome partnerships and sponsorships to support our
                  mission. By working together, we can address the challenges
                  faced by under-represented languages in the digital age.
                </p>
                <p>
                  Whether you are an academic institution, a tech company, a
                  philanthropic organization, or a community group, your support
                  can help us create meaningful impact.
                </p>
              </div>
              <div className="pt-4">
                <Button size="lg" className="text-lg px-8 rounded-full" asChild>
                  <Link href="/contact">Become a Partner</Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Areas of Support */}
          <div className="bg-slate-50/50 p-6 md:p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold font-heading text-slate-900 mb-6 text-center lg:text-left">
              Areas for Collaboration
            </h3>
            <StaggerContainer className="grid gap-4">
              {supportAreas.map((area) => (
                <FadeIn key={area.title}>
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                        <area.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {area.title}
                        </h4>
                        <p className="text-lg text-slate-600 mt-1">
                          {area.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <FadeIn delay={0.4}>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white space-y-6 shadow-xl">
            <Handshake className="h-12 w-12 mx-auto text-primary-foreground/80 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Interested in Collaborating?
            </h2>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 max-w-2xl mx-auto">
              If you are interested in sponsoring a project, supporting our
              work, or exploring a partnership, we would be delighted to hear
              from you.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 rounded-full"
                asChild
              >
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
