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

export const metadata: Metadata = {
  title: "Events - CLRLC",
  description: "Upcoming and past events at CLRLC.",
};

export const revalidate = 60;

export default async function EventsPage() {
  let events = [];
  try {
    events = await client.fetch(EVENTS_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    events = [];
  }

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-12">
      <div className="text-center space-y-4">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            Events
          </h1>
          <p className="text-muted-foreground">
            Workshops, conferences, and webinars.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event: any) => (
          <FadeIn key={event._id}>
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
                  <span className="text-xs text-muted-foreground">
                    {new Date(event.date).toLocaleDateString(undefined, {
                      dateStyle: "medium",
                    })}
                  </span>
                </div>
                <CardTitle className="line-clamp-2 leading-tight">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
              </CardContent>
              <CardFooter>
                {event.link ? (
                  <Button asChild className="w-full">
                    <a href={event.link} target="_blank" rel="noreferrer">
                      Register / Details
                    </a>
                  </Button>
                ) : (
                  <Button disabled variant="outline" className="w-full">
                    Details Coming Soon
                  </Button>
                )}
              </CardFooter>
            </Card>
          </FadeIn>
        ))}
        {events.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No events found. Please add events via the CMS.
          </div>
        )}
      </StaggerContainer>
    </div>
  );
}
