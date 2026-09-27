// @ts-nocheck
/* eslint-disable */
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col min-h-screen bg-[#F7FAFC] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl">
            <FadeIn delay={0.1}>
              <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm md:text-base mb-6 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#1B7586]"></span>
                Center for Low-Resource Languages & Cultures
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-8">
                Every Voice <br />
                <span className="text-[#1B7586]">Deserves</span> <br />
                To Be Heard.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="max-w-2xl text-lg md:text-xl font-serif font-normal text-black leading-relaxed mb-12">
                We are a global ecosystem dedicated to democratizing Artificial Intelligence through ethical data curation, inclusive research, and community-driven innovation.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-6 items-center">
                <Button
                  size="lg"
                  className="h-14 px-10 rounded-full text-lg font-semibold bg-[#1B7586] hover:bg-slate-900 transition-colors"
                  asChild
                >
                  <Link href="/about">Discover Our Work</Link>
                </Button>
                <Link
                  href="/community"
                  className="inline-flex items-center text-lg font-bold text-black hover:text-[#1B7586] transition-colors group"
                >
                  Join the Community 
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL FEATURES GRID --- */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* Feature 1 */}
            <FadeIn>
              <div className="p-8 md:p-12 group hover:bg-slate-50 transition-colors h-full flex flex-col">
                <BookOpen className="w-12 h-12 text-[#1B7586] mb-8" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 tracking-tight">Research & Data</h3>
                <p className="text-black text-lg font-normal leading-relaxed mb-8 flex-grow">
                  Pioneering NLP and speech technology for under-resourced languages with strict adherence to ethical data curation practices.
                </p>
                <Link href="/research" className="text-[#1B7586] font-bold uppercase tracking-wider text-sm flex items-center group-hover:underline">
                  Explore Publications <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </FadeIn>

            {/* Feature 2 */}
            <FadeIn>
              <div className="p-8 md:p-12 group hover:bg-slate-50 transition-colors h-full flex flex-col">
                <Calendar className="w-12 h-12 text-[#1B7586] mb-8" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 tracking-tight">Events & Workshops</h3>
                <p className="text-black text-lg font-normal leading-relaxed mb-8 flex-grow">
                  Global conferences, hands-on workshops, and webinars designed to foster knowledge exchange and technological collaboration.
                </p>
                <Link href="/events" className="text-[#1B7586] font-bold uppercase tracking-wider text-sm flex items-center group-hover:underline">
                  View Upcoming <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </FadeIn>

            {/* Feature 3 */}
            <FadeIn>
              <div className="p-8 md:p-12 group hover:bg-slate-50 transition-colors h-full flex flex-col">
                <Users className="w-12 h-12 text-[#1B7586] mb-8" />
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 tracking-tight">Global Community</h3>
                <p className="text-black text-lg font-normal leading-relaxed mb-8 flex-grow">
                  A thriving ecosystem of linguists, technologists, and researchers building the future of inclusive AI.
                </p>
                <Link href="/community" className="text-[#1B7586] font-bold uppercase tracking-wider text-sm flex items-center group-hover:underline">
                  Join The Network <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </FadeIn>

          </StaggerContainer>
        </div>
      </section>

      {/* --- HIGH CONTRAST IMPACT STATS --- */}
      <section className="py-32 bg-slate-900 text-white relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-[#4DB2C8] font-bold tracking-widest uppercase text-sm mb-4">The Impact</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
                Building a future where AI speaks every language.
              </h3>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-lg">
                Our work spans continents, bringing together diverse voices to solve complex technical challenges and preserve cultural heritage.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 gap-x-8 gap-y-16">
              <FadeIn delay={0.1}>
                <div className="border-l-4 border-[#1B7586] pl-6">
                  <div className="text-5xl lg:text-6xl font-black mb-2">5+</div>
                  <div className="text-sm text-gray-300 font-bold uppercase tracking-widest">Continents</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="border-l-4 border-[#1B7586] pl-6">
                  <div className="text-5xl lg:text-6xl font-black mb-2">500+</div>
                  <div className="text-sm text-gray-300 font-bold uppercase tracking-widest">Members</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="border-l-4 border-[#1B7586] pl-6">
                  <div className="text-5xl lg:text-6xl font-black mb-2">2+</div>
                  <div className="text-sm text-gray-300 font-bold uppercase tracking-widest">Projects</div>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="border-l-4 border-[#1B7586] pl-6">
                  <div className="text-5xl lg:text-6xl font-black mb-2">10+</div>
                  <div className="text-sm text-gray-300 font-bold uppercase tracking-widest">Languages</div>
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL HIGHLIGHTS --- */}
      <section className="py-32 bg-[#F7FAFC]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-200 pb-8">
            <div>
              <h2 className="text-[#1B7586] font-bold tracking-widest uppercase text-sm mb-2">News & Updates</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-black tracking-tight">
                Latest from CLRLC
              </h3>
            </div>
            <Link href="/events" className="text-black font-bold uppercase tracking-wider text-sm flex items-center hover:text-[#1B7586] transition-colors">
              View All News <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Massive Featured Event */}
            <div className="lg:col-span-8">
              <FadeIn delay={0.1}>
                <div className="group cursor-pointer">
                  <div className="aspect-[16/9] w-full bg-slate-200 relative overflow-hidden mb-8">
                    {featuredEvent?.image ? (
                      <img
                        src={urlFor(featuredEvent.image).width(1200).height(800).url()}
                        alt={featuredEvent.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-slate-300 animate-pulse"></div>
                    )}
                    <div className="absolute top-6 left-6 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#1B7586]">
                      Featured
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-black font-bold uppercase tracking-wider mb-4">
                    <span>
                      {featuredEvent?.date
                        ? new Date(featuredEvent.date).toLocaleDateString(undefined, {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Coming Soon"}
                    </span>
                    {featuredEvent?.location && (
                      <span className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black rounded-full"></span>
                        {featuredEvent.location}
                      </span>
                    )}
                  </div>
                  <Link href={featuredEvent?.link || "/events"}>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 group-hover:text-[#1B7586] transition-colors leading-tight">
                      {featuredEvent?.title || "Upcoming Community Event"}
                    </h4>
                  </Link>
                  <p className="text-lg text-black font-normal line-clamp-2">
                    {featuredEvent?.description || "Stay tuned for our next big event. Join us to learn more about low-resource languages in AI."}
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Secondary List */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <StaggerContainer className="flex flex-col h-full justify-between gap-8">
                {[1, 2, 3].map((i) => (
                  <FadeIn key={i} delay={0.2 * i}>
                    <div className="group cursor-pointer border-l-2 border-slate-200 pl-6 hover:border-[#1B7586] transition-colors py-2">
                      <div className="text-xs font-bold text-[#1B7586] uppercase tracking-wider mb-3">
                        Research
                      </div>
                      <h4 className="font-serif font-bold text-xl md:text-2xl text-black leading-tight group-hover:text-[#1B7586] transition-colors mb-3">
                        New Framework for Tonal Language Processing
                      </h4>
                      <p className="text-black line-clamp-2 text-lg font-normal">
                        Exploring novel approaches to tone modeling in African languages to build more inclusive voice recognition systems.
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}