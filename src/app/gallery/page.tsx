import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { GALLERY_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { FadeIn, StaggerContainer } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Gallery - CLRLC",
  description: "Moments from our community.",
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
    <div className="container mx-auto px-4 md:px-6 pt-32 pb-16 lg:py-24 space-y-12">
      <div className="text-center space-y-4">
        <FadeIn>
          <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Moments from our workshops, meetups, and conferences.
          </p>
        </FadeIn>
      </div>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item: any) => (
          <FadeIn key={item._id}>
            <div className="relative group overflow-hidden rounded-xl aspect-square bg-muted">
              {item.image && (
                <img
                  src={urlFor(item.image).width(800).height(800).url()}
                  alt={item.title || "Gallery Image"}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              )}
              {item.title && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-xl">{item.title}</p>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
        {images.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground">
            No images found. Please add content via the CMS.
          </div>
        )}
      </StaggerContainer>
    </div>
  );
}
