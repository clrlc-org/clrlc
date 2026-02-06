import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Events - CLRLC",
  description: "Upcoming and past events at CLRLC.",
};

export const revalidate = 60;

// Helper component for Event Card to reduce duplication
function EventCard({
  event,
  isPast = false,
}: {
  event: any;
  isPast?: boolean;
}) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow overflow-hidden">
      {event.image && (
        <div className="w-full h-48 overflow-hidden relative">
          <img
            src={urlFor(event.image).width(600).height(400).url()}
            alt={event.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="secondary" className="mb-2">
            {event.type}
          </Badge>
          <div className="text-xs text-muted-foreground flex flex-col items-end gap-1 max-w-[70%] text-right">
            <span>
              {new Date(event.date).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })}
            </span>
            {event.location && (
              <div className="flex items-start gap-1 justify-end w-full">
                <MapPin className="w-3 h-3 mt-[2px] flex-shrink-0" />
                <span className="break-words leading-tight">
                  {event.location}
                </span>
              </div>
            )}
          </div>
        </div>
        <CardTitle className="line-clamp-2 leading-tight">
          {event.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-lg text-muted-foreground line-clamp-3">
          {event.description}
        </p>
      </CardContent>
      <CardFooter>
        {event.link ? (
          <Button asChild className="w-full">
            <a href={event.link} target="_blank" rel="noreferrer">
              {isPast ? "Read more" : "Register / Details"}
            </a>
          </Button>
        ) : (
          <Button disabled variant="outline" className="w-full">
            Details Coming Soon
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default async function EventsPage() {
  let events = [];
  try {
    events = await client.fetch(EVENTS_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    events = [];
  }

  const now = new Date();
  const upcomingEvents = events.filter(
    (event: any) => new Date(event.date) >= now,
  );
  // Sort upcoming events by date ascending (nearest first)
  upcomingEvents.sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const pastEvents = events.filter((event: any) => new Date(event.date) < now);
  // Sort past events by date descending (most recent first)
  pastEvents.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-16">
      <div className="text-center space-y-4">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            Events
          </h1>
          <p className="text-xl text-muted-foreground">
            Workshops, conferences, and webinars.
          </p>
        </FadeIn>
      </div>

      <section className="space-y-8">
        <FadeIn>
          <h2 className="text-3xl font-bold border-b pb-4">Upcoming Events</h2>
        </FadeIn>
        {upcomingEvents.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event: any) => (
              <FadeIn key={event._id}>
                <EventCard event={event} />
              </FadeIn>
            ))}
          </StaggerContainer>
        ) : (
          <FadeIn>
            <div className="py-12 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <p className="text-xl text-muted-foreground font-medium">
                Upcoming events will be announced soon. Check back for updates!
              </p>
            </div>
          </FadeIn>
        )}
      </section>

      {pastEvents.length > 0 && (
        <section className="space-y-8">
          <FadeIn>
            <h2 className="text-3xl font-bold border-b pb-4 text-slate-500">
              Past Events
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event: any) => (
              <FadeIn key={event._id}>
                <div className="opacity-80 hover:opacity-100 transition-opacity">
                  <EventCard event={event} isPast={true} />
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </section>
      )}
    </div>
  );
}
