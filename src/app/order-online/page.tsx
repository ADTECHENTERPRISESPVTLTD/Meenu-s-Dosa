'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { locationsConfig } from '@/config/locations';
import { socialConfig } from '@/config/social';
import { imagesConfig } from '@/config/images';
import { Button } from '@/ui/Button';
import { VegBadge } from '@/ui/Badge';
import {
  ShoppingBag,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

function OrderOnlineContent() {
  const searchParams = useSearchParams();
  const requestedItem = searchParams.get('item');
  const defaultOutletId = searchParams.get('outlet') || locationsConfig[0].id;

  const [selectedOutletId, setSelectedOutletId] = useState<string>(defaultOutletId);

  const selectedOutlet =
    locationsConfig.find((loc) => loc.id === selectedOutletId) || locationsConfig[0];

  return (
    <div className="bg-brand-cream min-h-screen pb-20">
      {/* Header */}
      <section className="bg-brand-cream-card border-b border-brand-brown/10 py-12 sm:py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-orange/20 text-xs font-semibold text-brand-orange shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Doorstep Delivery & Fast Takeaway</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand-brown">
            Order Your Favourites
          </h1>
          <p className="text-base text-brand-brown-muted max-w-lg mx-auto leading-relaxed">
            Choose your preferred branch and delivery partner. Hot, fresh South Indian food delivered right across Bhopal.
          </p>

          {/* Requested item notification if directed from menu/food card */}
          {requestedItem && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-brand-orange-light text-brand-orange text-xs sm:text-sm font-semibold border border-brand-orange/30 animate-in fade-in">
              <CheckCircle className="w-4 h-4" />
              <span>Ordering item: <strong>{requestedItem}</strong></span>
            </div>
          )}
        </div>
      </section>

      {/* Main Hub */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-10">
        {/* Step 1: Select Branch */}
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              Step 1
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
              Select Your Nearest Branch
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {locationsConfig.map((loc) => {
              const isSelected = loc.id === selectedOutletId;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedOutletId(loc.id)}
                  className={cn(
                    'p-6 rounded-3xl text-left border transition-all duration-200 shadow-warm-xs flex flex-col justify-between',
                    isSelected
                      ? 'bg-white border-brand-orange ring-2 ring-brand-orange/20 shadow-warm-md'
                      : 'bg-white/60 border-brand-brown/10 hover:bg-white hover:border-brand-orange/40'
                  )}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-xl font-bold text-brand-brown">
                        {loc.name}
                      </h3>
                      {isSelected && (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-brand-brown-muted line-clamp-2">
                      {loc.fullAddress}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-brand-brown/5 flex items-center justify-between text-xs text-brand-brown-light">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-orange" /> Open Daily
                    </span>
                    <span className="font-bold text-brand-orange">{loc.phone}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Choose Platform */}
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              Step 2
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
              Choose How You Want to Order
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown-muted mt-0.5">
              Available channels for <strong>{selectedOutlet.name}</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Zomato Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-black text-xl tracking-tighter">
                  Z
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-brown group-hover:text-red-600 transition-colors">
                    Order on Zomato
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-muted mt-1 leading-relaxed">
                    Order for fast doorstep delivery in Bhopal with live rider tracking and digital payments.
                  </p>
                </div>
              </div>
              <Button
                href={selectedOutlet.zomatoUrl || socialConfig.zomato}
                isExternal
                variant="primary"
                size="md"
                rightIcon={<ExternalLink className="w-4 h-4" />}
                className="w-full bg-[#cb202d] hover:bg-[#b51b27]"
              >
                Continue on Zomato
              </Button>
            </div>

            {/* Swiggy Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between space-y-5 group">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#fc8019] flex items-center justify-center font-black text-xl tracking-tighter">
                  S
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-brown group-hover:text-[#fc8019] transition-colors">
                    Order on Swiggy
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-muted mt-1 leading-relaxed">
                    Fast delivery straight from the tawa. Pure vegetarian South Indian meals via Swiggy.
                  </p>
                </div>
              </div>
              <Button
                href={selectedOutlet.swiggyUrl || socialConfig.swiggy}
                isExternal
                variant="primary"
                size="md"
                rightIcon={<ExternalLink className="w-4 h-4" />}
                className="w-full bg-[#fc8019] hover:bg-[#e46e10]"
              >
                Continue on Swiggy
              </Button>
            </div>

            {/* Call to Order (Direct Takeaway) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    Call to Order (Takeaway)
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-muted mt-1 leading-relaxed">
                    Place your takeaway order directly over phone. We&apos;ll have it packed hot and ready for pickup.
                  </p>
                </div>
              </div>
              <Button
                href={`tel:${selectedOutlet.phoneRaw}`}
                variant="secondary"
                size="md"
                leftIcon={<Phone className="w-4 h-4 text-brand-orange" />}
                className="w-full"
              >
                Call {selectedOutlet.phone}
              </Button>
            </div>

            {/* WhatsApp to Order */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-brown/10 shadow-warm-sm hover:shadow-warm-md transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-brand-brown">
                    WhatsApp Inquiry & Orders
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-brown-muted mt-1 leading-relaxed">
                    Message our team on WhatsApp for party packs, menu questions, or takeaway pre-orders.
                  </p>
                </div>
              </div>
              <Button
                href={`https://wa.me/${selectedOutlet.phoneRaw.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello Meenu's Dosa (${selectedOutlet.name})! I would like to place an order${
                    requestedItem ? ` for: ${requestedItem}` : ''
                  }.`
                )}`}
                isExternal
                variant="outline"
                size="md"
                leftIcon={<MessageCircle className="w-4 h-4 text-brand-green" />}
                className="w-full text-brand-green border-brand-green hover:bg-brand-green hover:text-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* Packaging & Vegetarian Assurance */}
        <div className="bg-brand-cream-dark p-6 rounded-3xl border border-brand-brown/10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white text-brand-green flex items-center justify-center flex-shrink-0 shadow-warm-xs">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-serif text-base font-bold text-brand-brown">
              Fresh Packing Promise
            </h4>
            <p className="text-xs sm:text-sm text-brand-brown-muted">
              Sambar and chutneys are packed in food-grade, leak-proof containers to ensure your dosas arrive crisp and warm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderOnlinePage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-brand-brown">Loading ordering options...</div>}>
      <OrderOnlineContent />
    </Suspense>
  );
}
