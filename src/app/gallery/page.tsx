import { Metadata } from 'next';
import { client } from '@/sanity/lib/client';
import { GALLERY_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: 'Gallery - CLRLC',
  description: 'Moments from our community.',
};

export const revalidate = 60;

export default async function GalleryPage() {
  let images = [];
  try {
    images = await client.fetch(GALLERY_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
    images = [];
  }

  return (
    <div className="container py-16 lg:py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold font-heading text-primary">Gallery</h1>
        <p className="text-muted-foreground">
          Moments from our workshops, training programs and community engagements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img: any) => (
          <div key={img._id} className="relative group overflow-hidden rounded-xl aspect-square bg-muted">
             {img.image && (
                <img 
                   src={urlFor(img.image).width(600).height(600).fit('crop').url()} 
                   alt={img.title || "Gallery Image"} 
                   className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
             )}
             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-center font-medium">{img.title}</p>
             </div>
          </div>
        ))}
         {images.length === 0 && (
           <div className="col-span-full text-center py-12 text-muted-foreground">
              No images found. Please add gallery items via the CMS.
           </div>
        )}
      </div>
    </div>
  );
}
