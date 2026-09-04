'use client';

import React from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types';
import { VegBadge, TagBadge } from '@/ui/Badge';
import { Button } from '@/ui/Button';
import { MenuItemImage } from '@/components/menu/MenuItemImage';
import { ShoppingBag } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
  onOrderClick?: (item: MenuItem) => void;
}

export function FoodCard({ item, onOrderClick }: FoodCardProps) {
  // Format numeric price
  const formattedPrice =
    typeof item.price === 'number' ? `₹${item.price}` : null;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Visual Dominance: Card Image with Consistent Aspect Ratio */}
        <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-brand-cream-dark">
          <MenuItemImage item={item} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Badges Top Floating */}
          <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 z-10">
            <VegBadge size="md" className="shadow-warm-sm" />
            {item.isSignature && <TagBadge type="signature" />}
            {item.isBestseller && !item.isSignature && <TagBadge type="bestseller" />}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-brown group-hover:text-brand-orange transition-colors leading-snug">
              {item.name}
            </h3>
            {formattedPrice && (
              <span className="font-bold text-base text-brand-orange font-sans flex-shrink-0">
                {formattedPrice}
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between border-t border-brand-brown/5 mt-auto">
        <Link
          href={`/order-online?item=${encodeURIComponent(item.name)}`}
          className="text-xs font-semibold text-brand-orange hover:text-brand-orange-hover inline-flex items-center gap-1 py-1 group/btn"
        >
          <span>Order This Dish</span>
          <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
        </Link>

        <Button
          href={`/order-online?item=${encodeURIComponent(item.name)}`}
          variant="secondary"
          size="sm"
          className="rounded-xl px-3 py-1.5 text-xs"
          leftIcon={<ShoppingBag className="w-3.5 h-3.5 text-brand-orange" />}
        >
          Order
        </Button>
      </div>
    </div>
  );
}
