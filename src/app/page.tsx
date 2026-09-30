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
import { SectionHeading, Subheading } from "@/components/Heading";
import { CommunityCarousel } from "@/components/CommunityCarousel";

import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY, RESEARCH_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface ResearchArticle {
  _id: string;
  title: string;
  category?: string;
  authors?: string[];
  description: string;
  link?: string;
  publishedAt?: string;
}

export default async function Home() {
  let featuredEvent = null;
  let researchArticles: ResearchArticle[] = [];

  try {
    const events = await client.fetch(EVENTS_QUERY);
    if (events && events.length > 0) {
      featuredEvent = events[0];
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }

  try {
    const research = await client.fetch(RESEARCH_QUERY);
    researchArticles = research ? research.slice(0, 3) : [];
  } catch (error) {
    console.error("Error fetching research:", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* ... (Hero and Features sections remain unchanged) ... */}
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <FadeIn delay={0.1}>
                <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium text-slate-600 bg-white shadow-sm mx-auto md:mx-0">
                  <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Advancing AI for Every Language
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <SectionHeading as="h1">
                  <span className="italic">Every Voice</span> Deserves <br />
                  <span className="text-primary">to be Heard</span>
                </SectionHeading>
              </FadeIn>

              <FadeIn delay={0.3}>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mx-auto md:mx-0 md:max-w-xl">
                  Center for Low-Resource Languages & Cultures (CLRLC) is a global
                  ecosystem dedicated to democratizing Artificial Intelligence
                  through ethical data curation, inclusive research, and
                  community-driven innovation.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="h-12 px-8 rounded-full text-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
                    asChild
                  >
                    <Link href="/research">Discover Our Work</Link>
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

            {/* Right Column: Community Photo Carousel */}
            <FadeIn delay={0.3} direction="right">
              <div className="flex justify-center md:justify-start">
                <CommunityCarousel />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <FadeIn>
              <Link href="/research" className="group block">
                <div className="relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-slate-200/50 hover:border-primary/30 h-full flex flex-col">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <Subheading className="mb-3">Research & Data</Subheading>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                    Pioneering NLP and speech technology for under-resourced
                    languages. We strictly adhere to ethical data curation
                    practices.
                  </p>
                  <div className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    View Publications <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn>
              <Link href="/events" className="group block">
                <div className="relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-slate-200/50 hover:border-primary/30 h-full flex flex-col">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <Subheading className="mb-3">Events & Workshops</Subheading>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                    Global conferences, hands-on workshops, and webinars designed
                    to foster knowledge exchange and collaboration.
                  </p>
                  <div className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    Upcoming Events <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn>
              <Link href="/community" className="group block">
                <div className="relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-slate-200/50 hover:border-primary/30 h-full flex flex-col">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <Subheading className="mb-3">Global Community</Subheading>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                    A thriving ecosystem of linguists, technologists, and
                    researchers. Join our mentorship programs and networks.
                  </p>
                  <div className="inline-flex items-center font-semibold text-primary group-hover:translate-x-1 transition-transform">
                    Join Network <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          </StaggerContainer>
        </div>
      </section>

      {/* --- STATS / IMPACT SECTION --- */}
      <section className="py-14 lg:py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary to-slate-800 opacity-50"></div>

        <div className="container mx-auto relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="space-y-6">
                <SectionHeading as="h2">
                  Global Impact
                </SectionHeading>
                <p className="text-xl text-white leading-relaxed">
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
                  <Link href="/about#team">Meet the Team</Link>
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
                  <div className="text-4xl font-bold mb-2">2+</div>
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
              <SectionHeading as="h2" className="mb-2">
                Latest Updates
              </SectionHeading>
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
                  <Subheading className="group-hover:text-primary transition-colors">
                    <Link href={featuredEvent?.link || "/events"}>
                      {featuredEvent?.title || "Upcoming Event"}
                    </Link>
                  </Subheading>
                  <p className="text-slate-600 line-clamp-2">
                    {featuredEvent?.description ||
                      "Stay tuned for our next big event. Join us to learn more about low-resource languages in AI."}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Secondary Updates List */}
            <StaggerContainer className="space-y-6">
              {researchArticles.length > 0 ? (
                researchArticles.map((article: ResearchArticle, i) => (
                  <FadeIn key={article._id} delay={0.2 * (i + 1)}>
                    <Link href={article.link || "#"}>
                      <div className="flex gap-4 group cursor-pointer hover:bg-white p-4 rounded-xl transition-colors">
                        <div className="h-24 w-24 rounded-lg bg-slate-200 shrink-0 flex-shrink-0"></div>
                        <div className="space-y-2 flex-1 min-w-0">
                          <div className="text-xs font-bold text-primary uppercase tracking-wider">
                            {article.category || "Research"}
                          </div>
                          <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </h4>
                          <p className="text-sm text-slate-500 line-clamp-2">
                            {article.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))
              ) : (
                <div className="col-span-1 md:col-span-1 flex items-center justify-center p-12 bg-white rounded-xl border border-slate-200 text-center">
                  <div>
                    <p className="text-slate-500 mb-2">More updates coming soon</p>
                    <p className="text-sm text-slate-400">Check back for the latest research and news</p>
                  </div>
                </div>
              )}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* --- CLOSING CTA SECTION --- */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-[#0d5f6b] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <FadeIn delay={0.1}>
              <h2 className="font-heading font-extrabold text-3xl lg:text-4xl leading-tight tracking-wide">
                Build the Future of <br />
                <span className="text-primary-bright">Language Technology</span> with CLRLC
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Join our global community of researchers, linguists, and innovators working to make AI inclusive and accessible for all languages.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8 rounded-full text-lg font-semibold transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/community">Volunteer with CLRLC</Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 px-8 rounded-full text-lg font-semibold transition-all hover:scale-105"
                  asChild
                >
                  <Link href="/contact">Partner With Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
