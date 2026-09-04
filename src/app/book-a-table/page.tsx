'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ReservationForm } from '@/components/forms/ReservationForm';
import { locationsConfig } from '@/config/locations';
import { VegBadge } from '@/ui/Badge';
import { Calendar, ShieldCheck, Clock, Users, Phone } from 'lucide-react';

function BookingContent() {
  const searchParams = useSearchParams();
  const defaultOutletId = searchParams.get('outlet') || locationsConfig[0].id;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Context & Dining Policies */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-green/30 text-xs font-semibold text-brand-green shadow-xs">
              <VegBadge size="sm" />
              <span>Pure Vegetarian Family Dining</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-brown leading-tight">
              Book a Table at Meenu&apos;s Dosa
            </h1>
            <p className="text-sm sm:text-base text-brand-brown-muted leading-relaxed">
              Reserve your dining table in advance. Experience hot, crispy dosas and comforting South Indian specialties fresh from the tawa.
            </p>
          </div>

          {/* Dining Highlights */}
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-brown/10 shadow-warm-xs">
              <Clock className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-brand-brown">Punctual Seating</h4>
                <p className="text-xs text-brand-brown-muted mt-0.5">
                  Tables are reserved for up to 15 minutes past your chosen arrival time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-brown/10 shadow-warm-xs">
              <Users className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-brand-brown">Family & Group Gatherings</h4>
                <p className="text-xs text-brand-brown-muted mt-0.5">
                  Comfortable group dining configurations available for family celebrations and business lunches.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-brand-brown/10 shadow-warm-xs">
              <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-brand-brown">Hygienic Pure Vegetarian</h4>
                <p className="text-xs text-brand-brown-muted mt-0.5">
                  Strictly vegetarian kitchen with fresh stone-ground batters prepared daily.
                </p>
              </div>
            </div>
          </div>

          {/* Direct Urgent Booking Note */}
          <div className="bg-brand-cream-dark p-5 rounded-3xl border border-brand-brown/10 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Need an Immediate Table within 1 Hour?
            </p>
            <p className="text-xs text-brand-brown-muted">
              For walk-ins and last-minute requests, call the branch directly for immediate table status:
            </p>
            <div className="pt-1 flex flex-col sm:flex-row gap-2">
              {locationsConfig.map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${loc.phoneRaw}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-brown bg-white px-3 py-2 rounded-xl border border-brand-brown/10 hover:text-brand-orange"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{loc.name.replace(' Outlet', '')}: {loc.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <ReservationForm defaultOutletId={defaultOutletId} />
        </div>
      </div>
    </div>
  );
}

export default function BookTablePage() {
  return (
    <div className="bg-brand-cream min-h-screen">
      <Suspense fallback={<div className="p-12 text-center text-brand-brown">Loading reservation form...</div>}>
        <BookingContent />
      </Suspense>
    </div>
  );
}
