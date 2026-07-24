import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { MapPin, Calendar, ArrowRight, Filter } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Events - CLRLC",
  description:
    "Workshops, webinars and conferences",
};

export const revalidate = 60;

const STATIC_EVENTS = [
  {
    _id: "static-1",
    title: "Research Skills for Emerging Researchers: From Ideas to publication",
    date: "2026-07-03T14:00:00.000Z",
    location: "Online (Zoom)",
    type: "webinar",
    description:
      "A live webinar covering essential research skills for emerging researchers in low-resource language and AI fields. Led by PhD Researcher Opeyemi Osakuade from the University of Edinburgh.",
    link: "https://youtu.be/pDIeFJNeCkc?si=KJ04jLZhL4W0MJGA",
    staticImage: "/images/event_1.png",
    speaker: "Opeyemi Osakuade",
    speakerRole: "PhD Researcher, University of Edinburgh & Advisor at CLRLC",
  },
  {
    _id: "static-2",
    title: "Culturally Aware AI Systems for Low-Resource Languages",
    date: "2026-05-08T20:00:00.000Z",
    location: "Online (Zoom)",
    type: "webinar",
    description:
      "Building Inclusive Language Technology — An online webinar exploring multilingual-first language modeling and culturally aware AI systems. Speaker: Alejandro Rodriguez Salamanca, Senior Research Engineer at Cohere Labs.",
    link: "https://youtu.be/eas_73swCjc?si=M9CfXNtcI6xwyFR4",
    staticImage: "/images/event_2.png",
    speaker: "Alejandro Rodriguez Salamanca",
    speakerRole: "Senior Research Engineer, Cohere Labs",
  },
  {
    _id: "static-3",
    title: "CLRLC-LLMs Workshop @ NeurIPS 2025",
    date: "2025-12-01T09:00:00.000Z",
    location: "Hilton Mexico City Reforma, Mexico City, Mexico",
    type: "workshop",
    description:
      "Centering Low-Resource Languages and Cultures in the Age of Large Language Models — a full-day workshop co-located with NeurIPS 2025, featuring invited talks, paper presentations, and panel discussions.",
    link: "https://clrlcllms.github.io/CLRLCLLMs-workshop.github.io-NeurIPS-2025/",
    staticImage: "/images/event_3.png",
    speaker: null,
    speakerRole: null,
    // No recording exists for this event, only a link to more details/description
    ctaLabel: "Read More",
  },
];


const TYPE_LABEL: Record<string, string> = {
  webinar: "Webinar",
  workshop: "Workshop",
  conference: "Conference",
  training: "Training",
};

