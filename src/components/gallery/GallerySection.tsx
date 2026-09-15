import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages, type GalleryImage } from '@/data/gallery';
import SectionHeading from '@/components/common/SectionHeading';
import SmartImage from '@/components/common/SmartImage';
import { useReveal } from '@/hooks/useReveal';

const filters = ['All', 'Food', 'Drinks', 'Events', 'Fruits'] as const;
type Filter = (typeof filters)[number];

export default function GallerySection() {
  const [filter, setFilter] = useState<Filter>('All');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const images =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A Taste of What We Do"
          subtitle="A glimpse of our food, drinks and event setups. Real photos will replace these soon."
        />

        {/* Filters */}
        <div className="mt-8 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <GalleryTile
              key={img.src}
              img={img}
              index={i}
              onClick={() => setLightbox(img)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-stone-900/90 p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

function GalleryTile({
  img,
  index,
  onClick,
}: {
  img: GalleryImage;
  index: number;
  onClick: () => void;
}) {
  const { ref, visible } = useReveal<HTMLButtonElement>();
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`group relative aspect-square overflow-hidden rounded-2xl ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <SmartImage
        src={img.src}
        alt={img.alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/30" />
      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold text-stone-700 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        {img.category}
      </span>
    </button>
  );
}
