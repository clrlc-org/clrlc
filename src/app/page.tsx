import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  Users,
  BookOpen,
  Calendar,
  MapPin,
} from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/Motion";

import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  let featuredEvent = null;
  try {
    const events = await client.fetch(EVENTS_QUERY);
    if (events && events.length > 0) {
      featuredEvent = events[0]; // Get the latest event
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* ... (Hero and Features sections remain unchanged) ... */}
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-slate-600 bg-white shadow-sm mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Advancing AI for Every Language
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-slate-900 leading-[1.1]">
                No Language or Culture <br />
                <span className="text-[#4b6995] transparent items-center">
                  Left Behind
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                Center for Low-Resource Languages & Cultures (CLRLC) is a global
                ecosystem dedicated to democratizing Artificial Intelligence
                through ethical data curation, inclusive research, and
                community-driven innovation.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/mission">Our Mission</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 rounded-full text-lg border-2 hover:bg-slate-50 transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/community">Join Community</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <FadeIn>
              <div className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100/50 hover:border-slate-200">
                <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Research & Data
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Pioneering NLP and speech technology for under-resourced
                  languages. We strictly adhere to ethical data curation
                  practices.
                </p>
                <Link
                  href="/research"
                  className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform"
                >
                  View Publications <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn>
              <div className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100/50 hover:border-slate-200">
                <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Events & Workshops
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Global conferences, hands-on workshops, and webinars designed
                  to foster knowledge exchange and collaboration.
                </p>
                <Link
                  href="/events"
                  className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform"
                >
                  Upcoming Events <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn>
              <div className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl border border-slate-100/50 hover:border-slate-200">
                <div className="h-14 w-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Community
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  A thriving ecosystem of linguists, technologists, and
                  researchers. Join our mentorship programs and networks.
                </p>
                <Link
                  href="/community"
                  className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform"
                >
                  Join Network <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* --- STATS / IMPACT SECTION --- */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-slate-800 opacity-50"></div>

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                  Global Impact
                </h2>
                <p className="text-xl text-primary-foreground/80 leading-relaxed">
                  We are building a future where AI speaks every language. Our
                  work spans continents, bringing together diverse voices to
                  solve complex technical challenges.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="rounded-full px-8"
                  asChild
                >
                  <Link href="/team">Meet the Team</Link>
                </Button>
              </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                    CONTINENTS
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                    MEMBERS
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                    PROJECTS
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 text-center">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-sm text-primary-foreground/80 font-medium tracking-wide">
                    LANGUAGES
                  </div>
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* --- LATEST HIGHLIGHTS (Dynamic) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-2">
                Latest Updates
              </h2>
              <p className="text-slate-600">
                News, research, and community stories.
              </p>
            </div>
            <Button
              variant="outline"
              asChild
              className="hidden md:inline-flex rounded-full"
            >
              <Link href="/events">View All Events</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Event Card */}
            <FadeIn delay={0.1}>
              <Card className="border-none shadow-none bg-transparent group h-full">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 bg-slate-200 relative">
                  {featuredEvent?.image ? (
                    <img
                      src={urlFor(featuredEvent.image)
                        .width(800)
                        .height(450)
                        .url()}
                      alt={featuredEvent.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-slate-300 animate-pulse group-hover:scale-105 transition-transform duration-500"></div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                    Featured
                  </div>
                </div>
                <CardContent className="p-0 space-y-2">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />{" "}
                      {featuredEvent?.date
                        ? new Date(featuredEvent.date).toLocaleDateString(
                            undefined,
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )
                        : "Coming Soon"}
                    </span>
                    {featuredEvent?.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {featuredEvent.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    <Link href={featuredEvent?.link || "/events"}>
                      {featuredEvent?.title || "Upcoming Event"}
                    </Link>
                  </h3>
                  <p className="text-slate-600 line-clamp-2">
                    {featuredEvent?.description ||
                      "Stay tuned for our next big event. Join us to learn more about low-resource languages in AI."}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Secondary Updates List */}
            <StaggerContainer className="space-y-6">
              {[1, 2, 3].map((i) => (
                <FadeIn key={i} delay={0.2 * i}>
                  <div className="flex gap-4 group cursor-pointer hover:bg-white p-4 rounded-xl transition-colors">
                    <div className="h-24 w-24 rounded-lg bg-slate-200 shrink-0"></div>
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-primary uppercase tracking-wider">
                        Research
                      </div>
                      <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                        New Framework for Tonal Language Processing
                      </h4>
                      <p className="text-sm text-slate-500 line-clamp-2">
                        Exploring novel approaches to tone modeling in African
                        languages...
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
