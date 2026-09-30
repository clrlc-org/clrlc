"use client";

import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { MapPin, Calendar, ArrowRight, Filter } from "lucide-react";

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

function EventRow({ event, isPast = false }: { event: any; isPast?: boolean }) {
  const imgSrc = event.image
    ? urlFor(event.image).width(800).url()
    : null;

  const typeLabel = TYPE_LABEL[event.type] ?? event.type;
  const typeColor =
    TYPE_COLOR[event.type] ?? "bg-white text-slate-600 border-slate-200";

  const isRecordingLink =
    typeof event.link === "string" &&
    (event.link.includes("youtube.com") || event.link.includes("youtu.be"));

  const ctaLabel =
    event.ctaLabel ??
    (isPast ? (isRecordingLink ? "Watch Recording" : "Read More") : "Register / Details");

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

export default function EventsList({ events }: { events: any[] }) {
  const [selectedType, setSelectedType] = useState<string>("all");

  const allTypes = Array.from(
    new Set(events.map((e) => e.type).filter(Boolean))
  ) as string[];

  const filteredEvents = selectedType === "all"
    ? events
    : events.filter((e) => e.type === selectedType);

  const now = new Date();

  const upcomingEvents = filteredEvents
    .filter((e: any) => new Date(e.date) >= now)
    .sort(
      (a: any, b: any) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

  const pastEvents = filteredEvents
    .filter((e: any) => new Date(e.date) < now)
    .sort(
      (a: any, b: any) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

  return (
    <>
      {/* FILTER BAR */}
      <div className="sticky top-[60px] z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 py-3 flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter by event type
          </span>
          <button
            onClick={() => setSelectedType("all")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              selectedType === "all"
                ? "bg-primary text-white"
                : "border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            All Events
          </button>
          {allTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer capitalize ${
                selectedType === type
                  ? "bg-primary text-white"
                  : "border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {TYPE_LABEL[type] ?? type}
            </button>
          ))}
        </div>
      </div>

      {/* EVENTS CONTENT */}
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

      </div>
    </>
  );
}
