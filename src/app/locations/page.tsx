import React from 'react';
import { locationsConfig } from '@/config/locations';
import { LocationCard } from '@/components/cards/LocationCard';
import { Button } from '@/ui/Button';
import { MapPin, Phone, Calendar, ShoppingBag, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Our Bhopal Locations | Minal Residency & MP Nagar Outlets',
  description:
    "Find your nearest Meenu's Dosa in Bhopal. Outlets at Minal Residency (Ayodhya Bypass) and MP Nagar Zone 2. Get directions, call for takeaway, book a table or order online.",
};

export default function LocationsPage() {
  return (
    <div className="bg-brand-cream min-h-screen pb-24">
      {/* Header */}
      <section className="bg-brand-cream-card border-b border-brand-brown/10 py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-orange/20 text-xs font-semibold text-brand-orange shadow-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bhopal, Madhya Pradesh</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown">
            Our Outlets
          </h1>
          <p className="text-base sm:text-lg text-brand-brown-muted max-w-xl mx-auto leading-relaxed">
            Conveniently located across Bhopal to serve you authentic South Indian culinary excellence fresh every day.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {locationsConfig.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>

        {/* Future Expansion Architecture Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-brand-brown">
              Planning an Event or Bulk Order?
            </h3>
            <p className="text-xs sm:text-sm text-brand-brown-muted">
              We cater family functions, corporate breakfasts, and celebrations across all parts of Bhopal.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              href="/contact"
              variant="outline"
              size="md"
            >
              Contact Catering Team
            </Button>
            <Button
              href="/book-a-table"
              variant="primary"
              size="md"
              leftIcon={<Calendar className="w-4 h-4" />}
            >
              Book Table
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
