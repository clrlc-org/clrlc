import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { SectionHeading, Subheading } from "@/components/Heading";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY, GALLERY_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { MapPin, Calendar, ArrowRight, Users, Briefcase, Handshake } from "lucide-react";
import { CommunityCarousel } from "@/components/CommunityCarousel";

export const metadata: Metadata = {
  title: "Community - CLRLC",
  description: "Join the CLRLC community.",
};

export default async function CommunityPage() {
  let sanityEvents: any[] = [];
  let galleryImages: any[] = [];

  try {
    const allEvents = await client.fetch(EVENTS_QUERY);
    const now = new Date();
    sanityEvents = (allEvents || [])
      .filter((e: any) => new Date(e.date) < now)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching past events:", error);
  }

  try {
    const gallery = await client.fetch(GALLERY_QUERY);
    galleryImages = gallery || [];
  } catch (error) {
    console.error("Error fetching gallery:", error);
  }

  const waysToGetInvolved = [
    {
      icon: Users,
      title: "Become a Member",
      description: "Join a global network and get access to datasets, tools and mentorship.",
      linkText: "Fill membership form",
      linkUrl: "https://forms.gle/SYxmHtsQjgpESMYv7",
      external: true,
    },
    {
      icon: Briefcase,
      title: "Join the Core Team",
      description: "Help run CLRLC across engineering, design, web development and partnerships.",
      linkText: "Request to join",
      linkUrl: "https://docs.google.com/forms/d/1_ZRIERK7PXB0gFoo1gQgnuCS-HvwMZlm_WepTnStkJ0/viewform",
      external: true,
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Collaborate with us on research, events or funding.",
      linkText: "Contact us",
      linkUrl: "/contact",
      external: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <FadeIn delay={0.1}>
                <SectionHeading as="h1">
                  Join Our Community
                </SectionHeading>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed md:max-w-xl">
                  Be part of a global network advancing research and technology for
                  low-resource languages and cultures.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                  asChild
                >
                  <a
                    href="https://forms.gle/SYxmHtsQjgpESMYv7"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join the Community
                  </a>
                </Button>
              </FadeIn>
            </div>

            {/* Right Column: Community Carousel */}
            <FadeIn delay={0.3} direction="right">
              <div className="flex justify-center md:justify-start">
                <CommunityCarousel images={[
                  '/images/hero-1.jpg',
                  '/images/hero-2.jpg',
                  '/images/hero-3.jpg',
                  '/images/hero-4.jpg',
                  '/images/hero-5.jpg',
                  ...galleryImages.map((img: any) => urlFor(img.image).width(400).url())
                ]} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-14 lg:py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-slate-800 opacity-50"></div>

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                  MEMBERS
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                  CONTINENTS
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                  LANGUAGES
                </div>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* WAYS TO GET INVOLVED */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="mb-12">
              <SectionHeading as="h2" className="mb-4">Ways to Get Involved</SectionHeading>
              <p className="text-xl text-muted-foreground">
                Multiple ways to contribute to our mission of advancing language technology.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {waysToGetInvolved.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeIn key={idx}>
                  <div className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-8 space-y-4">
                    {/* Icon */}
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-base leading-relaxed flex-1">
                      {item.description}
                    </p>

                    {/* Link */}
                    {item.external ? (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors self-start group"
                      >
                        {item.linkText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <Link
                        href={item.linkUrl}
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors self-start group"
                      >
                        {item.linkText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* COMMUNITY IN ACTION */}
      <section className="py-24 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="mb-12">
              <SectionHeading as="h2" className="mb-4">Our Community at Work</SectionHeading>
              <p className="text-xl text-muted-foreground">
                Highlights from our recent events and community gatherings around the world.
              </p>
            </div>
          </FadeIn>

          {sanityEvents.length > 0 ? (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sanityEvents.map((event: any) => {
                const imgSrc = event.image
                  ? urlFor(event.image).width(800).url()
                  : null;

                return (
                  <FadeIn key={event._id}>
                    <div className="flex flex-col rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm h-full">
                      {/* Image: 1.9:1 aspect ratio (1200×630), event posters fit exactly */}
                      {imgSrc && (
                        <div className="relative w-full aspect-[1.9/1] bg-slate-100 flex items-center justify-center">
                          <img
                            src={imgSrc}
                            alt={event.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5 space-y-2">
                        {/* Date & Location (small text) */}
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <Calendar className="w-3 h-3 text-primary flex-shrink-0" />
                            {new Date(event.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                          {event.location && (
                            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                              <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                              {event.location}
                            </div>
                          )}
                        </div>

                        {/* Title (up to 2 lines) */}
                        <h3 className="text-base font-bold text-slate-900 leading-tight line-clamp-2">
                          {event.title}
                        </h3>

                        {/* Spacer to push link to bottom */}
                        <div className="flex-1" />

                        {/* Link - label based on destination or custom label */}
                        {event.link && (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
                          >
                            {event.linkLabel ||
                              (event.link.includes("youtube.com") || event.link.includes("youtu.be")
                                ? "Watch recording"
                                : "Read more")}
                            <ArrowRight className="w-3.5 h-3.5" />
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
      </section>

    </div>
  );
}
