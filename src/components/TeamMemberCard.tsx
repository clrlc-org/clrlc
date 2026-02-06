"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Twitter, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { urlFor } from "@/sanity/lib/image";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: any;
  bio: string;
  socials?: {
    platform: string;
    url: string;
  }[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const SocialIcon = ({ platform }: { platform: string }) => {
    if (platform.toLowerCase().includes("linkedin"))
      return <Linkedin className="h-5 w-5" />;
    if (
      platform.toLowerCase().includes("twitter") ||
      platform.toLowerCase().includes("x")
    )
      return <Twitter className="h-5 w-5" />;
    return <Globe className="h-5 w-5" />;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <Avatar className="h-24 w-24">
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
          <CardContent className="space-y-4 flex-grow">
            <p className="text-lg text-muted-foreground line-clamp-4 leading-relaxed">
              {member.bio}
            </p>

            {member.socials && member.socials.length > 0 && (
              <div
                className="flex gap-3 pt-2 mt-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {member.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title={social.platform}
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-4">
            <Avatar className="h-32 w-32 sm:h-40 sm:w-40">
              {member.image && (
                <AvatarImage
                  src={urlFor(member.image).width(400).height(400).url()}
                  alt={member.name}
                />
              )}
              <AvatarFallback className="text-2xl">
                {member.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-left">
              <DialogTitle className="text-3xl font-bold font-heading text-primary">
                {member.name}
              </DialogTitle>
              <div className="text-xl font-medium text-muted-foreground">
                {member.role}
              </div>
              {member.socials && member.socials.length > 0 && (
                <div className="flex gap-3 pt-2">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title={social.platform}
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {member.bio}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
