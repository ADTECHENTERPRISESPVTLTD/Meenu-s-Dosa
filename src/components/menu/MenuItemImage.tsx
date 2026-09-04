'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MenuItem } from '@/types';
import { VegBadge } from '@/ui/Badge';
import { Utensils, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItemImageProps {
  item: MenuItem;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

export function MenuItemImage({
  item,
  className,
  imageClassName,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
}: MenuItemImageProps) {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const hasValidImage = Boolean(item.image) && !hasError;
  const altText = `${item.name} at Meenu's Dosa`;

  // Render authentic photograph if available
  if (hasValidImage && item.image) {
    return (
      <div
        className={cn(
          'relative w-full h-full overflow-hidden bg-brand-cream-dark select-none',
          className
        )}
      >
        {isLoading && (
          <div className="absolute inset-0 bg-brand-cream-dark animate-pulse z-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-brand-orange/30 border-t-brand-orange animate-spin" />
          </div>
        )}

        <Image
          src={item.image}
          alt={altText}
          fill
          sizes={sizes}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={cn(
            'object-cover transition-transform duration-500 ease-out',
            isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100',
            'group-hover:scale-105',
            imageClassName
          )}
          loading={priority ? undefined : 'lazy'}
        />
      </div>
    );
  }

  // Authentic Placeholder: Clean neutral "Photo coming soon" restaurant-branded card
  return (
    <div
      className={cn(
        'relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-brand-cream via-brand-cream-card to-brand-cream-dark border-b border-brand-brown/5 select-none text-center',
        className
      )}
    >
      {/* Decorative background subtle circle */}
      <div className="w-16 h-16 rounded-full bg-brand-orange-light/60 flex items-center justify-center mb-3 shadow-xs">
        <Utensils className="w-7 h-7 text-brand-orange" />
      </div>

      <div className="space-y-1 max-w-[200px]">
        <p className="font-serif text-sm font-bold text-brand-brown line-clamp-1">
          {item.name}
        </p>
        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/80 border border-brand-brown/10 text-[10px] font-semibold text-brand-brown-muted shadow-xs">
          <Camera className="w-3 h-3 text-brand-orange" />
          <span>Photo coming soon</span>
        </div>
      </div>
    </div>
  );
}
