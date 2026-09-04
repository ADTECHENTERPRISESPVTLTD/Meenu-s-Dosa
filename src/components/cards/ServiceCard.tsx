import React from 'react';
import Link from 'next/link';
import { UtensilsCrossed, ShoppingBag, Truck, CalendarCheck, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: string;
    ctaText: string;
    ctaLink: string;
  };
}

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-brand-orange" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-brand-orange" />,
  Truck: <Truck className="w-6 h-6 text-brand-orange" />,
  CalendarCheck: <CalendarCheck className="w-6 h-6 text-brand-orange" />,
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-md hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-orange-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {iconMap[service.icon] || <UtensilsCrossed className="w-6 h-6 text-brand-orange" />}
        </div>
        <div className="space-y-1.5">
          <h3 className="font-serif text-xl font-bold text-brand-brown group-hover:text-brand-orange transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-brand-brown/5">
        <Link
          href={service.ctaLink}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-orange group-hover:text-brand-orange-hover"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
