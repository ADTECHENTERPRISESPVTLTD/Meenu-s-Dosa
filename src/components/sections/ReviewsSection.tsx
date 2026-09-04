import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { socialConfig } from '@/config/social';
import { Button } from '@/ui/Button';

// Configurable guest feedback & platform ratings structure
export const platformRatings = [
  {
    platform: 'Google Reviews',
    rating: '4.2★',
    tag: 'Bhopal Diners',
    highlight: 'Praised for authentic South Indian taste and crispy hot dosas.',
  },
  {
    platform: 'Zomato',
    rating: '4.1★',
    tag: 'Home Delivery',
    highlight: 'Loved for fast packing, fresh sambar, and hot breakfast idlis.',
  },
  {
    platform: 'Swiggy',
    rating: '4.2★',
    tag: 'Popular in Bhopal',
    highlight: 'Top vegetarian South Indian destination for family dining & takeaway.',
  },
];

export const guestImpressions = [
  {
    title: 'The Tawa Crispiness',
    aspect: 'Signature Dosa Texture',
    description:
      'Guests consistently celebrate the golden roast finish of our Butter Masala and Mysore Masala dosas, served with hot sambar and trio of freshly prepared chutneys.',
  },
  {
    title: 'Comfort of Pure Vegetarian',
    aspect: 'Hygienic Family Dining',
    description:
      'Families across Bhopal appreciate the wholesome, pure vegetarian kitchen environment, warm hospitality, and speedy table service.',
  },
  {
    title: 'Authentic South Indian Heritage',
    aspect: 'Authentic Spice Balance',
    description:
      'From our Idli Vada Sambar breakfast to fragrant Curd Rice and Ghee Podi Thaat Idli, our recipes honor traditional South Indian culinary standards.',
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
            Community Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
            What Our Guests Say
          </h2>
          <p className="text-sm text-brand-brown-muted">
            Recognized across Bhopal for authentic South Indian taste, prompt service, and family dining.
          </p>
        </div>

        {/* Platform Rating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platformRatings.map((item, idx) => (
            <div
              key={idx}
              className="bg-brand-cream-card rounded-3xl p-6 border border-brand-brown/10 shadow-warm-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-2.5 py-1 rounded-full">
                    {item.platform}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{item.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-brand-brown font-medium leading-relaxed">
                  {item.highlight}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-brand-brown/5 flex items-center gap-1.5 text-xs text-brand-brown-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" />
                <span>Verified Public Platform Listing</span>
              </div>
            </div>
          ))}
        </div>

        {/* Culinary Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guestImpressions.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-brand-cream/60 border border-brand-brown/10 hover:border-brand-orange/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-brand-brown/10 flex items-center justify-center text-brand-orange">
                  <MessageSquareQuote className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-brown-muted">
                  {card.aspect}
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-brown">
                  {card.title}
                </h3>
                <p className="text-sm text-brand-brown-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
