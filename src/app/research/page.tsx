import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { RESEARCH_QUERY } from '@/sanity/lib/queries';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research - CLRLC',
  description: 'Our research and publications.',
};

export const revalidate = 60;

export default async function ResearchPage() {
  let publications = [];
  try {
    publications = await client.fetch(RESEARCH_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    publications = [];
  }

  return (
    <div className="container py-16 lg:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-heading text-primary">Research & Publications</h1>
        <p className="text-muted-foreground">
          Exploring the frontiers of low-resource language technology.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {publications.map((pub: any) => (
          <Card key={pub._id} className="hover:border-primary/50 transition-colors">
            <CardHeader>
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                     <div className="flex items-center gap-2">
                        <Badge variant="outline">{pub.category ? pub.category.toUpperCase() : 'RESEARCH'}</Badge>
                        {pub.publishedAt && <span className="text-xs text-muted-foreground">{pub.publishedAt}</span>}
                     </div>
                     <CardTitle className="text-xl">
                        {pub.link ? (
                           <a href={pub.link} target="_blank" rel="noreferrer" className="hover:underline hover:text-primary flex items-center gap-2">
                              {pub.title} <ExternalLink className="w-4 h-4 opacity-50" />
                           </a>
                        ) : (
                           pub.title
                        )}
                     </CardTitle>
                  </div>
               </div>
               {pub.authors && (
                  <CardDescription>
                     By: {pub.authors.join(', ')}
                  </CardDescription>
               )}
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {pub.description}
              </p>
            </CardContent>
          </Card>
        ))}
        {publications.length === 0 && (
           <div className="text-center py-12 text-muted-foreground">
              No publications found. Please add research via the CMS.
           </div>
        )}
      </div>
    </div>
  );
}
