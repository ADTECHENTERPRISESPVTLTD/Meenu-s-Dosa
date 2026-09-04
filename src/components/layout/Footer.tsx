import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';
import { locationsConfig } from '@/config/locations';
import { socialConfig } from '@/config/social';
import { restaurantConfig } from '@/config/restaurant';
import { VegBadge } from '@/ui/Badge';

export function Footer() {
  return (
    <footer className="bg-brand-brown text-white/90 pt-16 pb-24 md:pb-16 border-t border-brand-brown-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-warm-sm">
                <span className="font-serif font-bold text-xl leading-none">M</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold text-white tracking-tight">
                    Meenu&apos;s Dosa
                  </span>
                  <VegBadge size="sm" />
                </div>
                <span className="text-xs tracking-wider uppercase font-medium text-brand-gold">
                  Authentic South Indian Cuisine
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/75 leading-relaxed max-w-md">
              Bringing authentic South Indian culinary tradition to Bhopal. Crispy dosas, cloud-soft idlis, and slow-simmered sambar prepared with pure vegetarian dedication.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-brand-gold-light">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>100% Pure Vegetarian • 40+ Years of Heritage</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={socialConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange flex items-center justify-center transition-colors text-white"
                aria-label="Follow Meenu's Dosa on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={socialConfig.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-brand-orange text-xs font-semibold tracking-wide transition-colors flex items-center gap-1 text-white"
              >
                Zomato <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={socialConfig.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-brand-orange text-xs font-semibold tracking-wide transition-colors flex items-center gap-1 text-white"
              >
                Swiggy <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-brand-gold transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-brand-gold transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-gold transition-colors">
                  Food Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/book-a-table" className="hover:text-brand-gold transition-colors">
                  Dine In & Table Booking
                </Link>
              </li>
              <li>
                <Link href="/order-online" className="hover:text-brand-gold transition-colors">
                  Takeaway Orders
                </Link>
              </li>
              <li>
                <Link href="/order-online" className="hover:text-brand-gold transition-colors">
                  Home Delivery
                </Link>
              </li>
              <li>
                <a
                  href={socialConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors flex items-center gap-1"
                >
                  WhatsApp Ordering
                </a>
              </li>
            </ul>
          </div>

          {/* Outlets & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold">
              Bhopal Outlets
            </h4>
            <div className="space-y-3 text-xs text-white/80">
              {locationsConfig.map((loc) => (
                <div key={loc.id} className="border-l-2 border-brand-orange pl-3 space-y-1">
                  <p className="font-semibold text-white text-sm">{loc.name.replace(' Outlet', '')}</p>
                  <p className="text-white/70 line-clamp-2">{loc.addressLine1}, {loc.addressLine2}</p>
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="inline-flex items-center gap-1 text-brand-gold font-semibold hover:underline pt-0.5"
                  >
                    <Phone className="w-3 h-3" />
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© 2026 Meenu&apos;s Dosa. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Authentic South Indian Cuisine • Pure Vegetarian • Bhopal, Madhya Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
}
