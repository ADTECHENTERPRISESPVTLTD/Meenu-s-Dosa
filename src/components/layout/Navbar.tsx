'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu as MenuIcon, X, Phone, Utensils, Calendar, ShoppingBag } from 'lucide-react';
import { Button } from '@/ui/Button';
import { VegBadge } from '@/ui/Badge';
import { locationsConfig } from '@/config/locations';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Our Story', href: '/about' },
  { name: 'Locations', href: '/locations' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-header shadow-warm-md py-3'
          : 'bg-brand-cream/95 backdrop-blur-xs py-4 border-b border-brand-brown/5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:ring-offset-4 rounded-lg"
            aria-label="Meenu's Dosa Home"
          >
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-warm-sm group-hover:scale-105 transition-transform duration-200">
              <span className="font-serif font-bold text-xl leading-none">M</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-brand-brown tracking-tight group-hover:text-brand-orange transition-colors">
                  Meenu&apos;s Dosa
                </span>
                <VegBadge size="sm" />
              </div>
              <span className="text-[9px] sm:text-[10px] sm:text-xs tracking-wider uppercase font-medium text-brand-brown-muted -mt-0.5">
                Authentic South Indian
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-brand-orange text-white shadow-xs font-semibold'
                      : 'text-brand-brown hover:text-brand-orange hover:bg-brand-orange-light/60'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/book-a-table"
              variant="secondary"
              size="sm"
              leftIcon={<Calendar className="w-4 h-4 text-brand-orange" />}
              className="hidden md:inline-flex"
            >
              Book a Table
            </Button>
            <Button
              href="/order-online"
              variant="primary"
              size="sm"
              leftIcon={<ShoppingBag className="w-4 h-4" />}
            >
              Order Online
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              href="/order-online"
              variant="primary"
              size="sm"
              className="sm:hidden px-3 py-1.5 text-xs"
            >
              Order
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-brown hover:bg-brand-orange-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen/Slide-Down Mobile Navigation Drawer */}
      <div
        className={cn(
          'fixed inset-x-0 top-[65px] bottom-0 bg-brand-cream/98 backdrop-blur-md z-40 lg:hidden overflow-y-auto transition-all duration-300 ease-in-out border-t border-brand-brown/10 flex flex-col justify-between p-6',
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        )}
      >
        <div className="space-y-2 pt-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-3 rounded-2xl text-lg font-medium transition-colors',
                  isActive
                    ? 'bg-brand-orange text-white font-semibold shadow-warm-sm'
                    : 'text-brand-brown hover:bg-brand-orange-light/80 hover:text-brand-orange'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="pt-6 border-t border-brand-brown/10 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Button
              href="/book-a-table"
              variant="secondary"
              size="md"
              leftIcon={<Calendar className="w-4 h-4 text-brand-orange" />}
              className="w-full text-xs sm:text-sm"
            >
              Book Table
            </Button>
            <Button
              href="/order-online"
              variant="primary"
              size="md"
              leftIcon={<ShoppingBag className="w-4 h-4" />}
              className="w-full text-xs sm:text-sm"
            >
              Order Online
            </Button>
          </div>

          {/* Quick Call for Outlets */}
          <div className="bg-white/80 p-4 rounded-2xl border border-brand-brown/10">
            <p className="text-xs uppercase tracking-wider text-brand-brown-muted font-semibold mb-2">
              Call Bhopal Outlets:
            </p>
            <div className="space-y-1.5 text-sm">
              {locationsConfig.map((loc) => (
                <a
                  key={loc.id}
                  href={`tel:${loc.phoneRaw}`}
                  className="flex items-center justify-between text-brand-brown hover:text-brand-orange py-1"
                >
                  <span className="font-medium">{loc.name.replace(' Outlet', '')}</span>
                  <span className="text-brand-orange font-semibold flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    {loc.phone}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
