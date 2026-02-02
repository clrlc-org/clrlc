import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Globe, Users, BookOpen, Calendar, Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-primary/95" /> {/* Soften the solid color if needed or use image bg */}
        <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight font-heading">
            Empowering Low-Resource Languages & Cultures in AI
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl text-primary-foreground/90">
            A global, community-driven initiative committed to advancing representation, 
            collaboration, and innovation for underrepresented languages.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
             <Button size="lg" variant="secondary" asChild>
                <Link href="/mission">Our Mission</Link>
             </Button>
             <Button size="lg" variant="outline" className="text-primary bg-background border-none hover:bg-background/90" asChild>
                <Link href="/community">Join Community</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Quick Links / Highlights */}
      <section className="py-16 bg-background">
        <div className="container space-y-12">
           <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold font-heading text-primary">Explore CLRLC</h2>
              <p className="text-muted-foreground">Discover our initiatives, research, and ways to get involved.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                 <CardHeader>
                    <Globe className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Research & Data</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground mb-4">
                       We curate high-quality datasets and build models for low-resource languages.
                       NLP, Speech, and Machine Learning.
                    </p>
                    <Link href="/research" className="text-primary font-medium hover:underline inline-flex items-center">
                       View Publications <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                 </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                 <CardHeader>
                    <Calendar className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Events & Workshops</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground mb-4">
                       Join our workshops, webinars, and conferences. Connect with experts and learners.
                    </p>
                    <Link href="/events" className="text-primary font-medium hover:underline inline-flex items-center">
                       Upcoming Events <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                 </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                 <CardHeader>
                    <Users className="w-10 h-10 text-primary mb-2" />
                    <CardTitle>Community</CardTitle>
                 </CardHeader>
                 <CardContent>
                    <p className="text-muted-foreground mb-4">
                       A global network of researchers, linguists, and technologists. 
                       Mentorship, training, and collaboration.
                    </p>
                    <Link href="/community" className="text-primary font-medium hover:underline inline-flex items-center">
                       Join Us <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                 </CardContent>
              </Card>
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
         <div className="container text-center space-y-6">
            <h2 className="text-3xl font-bold font-heading">Ready to Contribute?</h2>
            <p className="max-w-xl mx-auto text-muted-foreground">
               Whether you are a researcher, student, or community member, there is a place for you at CLRLC.
            </p>
            <Button size="lg" asChild>
               <Link href="/contact">Contact Us <Mail className="w-4 h-4 ml-2" /></Link>
            </Button>
         </div>
      </section>
    </div>
  );
}
