import { Metadata } from "next";
import { FadeIn } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About CLRLC",
  description: "Learn about the Center for Low-Resource Languages and Cultures.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-12">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            About Us
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="prose prose-2xl text-xl leading-normal dark:prose-invert mx-auto">
            <p>
              <strong>
                Center for Low-Resource Languages and Cultures (CLRLC)
              </strong>{" "}
              is a global, community-driven initiative committed to advancing
              the representation of low-resource languages and cultures in
              Artificial Intelligence.
            </p>
            <p>
              Our mission is to improve collaboration among researchers,
              linguists, technologists, and other stakeholders to create
              innovative solutions that support and elevate underrepresented
              languages and cultural knowledge in AI.
            </p>
            {/* <p>
            We believe that technology should be inclusive and that every language deserves to be represented in the digital age.
            Through our work, we strive to bridge the gap between advanced AI technologies and the communities that need them most.
          </p> */}
          </div>
        </FadeIn>

        {/* Placeholder for visuals */}
        <FadeIn delay={0.4}>
          <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mx-auto max-w-5xl">
            <img
              src="/images/about-collaboration-young.png"
              alt="Young researchers collaborating at CLRLC"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

