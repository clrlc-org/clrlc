"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { sendEmail } from "@/lib/sendEmail";
import {
  Loader2,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Slack,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sendEmail(e.currentTarget);
      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(
        "Failed to send message. Please try again later or email us directly at clrlc.center@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/center-for-low-resource-languages-and-culture/",
      icon: Linkedin,
      label: "Follow us on LinkedIn",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/clrlc",
      icon: Twitter,
      label: "Follow us on X",
    },
    // {
    //   name: "Slack",
    //   href: "https://centerforlowr-m0i1128.slack.com/",
    //   icon: Slack,
    //   label: "Join our Slack Community",
    // },
    {
      name: "GitHub",
      href: "https://github.com/clrlc-org",
      icon: Github,
      label: "Contribute on GitHub",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-16 lg:space-y-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            Ways to get in touch with CLRLC
          </h1>
          <p className="text-3xl text-slate-600">
            We are always open to questions, partnerships, and collaborations.
          </p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start max-w-6xl mx-auto">
        {/* Contact Form Section */}
        <FadeIn delay={0.2} className="w-full">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">
                Send us a message
              </h2>
              <p className="text-lg text-slate-600">
                Submissions go directly to our admin team.
              </p>
            </div>

            {success ? (
              <div className="text-center text-green-600 space-y-4 py-12 bg-green-50 rounded-lg">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p>
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <Button
                  onClick={() => setSuccess(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="from_name">Full Name</Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reply_to">Email Address</Label>
                  <Input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm bg-red-50 p-3 rounded-md">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full text-lg h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>

        {/* Contact Info & Socials Section */}
        <div className="space-y-12 lg:pt-8 contents lg:block">
          {/* General Inquiries */}
          <FadeIn delay={0.3}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900 border-b pb-2">
                General Enquiries
              </h3>
              <div className="flex items-center gap-4 text-slate-600 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    Email Us
                  </p>
                  <a
                    href="mailto:clrlc.center@gmail.com"
                    className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors"
                  >
                    clrlc.center@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Connect With Us */}
          <FadeIn delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-heading text-slate-900 border-b pb-2">
                Connect With Us
              </h3>
              <StaggerContainer className="grid gap-4">
                {contactLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-slate-100 bg-white hover:border-primary/20 hover:shadow-md transition-all group"
                  >
                    <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-primary group-hover:text-white transition-colors">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-base text-slate-500">{link.label}</p>
                    </div>
                  </Link>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
