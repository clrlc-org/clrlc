import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Community - CLRLC',
  description: 'Join the CLRLC community.',
};

export default function CommunityPage() {
  return (
    <div className="container py-16 lg:py-24 max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold font-heading text-primary">Join Our Community</h1>
        <p className="text-xl text-muted-foreground">
           Become part of a global network of researchers, linguists, and technologists.
        </p>
      </div>

      <div className="bg-muted/50 p-8 rounded-2xl border text-center space-y-6">
         <h2 className="text-2xl font-semibold">Ready to get involved?</h2>
         <p className="text-muted-foreground max-w-xl mx-auto">
            Our community uses Slack for daily discussions and knowledge sharing. 
            Fill out the form below to receive an invite and join our ecosystem.
         </p>
         
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
               <a href="https://forms.gle/SYxmHtsQjgpESMYv7" target="_blank" rel="noreferrer">
                  Fill Membership Form
               </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
               <a href="https://centerforlowr-m0i1128.slack.com/" target="_blank" rel="noreferrer">
                  Go to Slack Workspace
               </a>
            </Button>
         </div>
      </div>
    </div>
  );
}
