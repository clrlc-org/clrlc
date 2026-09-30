import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Zap, Calendar, Lightbulb, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/Motion";
import { SectionHeading, Subheading } from "@/components/Heading";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Newsletter - CLRLC",
  description: "Research updates, dataset releases, and community highlights in low-resource language technology.",
};

async function getRecentPosts() {
  try {
    const response = await fetch("https://clrlcorg.substack.com/feed.json", {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch Substack feed");
      return [];
    }

    const data = await response.json();

    // Extract the 3 most recent posts
    const posts = data.items?.slice(0, 3).map((item: any) => ({
      title: item.title,
      date: item.date_published ? new Date(item.date_published).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }) : "",
      url: item.url,
    })) || [];

    return posts;
  } catch (error) {
    console.error("Error fetching Substack feed:", error);
    return [];
  }
}

export default async function NewsletterPage() {
  const recentPosts = await getRecentPosts();

  const features = [
    {
      icon: BookOpen,
      title: "Research Updates",
      description: "New papers, projects and findings from our community.",
    },
    {
      icon: Zap,
      title: "Dataset Releases",
      description: "Be first to know when new corpora and benchmarks go live.",
    },
    {
      icon: Users,
      title: "Community Highlights",
      description: "Stories from workshops, conferences and our members.",
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Upcoming talks, workshops and the summer school.",
    },
    {
      icon: Lightbulb,
      title: "Opportunities",
      description: "Calls for annotators, volunteers, collaborators and speakers.",
    },
    {
      icon: Sparkles,
      title: "Founder's Notes",
      description: "Reflections on building AI for every language.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20 lg:pt-28">
      {/* Header Section with Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-[#0d5f6b] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn delay={0.1}>
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  Join Our Community of Language Technologists
                </h1>
                <p className="text-lg text-primary-foreground/90">
                  Stay up to date with our research, dataset releases and community events, and find ways to contribute.
                </p>
              </div>

              <div>
                <NewsletterForm variant="dark" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <SectionHeading as="h2" className="mb-4">
                What You Will Get
              </SectionHeading>
              <p className="text-xl text-slate-600">
                News and updates from CLRLC, sent to your inbox.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.05}>
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 h-full">
                    <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Recent Issues Section */}
      {recentPosts.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn delay={0.1}>
              <div className="text-center mb-16">
                <SectionHeading as="h2" className="mb-4">
                  Recent Issues
                </SectionHeading>
                <p className="text-xl text-slate-600">
                  Our latest newsletter posts
                </p>
              </div>
            </FadeIn>

            <StaggerContainer className="max-w-3xl mx-auto space-y-6">
              {recentPosts.map((post, idx) => (
                <FadeIn key={idx} delay={0.1 + idx * 0.1}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-6 rounded-2xl border border-slate-200 hover:border-primary/30 hover:bg-slate-50 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary transition-colors mb-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {post.date}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}
    </div>
  );
}
