import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Database, BrainCircuit, GraduationCap, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Mission - CLRLC',
  description: 'Our mission is to advance the representation of low-resource languages in AI.',
};

export default function MissionPage() {
  return (
    <div className="container py-16 lg:py-24 space-y-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">Our Mission</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          "Our mission is to advance the representation and inclusion of low-resource languages and cultures in 
          Artificial Intelligence by fostering collaboration among researchers, linguists, technologists, and communities worldwide."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Database, title: 'Data Curation', desc: 'Curating high-quality datasets for inclusive AI systems.' },
          { icon: BrainCircuit, title: 'Applied AI Research', desc: 'Developing models for translation, speech, and NLP.' },
          { icon: GraduationCap, title: 'Training & Mentorship', desc: 'Supporting learners at all levels in AI technologies.' },
          { icon: Users, title: 'Knowledge Exchange', desc: 'Connecting experts and communities for meaningful impact.' },
        ].map((item, idx) => (
          <Card key={idx} className="bg-muted/30 border-none shadow-sm h-full">
            <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
              <item.icon className="w-12 h-12 text-primary" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
         <p>
            We aim to create innovative and impactful solutions. Our training and mentorship programs 
            support learners at beginner, intermediate, and advanced levels, for those interested in 
            learning and building inclusive, culturally intelligent AI language technologies.
         </p>
         <p>
            By connecting experts, nurturing talent, and promoting meaningful knowledge exchange, we aim 
            to empower underrepresented communities, preserve cultural heritage, and drive sustainable 
            progress in AI for under-resourced languages.
         </p>
      </div>
    </div>
  );
}
