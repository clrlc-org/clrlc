import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About CLRLC',
  description: 'Learn about the Center for Low-Resource Languages & Cultures.',
};

export default function AboutPage() {
  return (
    <div className="container py-16 lg:py-24 space-y-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold font-heading text-primary">About Us</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>
            The <strong>Center for Low-Resource Languages & Cultures (CLRLC)</strong> is a global, community-driven initiative 
            committed to advancing the representation of low-resource languages and cultures in Artificial Intelligence.
          </p>
          <p>
            Our mission is to improve collaboration among researchers, linguists, technologists, and other stakeholders 
            to create innovative solutions that support and elevate underrepresented languages and cultural knowledge in AI.
          </p>
          <p>
            We believe that technology should be inclusive and that every language deserves to be represented in the digital age.
            Through our work, we strive to bridge the gap between advanced AI technologies and the communities that need them most.
          </p>
        </div>
        
        {/* Placeholder for visuals */}
        <div className="w-full h-64 bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
           [Visuals representing team collaboration or CLRLC activities]
        </div>
      </div>
    </div>
  );
}
