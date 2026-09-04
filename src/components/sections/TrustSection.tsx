import React from 'react';
import { ShieldCheck, History, Sparkles, Flame } from 'lucide-react';
import { VegBadge } from '@/ui/Badge';

export function TrustSection() {
  const features = [
    {
      badge: '40+',
      title: 'Years of Heritage',
      description: 'Generations of perfected South Indian recipes and culinary craftsmanship.',
      icon: <History className="w-6 h-6 text-brand-orange" />,
    },
    {
      badge: 'Authentic',
      title: 'South Indian Flavours',
      description: 'Slow-fermented stone-ground batters, fresh coconut, and fragrant curry leaves.',
      icon: <Sparkles className="w-6 h-6 text-brand-orange" />,
    },
    {
      badge: '100%',
      title: 'Vegetarian',
      description: 'A strictly pure vegetarian kitchen committed to hygiene and quality.',
      icon: <VegBadge size="md" />,
    },
    {
      badge: 'Freshly',
      title: 'Prepared',
      description: 'Every dosa crisp-roasted and every idli steamed hot to order.',
      icon: <Flame className="w-6 h-6 text-brand-orange" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
            The Meenu&apos;s Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown mt-1.5">
            Why Meenu&apos;s Dosa?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-brand-cream-card border border-brand-brown/10 hover:border-brand-orange/40 hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-orange-light flex items-center justify-center">
                {item.icon}
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-orange">
                  {item.badge}
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-brown">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
