import React from 'react';
import Image from 'next/image';
import { Button } from '@/ui/Button';
import { VegBadge } from '@/ui/Badge';
import { imagesConfig } from '@/config/images';
import { siteConfig } from '@/config/site';
import { restaurantConfig } from '@/config/restaurant';
import {
  Sparkles,
  ShieldCheck,
  Flame,
  Utensils,
  History,
  HeartHandshake,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';

export const metadata = {
  title: 'Our Story & Heritage | 40+ Years of Authentic South Indian Taste',
  description:
    "Learn about Meenu's Dosa in Bhopal. Celebrating 40+ years of authentic South Indian culinary tradition, stone-ground fermented batters, pure ghee, and warm family dining.",
};

export default function AboutPage() {
  const timelineSteps = [
    {
      period: 'The Tradition',
      title: 'Rooted in South Indian Roots',
      description:
        'Centred around traditional stone-grinding, slow natural fermentation, and generational spice blends. The culinary philosophy remains untouched—authentic, comforting, and honest.',
      icon: <History className="w-5 h-5 text-brand-orange" />,
    },
    {
      period: 'The Batter',
      title: 'Patience & Daily Fermentation',
      description:
        'A truly great dosa begins 24 hours prior. We soak premium rice and whole urad dal, stone-grind with precision, and allow natural aeration to develop signature crispness and light digestibility.',
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
    },
    {
      period: 'The Tawa',
      title: 'Cast-Iron Roasting & Pure Desi Ghee',
      description:
        'Spreading the batter in a steady spiral across seasoned flat tawas, roasting with aromatic ghee until deeply golden, and folding with freshly spiced potato bhaji.',
      icon: <Flame className="w-5 h-5 text-brand-orange" />,
    },
    {
      period: 'The Hospitality',
      title: 'Bhopal’s Cherished South Indian Dining',
      description:
        'From our Minal Residency outlet to MP Nagar, serving families, working professionals, and food lovers with warm, unhurried Indian hospitality.',
      icon: <HeartHandshake className="w-5 h-5 text-brand-orange" />,
    },
  ];

  return (
    <div className="bg-brand-cream pb-20">
      {/* Hero Section */}
      <section className="bg-brand-cream-card border-b border-brand-brown/10 py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-orange/20 shadow-warm-xs text-xs font-semibold text-brand-brown">
            <VegBadge size="sm" />
            <span className="text-brand-orange font-bold uppercase tracking-wider">
              {restaurantConfig.establishedClaim}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-brown tracking-tight">
            Tradition Served Hot
          </h1>
          <p className="text-lg sm:text-xl text-brand-brown-light font-medium max-w-2xl mx-auto">
            Experience the enduring taste of authentic South Indian cuisine crafted with generations of passion.
          </p>
        </div>
      </section>

      {/* Main Story Narrative */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Collage */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-60 sm:h-72 rounded-3xl overflow-hidden shadow-warm-md border-2 border-white">
                  <Image
                    src={imagesConfig.hero.dosaHero}
                    alt="Authentic Dosa at Meenu's Dosa"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 rounded-3xl bg-white border border-brand-brown/10 shadow-warm-xs text-center space-y-1">
                  <p className="font-serif text-3xl font-bold text-brand-orange">100%</p>
                  <p className="text-xs font-semibold text-brand-brown">Pure Vegetarian Kitchen</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-3xl bg-brand-brown text-white shadow-warm-xs text-center space-y-1">
                  <p className="font-serif text-3xl font-bold text-brand-gold">40+</p>
                  <p className="text-xs font-medium text-white/80">Years of Authentic Heritage</p>
                </div>
                <div className="relative h-60 sm:h-72 rounded-3xl overflow-hidden shadow-warm-md border-2 border-white">
                  <Image
                    src={imagesConfig.ambiance.familyDining}
                    alt="Family dining experience at Meenu's Dosa"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                  Our Culinary Philosophy
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown leading-tight">
                  Crafting Flavour Through Honest Ingredients
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-brand-brown-muted leading-relaxed">
                <p>
                  Meenu&apos;s Dosa was built on a simple, timeless premise: that authentic South Indian food should be prepared without compromise. That means honoring traditional recipes passed down through decades, where slow natural fermentation cannot be hurried, and pure ghee cannot be replaced.
                </p>
                <p>
                  Every dosa that leaves our kitchen is stretched thin and roasted on seasoned cast iron until it achieves that coveted, paper-crisp golden crunch. Paired with our trio of freshly churned coconut chutneys and vegetable-packed lentil sambar simmered in small batches throughout the day.
                </p>
                <p>
                  Whether you are starting your morning with piping hot Idli Vada Sambar or winding down in the evening over a Ghee Roast Masala Dosa, we invite you to taste the care, consistency, and warmth that make Meenu&apos;s Dosa a beloved dining destination.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/menu"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore The Dishes
                </Button>
                <Button
                  href="/locations"
                  variant="outline"
                  size="md"
                >
                  Visit Our Outlets
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Timeline / Pillars */}
      <section className="py-16 bg-white border-y border-brand-brown/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              The Journey of Flavour
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
              What Defines Our Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-brand-cream-card rounded-3xl p-6 border border-brand-brown/10 shadow-warm-xs flex flex-col justify-between space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-light flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                    {step.period}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-brown">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-brown-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Promise CTA */}
      <section className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-brown text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-warm-lg">
          <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center mx-auto text-white">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2 max-w-2xl mx-auto">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Taste The Authentic Difference
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Visit our dining rooms in Minal Residency and MP Nagar, or order directly to your doorstep today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/book-a-table"
              variant="gold"
              size="md"
            >
              Book a Table
            </Button>
            <Button
              href="/order-online"
              variant="primary"
              size="md"
              leftIcon={<ShoppingBag className="w-4 h-4" />}
            >
              Order Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
