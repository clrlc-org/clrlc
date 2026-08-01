import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { FadeIn } from "@/components/Motion";
import EventsList from "./EventsList";

export const metadata: Metadata = {
  title: "Events - CLRLC",
  description: "Workshops, webinars and conferences",
};

export const revalidate = 60;

export default async function EventsPage() {
  // Fetch from Sanity
  let sanityEvents: any[] = [];
  try {
    sanityEvents = await client.fetch(EVENTS_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  return (
    <div className="min-h-screen">
      {/* HERO with globe background */}
      <section
        className="relative flex items-end min-h-[420px] pt-32 pb-20 overflow-hidden"
        aria-label="Events Hero"
      >
        {/* Globe background image */}
        <div className="absolute inset-0">
          <img
            src="/images/events-bg.jpg"
            alt="World map background"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b263a]/85 via-[#1b263a]/60 to-[#1b263a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b263a]/60 via-transparent to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm font-medium mb-5 tracking-wide">
                CLRLC · Community Events
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold font-heading text-white leading-tight mb-4">
                Events
              </h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Workshops, webinars and conferences
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dynamic Interactive Filter & Events List */}
      <EventsList events={sanityEvents} />
    </div>
  );
}