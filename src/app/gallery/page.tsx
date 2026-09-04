'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Lightbox, GalleryItem } from '@/components/gallery/Lightbox';
import { imagesConfig } from '@/config/images';
import { Maximize2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryData: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Butter Masala Dosa',
    category: 'Dosa',
    image: imagesConfig.hero.dosaHero,
    description: 'Golden, paper-thin fermented rice-lentil crepe with pure butter and potato masala.',
  },
  {
    id: 'gal-2',
    title: 'Steaming Idli Vada Sambar',
    category: 'South Indian',
    image: imagesConfig.hero.idliPlatter,
    description: 'Cloud-soft steamed idlis paired with crisp medu vada and freshly simmered sambar.',
  },
  {
    id: 'gal-3',
    title: 'The Sizzling Cast Iron Tawa',
    category: 'Behind the Scenes',
    image: imagesConfig.ambiance.tawaArt,
    description: 'Handcrafted precision: spreading slow-fermented batter on seasoned iron griddles.',
  },
  {
    id: 'gal-4',
    title: 'Warm Family Dining Ambiance',
    category: 'Restaurant',
    image: imagesConfig.ambiance.familyDining,
    description: 'Welcoming dining rooms in Bhopal designed for comfortable family meals.',
  },
  {
    id: 'gal-5',
    title: 'Mysore Masala Dosa',
    category: 'Dosa',
    image: imagesConfig.dishes.mysoreMasalaDosa,
    description: 'Crisp dosa smeared with red garlic chili chutney and filled with savoury bhaji.',
  },
  {
    id: 'gal-6',
    title: 'Thick Onion & Tomato Uttapam',
    category: 'South Indian',
    image: imagesConfig.dishes.uttapam,
    description: 'Fluffy pancake griddled with caramelised onions, ripe country tomatoes, and green chillies.',
  },
  {
    id: 'gal-7',
    title: 'Tempered Curd Rice',
    category: 'Food',
    image: imagesConfig.dishes.curdRice,
    description: 'Cooling seasoned yogurt rice tempered with mustard seeds, curry leaves, and pomegranate.',
  },
  {
    id: 'gal-8',
    title: 'Traditional Idiyappam',
    category: 'South Indian',
    image: imagesConfig.dishes.idiyappam,
    description: 'Tender steamed rice noodles served with sweet cardamom coconut milk.',
  },
  {
    id: 'gal-9',
    title: 'Kesari Halwa with Pure Desi Ghee',
    category: 'Food',
    image: imagesConfig.dishes.halwa,
    description: 'Aromatic semolina halwa infused with saffron, golden cashews, and raisins.',
  },
  {
    id: 'gal-10',
    title: 'Restaurant Seating Setup',
    category: 'Restaurant',
    image: imagesConfig.ambiance.tableSetup,
    description: 'Hygienic, comfortable table layouts welcoming guests daily.',
  },
  {
    id: 'gal-11',
    title: 'Traditional South Indian Decoction Coffee',
    category: 'Food',
    image: imagesConfig.dishes.filterCoffee,
    description: 'Frothy, full-bodied filter coffee served in traditional brass dabarah and tumbler.',
  },
  {
    id: 'gal-12',
    title: 'Crispy Lacey Rawa Dosa',
    category: 'Dosa',
    image: imagesConfig.dishes.rawaMasalaDosa,
    description: 'Semolina netted crepe roasted with black pepper, cumin seeds, and fresh ginger.',
  },
];

const categories = ['All', 'Dosa', 'Food', 'South Indian', 'Restaurant', 'Behind the Scenes'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div className="bg-brand-cream min-h-screen pb-24">
      {/* Header */}
      <section className="bg-brand-cream-card border-b border-brand-brown/10 py-8 sm:py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2.5 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-orange/20 text-xs font-semibold text-brand-orange shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Authentic Food & Hospitality</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brand-brown">
            Gallery of Flavours
          </h1>
          <p className="text-xs sm:text-base text-brand-brown-muted max-w-xl mx-auto leading-relaxed">
            A visual glimpse into our crispy dosas, steaming idlis, authentic kitchen craft, and family dining spaces in Bhopal.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12 space-y-6 sm:space-y-8">
        {/* Category Pills (Touch friendly on mobile) */}
        <div className="flex items-center sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1 px-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0',
                selectedCategory === cat
                  ? 'bg-brand-orange text-white shadow-warm-sm font-bold'
                  : 'bg-white text-brand-brown hover:border-brand-orange border border-brand-brown/10'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden bg-brand-cream-dark border border-brand-brown/10 shadow-warm-xs hover:shadow-warm-lg transition-all duration-300 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-black/40 text-brand-gold-light px-3 py-1 rounded-full border border-white/10 backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Caption & Open Icon */}
              <div className="absolute bottom-4 inset-x-4 z-10 flex items-end justify-between gap-3 text-white">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-white/75 line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="w-9 h-9 rounded-full bg-white/20 group-hover:bg-brand-orange text-white flex items-center justify-center flex-shrink-0 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={filteredItems}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </div>
  );
}
