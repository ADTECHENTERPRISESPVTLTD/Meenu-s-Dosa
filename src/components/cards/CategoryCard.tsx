'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MenuCategory } from '@/types';
import { ArrowRight, Utensils, Camera } from 'lucide-react';

interface CategoryCardProps {
  category: MenuCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <Link
      href={`/menu?category=${category.slug || category.id}`}
      className="group relative rounded-3xl overflow-hidden bg-brand-cream-card h-64 sm:h-72 flex flex-col justify-end p-5 sm:p-6 border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      {!hasError && category.image ? (
        <Image
          src={category.image}
          alt={`${category.name} at Meenu's Dosa`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={() => setHasError(true)}
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-90"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-brand-cream-card to-brand-cream-dark flex flex-col items-center justify-center p-6 text-center">
          <div className="w-14 h-14 rounded-full bg-brand-orange-light/60 flex items-center justify-center mb-3">
            <Utensils className="w-6 h-6 text-brand-orange" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 border border-brand-brown/10 text-xs font-semibold text-brand-brown-muted shadow-xs">
            <Camera className="w-3.5 h-3.5 text-brand-orange" />
            <span>Photo coming soon</span>
          </div>
        </div>
      )}

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-1.5">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-brand-gold transition-colors">
            {category.name}
          </h3>
          <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-brand-orange text-white flex items-center justify-center transition-colors">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
        <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
