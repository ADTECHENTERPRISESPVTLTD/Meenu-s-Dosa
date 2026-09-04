import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/ui/Button';
import { VegBadge } from '@/ui/Badge';
import { FoodCard } from '@/components/cards/FoodCard';
import { CategoryCard } from '@/components/cards/CategoryCard';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { LocationCard } from '@/components/cards/LocationCard';
import { TrustSection } from '@/components/sections/TrustSection';
import { OnlineOrderSection } from '@/components/sections/OnlineOrderSection';
import { InstagramGrid } from '@/components/sections/InstagramGrid';
import { ReviewsSection } from '@/components/sections/ReviewsSection';

import { siteConfig } from '@/config/site';
import { restaurantConfig } from '@/config/restaurant';
import { locationsConfig } from '@/config/locations';
import { imagesConfig } from '@/config/images';
import { menuService } from '@/services/menuService';

import {
  ShoppingBag,
  Calendar,
  Utensils,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const featuredDishes = menuService.getFeaturedItemsSync();
  const categories = menuService.getCategoriesSync();

  return (
    <div className="space-y-0 overflow-x-hidden">
      {/* ==================== 1. MOBILE-FIRST HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-cream to-white pt-3 pb-8 sm:pt-8 sm:pb-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Left Content Column (Mobile First: Top on Mobile) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-orange/20 shadow-xs text-xs font-semibold text-brand-brown">
                <VegBadge size="sm" />
                <span className="text-brand-orange uppercase tracking-wider font-bold">
                  {siteConfig.tagline}
                </span>
                <span className="text-brand-brown/40">•</span>
                <span className="text-brand-brown-muted">Bhopal</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1.5 sm:space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-brown tracking-tight leading-[1.15]">
                  Hot. Crispy.{' '}
                  <span className="text-gold-gradient block sm:inline">
                    Authentic.
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl font-medium text-brand-brown-light">
                  {siteConfig.heroSubheading}
                </p>
              </div>

              {/* Heritage Note */}
              <p className="text-xs sm:text-sm md:text-base text-brand-brown-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                {siteConfig.heritageClaim} Generational recipes, stone-ground batter, pure desi ghee roasts, and warm family hospitality in Bhopal.
              </p>

              {/* Immediate Primary CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full">
                <Button
                  href="/order-online"
                  variant="primary"
                  size="lg"
                  leftIcon={<ShoppingBag className="w-5 h-5" />}
                  className="w-full sm:w-auto font-bold py-3 text-base shadow-warm-md"
                >
                  Order Online
                </Button>
                <Button
                  href="/book-a-table"
                  variant="secondary"
                  size="lg"
                  leftIcon={<Calendar className="w-5 h-5 text-brand-orange" />}
                  className="w-full sm:w-auto py-3 text-base"
                >
                  Book a Table
                </Button>
                <Button
                  href="/menu"
                  variant="ghost"
                  size="lg"
                  leftIcon={<Utensils className="w-4 h-4" />}
                  className="w-full sm:w-auto py-2.5 text-sm"
                >
                  Explore Menu
                </Button>
              </div>

              {/* Trust Indicator */}
              <div className="pt-2 border-t border-brand-brown/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-1.5 gap-x-3 sm:gap-x-5 text-[11px] sm:text-xs font-semibold text-brand-brown-muted">
                <span className="flex items-center gap-1.5 text-brand-green">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Pure Vegetarian
                </span>
                <span>•</span>
                <span>Dine-in</span>
                <span>•</span>
                <span>Takeaway</span>
                <span>•</span>
                <span>Home Delivery</span>
              </div>
            </div>

            {/* Right Food Hero Visual */}
            <div className="lg:col-span-5 relative flex justify-center mt-2 lg:mt-0">
              <div className="relative w-full max-w-[340px] sm:max-w-md lg:max-w-none aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-warm-lg border-2 sm:border-4 border-white bg-brand-cream-card">
                <Image
                  src={imagesConfig.hero.dosaHero}
                  alt="Hot Crispy Masala Dosa served with authentic sambar and chutneys at Meenu's Dosa"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Floating Highlight Card */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-warm-md border border-white/40 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-orange">
                        Generational Craft
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif font-bold text-brand-brown">
                      Slow-fermented stone-ground batter
                    </p>
                  </div>
                  <Link
                    href="/menu?category=dosa"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center hover:bg-brand-orange-hover transition-colors flex-shrink-0"
                    aria-label="View Dosas Menu"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. BRAND TRUST SECTION ==================== */}
      <TrustSection />

      {/* ==================== 3. SIGNATURE DISHES ==================== */}
      <section className="py-12 sm:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                Signature Selections
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-brown mt-1">
                Made for Dosa Lovers
              </h2>
              <p className="text-xs sm:text-base text-brand-brown-muted mt-1.5 max-w-xl">
                Crispy, buttery, aromatic dosas crafted on sizzling seasoned iron tawas. Served hot with fresh coconut chutneys and lentil sambar.
              </p>
            </div>
            <Button
              href="/menu"
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="self-start sm:self-auto"
            >
              View Full Menu
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.id} item={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. FOOD CATEGORIES ==================== */}
      <section className="py-12 sm:py-20 bg-white border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-1.5">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              A Wide South Indian Menu
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-brown">
              Explore by Category
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown-muted">
              From dawn breakfast classics to hearty dinners, discover authentic vegetarian flavours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. HERITAGE / BRAND STORY ==================== */}
      <section className="py-12 sm:py-20 bg-brand-cream-card relative overflow-hidden border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story Visual */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative h-64 sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden shadow-warm-lg border-2 sm:border-4 border-white bg-brand-brown">
                <Image
                  src={imagesConfig.ambiance.tawaArt}
                  alt="Traditional South Indian dosa making craft on hot tawa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">
                    Craft & Tradition
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    40+ Years of Authentic South Indian Taste
                  </h4>
                  <p className="text-xs text-white/80">
                    Pure ingredients, authentic recipes, and consistent Bhopal hospitality.
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-1.5">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                  Our Culinary Heritage
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-brand-brown leading-tight">
                  More Than Just a Dosa
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-base text-brand-brown-muted leading-relaxed">
                <p>
                  At Meenu&apos;s Dosa, food is more than a meal—it is a cherished cultural tradition. Rooted in South Indian culinary heritage, our kitchen honours the time-tested craft of slow-fermenting quality rice and lentils to achieve the ideal texture: golden and crisp on the outside, light and comforting within.
                </p>
                <p>
                  Every morning begins with fresh coconut scraping, slow-roasting fragrant spices, and simmering batches of aromatic sambar. We never take shortcuts—our 100% pure vegetarian kitchen is dedicated to pure ghee, authentic South Indian taste, and warm family dining.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-brand-brown/10 shadow-xs">
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-brand-orange">40+</h4>
                  <p className="text-[11px] sm:text-xs text-brand-brown-muted mt-0.5">Years of authentic culinary heritage</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-brand-brown/10 shadow-xs">
                  <h4 className="font-serif font-bold text-xl sm:text-2xl text-brand-green">100%</h4>
                  <p className="text-[11px] sm:text-xs text-brand-brown-muted mt-0.5">Pure vegetarian standards</p>
                </div>
              </div>

              <div className="pt-1">
                <Button
                  href="/about"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Discover Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. SERVICES ==================== */}
      <section className="py-12 sm:py-20 bg-white border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-1.5">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              Hospitality & Convenience
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-brown">
              Enjoy Meenu&apos;s Dosa Your Way
            </h2>
            <p className="text-xs sm:text-sm text-brand-brown-muted">
              Whether dining in, picking up takeaway, or enjoying home delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {restaurantConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 7. ONLINE ORDERING BANNER ==================== */}
      <OnlineOrderSection />

      {/* ==================== 8. LOCATIONS SECTION ==================== */}
      <section className="py-12 sm:py-20 bg-brand-cream border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                Visit Us In Bhopal
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-brown mt-1">
                Find Your Nearest Meenu&apos;s Dosa
              </h2>
              <p className="text-xs sm:text-base text-brand-brown-muted mt-1 max-w-xl">
                Serving piping hot dosas across Bhopal with comfortable seating, hygienic kitchens, and friendly hospitality.
              </p>
            </div>
            <Button
              href="/locations"
              variant="outline"
              size="sm"
              leftIcon={<MapPin className="w-4 h-4" />}
              className="self-start sm:self-auto"
            >
              All Outlets Info
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {locationsConfig.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 9. REVIEWS & RATINGS ==================== */}
      <ReviewsSection />

      {/* ==================== 10. INSTAGRAM GRID ==================== */}
      <InstagramGrid />

      {/* ==================== 11. FINAL WARM CTA ==================== */}
      <section className="py-14 sm:py-24 bg-brand-brown text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">
            Authentic South Indian Cuisine
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Your Dosa Is Waiting.
          </h2>
          <p className="text-base sm:text-xl text-white/80 font-medium">
            Come hungry. Leave happy.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/menu"
              variant="gold"
              size="lg"
              leftIcon={<Utensils className="w-5 h-5 text-brand-brown" />}
              className="w-full sm:w-auto font-bold py-3 text-base"
            >
              View Menu
            </Button>
            <Button
              href="/book-a-table"
              variant="secondary"
              size="lg"
              leftIcon={<Calendar className="w-5 h-5 text-brand-orange" />}
              className="w-full sm:w-auto py-3 text-base"
            >
              Book a Table
            </Button>
            <Button
              href="/order-online"
              variant="primary"
              size="lg"
              leftIcon={<ShoppingBag className="w-5 h-5" />}
              className="w-full sm:w-auto font-bold py-3 text-base"
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
