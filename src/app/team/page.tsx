import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { MEMBERS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Our Team - CLRLC",
  description: "Meet the team behind CLRLC.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function TeamPage() {
  let members = [];
  try {
    members = await client.fetch(MEMBERS_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    // Fallback for build/demo without valid credentials
    members = [];
  }

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-12">
      <div className="text-center space-y-4">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            Meet the researchers and leaders driving our mission.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member: any) => (
          <FadeIn key={member._id}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16">
                  {member.image && (
                    <AvatarImage
                      src={urlFor(member.image).width(200).height(200).url()}
                      alt={member.name}
                    />
                  )}
                  <AvatarFallback>
                    {member.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium text-lg">
                    {member.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground line-clamp-4 leading-relaxed">
                  {member.bio}
                </p>

                {member.socials && member.socials.length > 0 && (
                  <div className="flex gap-3 pt-2">
                    {member.socials.map((social: any, idx: number) => {
                      const Icon = social.platform
                        .toLowerCase()
                        .includes("linkedin")
                        ? Linkedin
                        : social.platform.toLowerCase().includes("twitter") ||
                            social.platform.toLowerCase().includes("x")
                          ? Twitter
                          : Globe;
                      return (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          title={social.platform}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
        {members.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No members found. Please add members via the CMS.
          </div>
        )}
      </StaggerContainer>
    </div>
  );
}
