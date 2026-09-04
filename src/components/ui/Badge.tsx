import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

export function VegBadge({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' }) {
  const outerSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const innerSize = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2';

  return (
    <div
      className={cn(
        'border border-brand-green bg-white flex items-center justify-center rounded-[3px] p-[1px] shadow-xs flex-shrink-0',
        outerSize,
        className
      )}
      title="100% Vegetarian"
      aria-label="100% Vegetarian"
    >
      <div className={cn('bg-brand-green rounded-full veg-pulse', innerSize)} />
    </div>
  );
}

export function TagBadge({
  type,
  label,
  className,
}: {
  type: 'signature' | 'bestseller' | 'custom';
  label?: string;
  className?: string;
}) {
  if (type === 'signature') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand-gold-light text-amber-900 border border-amber-300 shadow-xs',
          className
        )}
      >
        <Sparkles className="w-3 h-3 text-amber-700" />
        {label || 'Signature'}
      </span>
    );
  }

  if (type === 'bestseller') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand-orange-light text-brand-orange border border-brand-orange/30 shadow-xs',
          className
        )}
      >
        <Flame className="w-3 h-3 text-brand-orange fill-brand-orange" />
        {label || 'Bestseller'}
      </span>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-cream-dark text-brand-brown border border-brand-brown/10',
        className
      )}
    >
      {label}
    </span>
  );
}
