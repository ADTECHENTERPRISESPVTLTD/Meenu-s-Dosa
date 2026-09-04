import React from 'react';
import { Location } from '@/types';
import { Button } from '@/ui/Button';
import { MapPin, Phone, Clock, Navigation, ShoppingBag, Calendar } from 'lucide-react';

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-md hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-brand-brown/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-brand-orange">
              Bhopal Branch
            </span>
            <h3 className="font-serif text-2xl font-bold text-brand-brown mt-0.5">
              {location.name}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-3 text-sm text-brand-brown-light">
          <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-1" />
          <p className="leading-relaxed">{location.fullAddress}</p>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-sm">
          <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
          <a
            href={`tel:${location.phoneRaw}`}
            className="font-bold text-brand-brown hover:text-brand-orange transition-colors"
          >
            {location.phone}
          </a>
        </div>

        {/* Hours */}
        <div className="flex items-start gap-3 text-xs text-brand-brown-muted bg-brand-cream p-3 rounded-2xl border border-brand-brown/5">
          <Clock className="w-4 h-4 text-brand-brown flex-shrink-0 mt-0.5" />
          <p>{location.hoursNote}</p>
        </div>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {location.features.map((feature) => (
            <span
              key={feature}
              className="text-[11px] font-medium bg-brand-cream-dark/80 text-brand-brown px-2.5 py-1 rounded-lg"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-brand-brown/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <Button
          href={location.mapsUrl}
          isExternal
          variant="outline"
          size="sm"
          leftIcon={<Navigation className="w-4 h-4" />}
          className="w-full text-xs sm:text-sm"
        >
          Get Directions
        </Button>
        <Button
          href={`tel:${location.phoneRaw}`}
          variant="secondary"
          size="sm"
          leftIcon={<Phone className="w-4 h-4 text-brand-orange" />}
          className="w-full text-xs sm:text-sm"
        >
          Call Branch
        </Button>
        <Button
          href={`/order-online?outlet=${location.id}`}
          variant="primary"
          size="sm"
          leftIcon={<ShoppingBag className="w-4 h-4" />}
          className="w-full text-xs sm:text-sm"
        >
          Order Online
        </Button>
        <Button
          href={`/book-a-table?outlet=${location.id}`}
          variant="ghost"
          size="sm"
          leftIcon={<Calendar className="w-4 h-4" />}
          className="w-full text-xs sm:text-sm border border-brand-brown/10"
        >
          Reserve Table
        </Button>
      </div>
    </div>
  );
}
