import React from 'react';
import Image from 'next/image';
import { Button } from '@/ui/Button';
import { socialConfig } from '@/config/social';
import { imagesConfig } from '@/config/images';
import { ShoppingBag, ExternalLink, MessageCircle } from 'lucide-react';

export function OnlineOrderSection() {
  return (
    <section className="py-16 sm:py-20 bg-brand-cream-card relative overflow-hidden border-t border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-brown text-white rounded-3xl overflow-hidden shadow-warm-xl relative">
          {/* Subtle background texture overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src={imagesConfig.hero.dosaHero}
              alt="Crispy Dosa"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-gold">
                Fast Home Delivery Across Bhopal
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Craving Dosa?
              </h2>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                Order your favourite South Indian dishes online. Piping hot dosas, fluffy idlis, and delicious meals delivered directly to your doorstep.
              </p>
              <p className="text-xs text-brand-gold-light/80">
                Available on your favourite delivery platforms with secure digital payments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
              <Button
                href={socialConfig.zomato}
                isExternal
                variant="gold"
                size="lg"
                leftIcon={<ShoppingBag className="w-5 h-5 text-brand-brown" />}
                rightIcon={<ExternalLink className="w-4 h-4 text-brand-brown" />}
                className="w-full sm:w-auto"
              >
                Order on Zomato
              </Button>
              <Button
                href={socialConfig.swiggy}
                isExternal
                variant="primary"
                size="lg"
                leftIcon={<ShoppingBag className="w-5 h-5 text-white" />}
                rightIcon={<ExternalLink className="w-4 h-4 text-white" />}
                className="w-full sm:w-auto"
              >
                Order on Swiggy
              </Button>
              <Button
                href={socialConfig.whatsappUrl}
                isExternal
                variant="outline"
                size="lg"
                leftIcon={<MessageCircle className="w-5 h-5 text-brand-gold" />}
                className="w-full sm:w-auto text-brand-gold border-brand-gold hover:bg-brand-gold hover:text-brand-brown"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
