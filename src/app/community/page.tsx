import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading, Subheading } from "@/components/Heading";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Community - CLRLC",
  description: "Join the CLRLC community.",
};

export default async function CommunityPage() {
  let sanityEvents: any[] = [];
  try {
    const allEvents = await client.fetch(EVENTS_QUERY);
    const now = new Date();
    sanityEvents = (allEvents || [])
      .filter((e: any) => new Date(e.date) < now)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching past events:", error);
  }

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

      {/* Community in Action */}
      <div className="container mx-auto px-4 md:px-6 py-24 border-t">
        <FadeIn>
          <div className="max-w-4xl mx-auto mb-12">
            <SectionHeading as="h2" className="mb-4">Community in Action</SectionHeading>
            <p className="text-xl text-muted-foreground">
              Highlights from our recent events and community gatherings around the world.
            </p>
          </div>
        </FadeIn>

        {sanityEvents.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sanityEvents.map((event: any) => {
              const imgSrc = event.image
                ? urlFor(event.image).width(400).height(300).url()
                : null;

              return (
                <FadeIn key={event._id}>
                  <div className="flex flex-col rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm h-full">
                    {/* Image */}
                    {imgSrc && (
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                        <img
                          src={imgSrc}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5 space-y-3">
                      {/* Date & Location Label */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {new Date(event.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            {event.location}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {event.title}
                      </h3>

                      {/* Description (1 line) */}
                      {event.description && (
                        <p className="text-sm text-slate-600 line-clamp-1">
                          {event.description}
                        </p>
                      )}

                      {/* Spacer to push link to bottom */}
                      <div className="flex-1" />

                      {/* Read More Link */}
                      {event.link && (
                        <a
                          href={event.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors self-start group"
                        >
                          Read more
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        ) : (
          <FadeIn>
            <div className="py-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-slate-600">
                No past events yet
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Check back soon for updates on our community events.
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </StaggerContainer>
  );
}
