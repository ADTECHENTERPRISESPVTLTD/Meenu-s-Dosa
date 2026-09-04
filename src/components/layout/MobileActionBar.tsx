'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Utensils, ShoppingBag, X } from 'lucide-react';
import { locationsConfig } from '@/config/locations';

export function MobileActionBar() {
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <>
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-cream/95 backdrop-blur-md border-t border-brand-brown/15 px-3 py-2 shadow-warm-lg">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Outlet */}
          <button
            onClick={() => setShowCallModal(true)}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white border border-brand-brown/10 text-brand-brown active:bg-brand-orange-light transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-orange mb-0.5" />
            <span className="text-[11px] font-semibold tracking-wide">CALL</span>
          </button>

          {/* View Menu */}
          <Link
            href="/menu"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-white border border-brand-brown/10 text-brand-brown active:bg-brand-orange-light transition-colors"
          >
            <Utensils className="w-4 h-4 text-brand-brown mb-0.5" />
            <span className="text-[11px] font-semibold tracking-wide">MENU</span>
          </Link>

          {/* Order Online */}
          <Link
            href="/order-online"
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-brand-orange text-white shadow-warm-sm active:bg-brand-orange-hover transition-colors"
          >
            <ShoppingBag className="w-4 h-4 mb-0.5" />
            <span className="text-[11px] font-bold tracking-wide">ORDER</span>
          </Link>
        </div>
      </div>

      {/* Call Outlet Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-brand-cream-card w-full max-w-sm rounded-3xl p-6 shadow-warm-xl border border-brand-brown/10 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-brand-brown">Call Meenu&apos;s Dosa</h3>
              <button
                onClick={() => setShowCallModal(false)}
                className="p-1 rounded-full text-brand-brown/60 hover:text-brand-brown hover:bg-brand-cream"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-brand-brown-muted">
              Select your nearest Bhopal branch to speak directly with our team:
            </p>
            <div className="space-y-2.5">
              {locationsConfig.map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${loc.phoneRaw}`}
                  onClick={() => setShowCallModal(false)}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-brand-brown/10 hover:border-brand-orange hover:shadow-warm-sm transition-all"
                >
                  <div>
                    <p className="text-sm font-bold text-brand-brown">{loc.name}</p>
                    <p className="text-xs text-brand-brown-muted">{loc.area}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-orange bg-brand-orange-light px-3 py-1.5 rounded-full">
                    <Phone className="w-3.5 h-3.5" />
                    Call
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
