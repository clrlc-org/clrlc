"use client";

import React from "react";
import {
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Globe } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/brand-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials?: {
    platform: string;
    url: string;
  }[];
}

interface TeamMemberCardProps {
  member: TeamMember;
  size?: "compact" | "large";
}

export function TeamMemberCard({ member, size = "compact" }: TeamMemberCardProps) {
  const avatarSize = size === "large"
    ? "h-35 w-35 sm:h-35 sm:w-35 md:h-48 md:w-48 lg:h-48 lg:w-48"
    : "h-30 w-30 sm:h-30 sm:w-30 md:h-40 md:w-40 lg:h-40 lg:w-40";

  const nameSize = size === "large"
    ? "text-base md:text-lg"
    : "text-sm md:text-base";

  const roleSize = size === "large"
    ? "text-sm md:text-base"
    : "text-xs md:text-sm";

  const fallbackTextSize = size === "large"
    ? "text-3xl sm:text-3xl md:text-4xl"
    : "text-2xl sm:text-2xl md:text-3xl";
  const SocialIcon = ({ platform }: { platform: string }) => {
    if (platform.toLowerCase().includes("linkedin"))
      return <LinkedinIcon className="h-3.5 w-3.5" />;

    if (
      platform.toLowerCase().includes("twitter") ||
      platform.toLowerCase().includes("x")
    )
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-3.5 h-3.5 fill-current"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      );

    return <Globe className="h-3.5 w-3.5" />;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group flex flex-col items-center gap-4 cursor-pointer text-center hover:opacity-80 transition-opacity w-full">
          <Avatar className={`${avatarSize} rounded-full flex-shrink-0`}>
            {member.image && (
              <AvatarImage
                src={member.image}
                alt={member.name}
                className="object-cover"
              />
            )}
            <AvatarFallback className={`${fallbackTextSize} font-bold rounded-full`}>
              {member.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1 w-full px-2">
            <div className={`${nameSize} font-bold leading-tight`}>
              {member.name}
            </div>
            <div className={`text-primary font-medium ${roleSize}`}>
              {member.role}
            </div>
            {member.socials && member.socials.length > 0 && (
              <div
                className="flex gap-2 pt-2 justify-center"
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
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-4">
            <Avatar className="h-32 w-32 sm:h-40 sm:w-40">
              {member.image && (
                <AvatarImage
                  src={member.image}
                  alt={member.name}
                />
              )}
              <AvatarFallback className="text-2xl">
                {member.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-left">
              <DialogTitle className="text-3xl font-bold font-heading text-slate-900">
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
          <p className="text-lg text-muted-foreground leading-relaxed text-justify">
            {member.bio}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}