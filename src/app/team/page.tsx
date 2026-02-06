import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { MEMBERS_QUERY } from "@/sanity/lib/queries";

import { FadeIn, StaggerContainer } from "@/components/Motion";
import { TeamMemberCard } from "@/components/TeamMemberCard";

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
            <TeamMemberCard member={member} />
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
