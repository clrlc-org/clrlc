"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from '@/components/Motion';
import { sendEmail } from "@/lib/sendEmail";
import { Loader2 } from "lucide-react";

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
        "Failed to send message. Please try again later or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 max-w-2xl space-y-12">
      <div className="text-center space-y-4">
        <FadeIn>
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
          Contact Us
        </h1>
        <p className="text-muted-foreground">
          Have questions or want to collaborate? Send us a message.
        </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
      <div className="bg-card border rounded-xl p-8 shadow-sm">
        {success ? (
          <div className="text-center text-green-600 space-y-4 py-8">
            <h3 className="text-2xl font-bold">Message Sent!</h3>
            <p>Thank you for reaching out. We will get back to you shortly.</p>
            <Button onClick={() => setSuccess(false)} variant="outline">
              Send another message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="from_name">Name</Label>
              <Input
                id="from_name"
                name="from_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reply_to">Email</Label>
              <Input
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="How can we help?"
                rows={5}
                required
              />
            </div>

            {error && (
              <p className="text-destructive text-sm" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Or email us directly at:{" "}
          <a
            href="mailto:clrlc.center@gmail.com"
            className="text-primary hover:underline"
          >
            clrlc.center@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