const TYPE_COLOR: Record<string, string> = {
  webinar: "bg-white text-slate-600 border-slate-200",
  workshop: "bg-white text-slate-600 border-slate-200",
  conference: "bg-white text-slate-600 border-slate-200",
  training: "bg-white text-slate-600 border-slate-200",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatTime(dateStr: string) {
  return new Date(dateStr).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
}


function EventRow({ event, isPast = false }: { event: any; isPast?: boolean }) {
  const imgSrc = event.image
    ? urlFor(event.image).width(600).height(420).url()
    : event.staticImage || null;

  const typeLabel = TYPE_LABEL[event.type] ?? event.type;
  const typeColor =
    TYPE_COLOR[event.type] ?? "bg-white text-slate-600 border-slate-200";

  const ctaLabel = event.ctaLabel ?? (isPast ? "Watch Recording" : "Register / Details");

  return (
    <article
      className={`group relative flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 ${
        isPast ? "opacity-80 hover:opacity-100" : ""
      }`}
    >
      {/* Image */}
      <div className="relative w-full md:w-72 lg:w-96 flex-shrink-0 overflow-hidden bg-slate-100 aspect-[4/3] md:aspect-auto">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
            <span className="text-slate-400 text-sm">No Image</span>
          </div>
        )}
        {/* Overlay gradient for image–content blend */}
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-r from-transparent to-white hidden md:block" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
        <div className="space-y-3">
          {/* Type badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${typeColor}`}
          >
            {typeLabel}
            {isPast && (
              <span className="text-[10px] opacity-60 ml-1">(Past)</span>
            )}
          </span>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
            {event.title}
          </h3>

          {/* Speaker if available */}
          {event.speaker && (
            <p className="text-sm font-medium text-slate-700">
              {event.speaker}
              {event.speakerRole && (
                <span className="text-slate-500 font-normal">
                  {" "}
                  — {event.speakerRole}
                </span>
              )}
            </p>
          )}

          {/* Description */}
          {event.description && (
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              {event.description}
            </p>
          )}
        </div>

        {/* Meta + CTA */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Date & Location */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
              <span>{formatDate(event.date)}</span>
            </div>
            {event.location && (
              <div className="flex items-start gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-[1px]" />
                <span>{event.location}</span>
              </div>
            )}
          </div>

          {/* CTA button */}
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noreferrer"
              id={`event-cta-${event._id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors flex-shrink-0 group/btn"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-slate-400 text-sm font-semibold flex-shrink-0 cursor-not-allowed">
              Details Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}


export default async function EventsPage() {
  let sanityEvents: any[] = [];
  try {
    sanityEvents = await client.fetch(EVENTS_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  const allEvents: any[] =
    sanityEvents.length > 0 ? sanityEvents : STATIC_EVENTS;

  const now = new Date();
  const upcomingEvents = allEvents
    .filter((e: any) => new Date(e.date) >= now)
    .sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

  const pastEvents = allEvents
    .filter((e: any) => new Date(e.date) < now)
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  const allTypes = [
    ...new Set(allEvents.map((e: any) => e.type).filter(Boolean)),
  ] as string[];

  return (
    <div className="min-h-screen">
      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* HERO with globe background */}
      {/* ──────────────────────────────────────────────────────────────────── */}
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

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* FILTER BAR */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <div className="sticky top-[60px] z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 py-3 flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter by event type
          </span>
          <a
            href="#upcoming"
            id="filter-upcoming"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary text-white"
          >
            All Events
          </a>
          {allTypes.map((type) => (
            <a
              key={type}
              href={`#${type}`}
              id={`filter-${type}`}
              className="px-4 py-1.5 rounded-full text-sm font-medium border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors capitalize"
            >
              {TYPE_LABEL[type] ?? type}
            </a>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────── */}
      {/* EVENTS CONTENT */}
      {/* ──────────────────────────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 pb-24 space-y-20 mt-16">
        {/* Upcoming */}
        <section id="upcoming" aria-labelledby="upcoming-heading">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h2
                  id="upcoming-heading"
                  className="text-3xl font-bold text-slate-900"
                >
                  Upcoming Events
                </h2>
                <p className="text-slate-500 mt-1">
                  {upcomingEvents.length > 0
                    ? `${upcomingEvents.length} event${upcomingEvents.length === 1 ? "" : "s"} coming up`
                    : "No upcoming events scheduled"}
                </p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
            </div>
          </FadeIn>

          {upcomingEvents.length > 0 ? (
            <StaggerContainer className="space-y-6">
              {upcomingEvents.map((event: any) => (
                <FadeIn key={event._id}>
                  <EventRow event={event} />
                </FadeIn>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <div className="py-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-center">
                <p className="text-lg font-semibold text-slate-600">
                  Upcoming events will be announced soon!
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Check back for updates or follow us on social media.
                </p>
              </div>
            </FadeIn>
          )}
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section id="past" aria-labelledby="past-heading">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <h2
                    id="past-heading"
                    className="text-3xl font-bold text-slate-500"
                  >
                    Past Events
                  </h2>
                  <p className="text-slate-400 mt-1">
                    {pastEvents.length} event
                    {pastEvents.length === 1 ? "" : "s"} completed
                  </p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-6">
              {pastEvents.map((event: any) => (
                <FadeIn key={event._id}>
                  <EventRow event={event} isPast />
                </FadeIn>
              ))}
            </StaggerContainer>
          </section>
        )}
      </div>
    </div>
  );
}
