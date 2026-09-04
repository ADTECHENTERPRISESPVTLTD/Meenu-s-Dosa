import React from 'react';
import Image from 'next/image';
import { imagesConfig } from '@/config/images';
import { socialConfig } from '@/config/social';
import { Button } from '@/ui/Button';
import { Instagram, Heart } from 'lucide-react';

export function InstagramGrid() {
  return (
    <section className="py-16 sm:py-20 bg-brand-cream border-t border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              Social Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown mt-1">
              Follow the Taste
            </h2>
            <p className="text-sm text-brand-brown-muted mt-1">
              Tag us in your South Indian food stories in Bhopal {socialConfig.instagramHandle}
            </p>
          </div>
          <Button
            href={socialConfig.instagram}
            isExternal
            variant="secondary"
            size="md"
            leftIcon={<Instagram className="w-4 h-4 text-brand-orange" />}
          >
            Follow {socialConfig.instagramHandle}
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {imagesConfig.instagram.map((item) => (
            <a
              key={item.id}
              href={socialConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-brand-cream-dark border border-brand-brown/10 shadow-warm-xs hover:shadow-warm-md transition-all duration-300"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <Instagram className="w-5 h-5 mb-1 text-white" />
                <div className="flex items-center gap-1 text-[11px] font-semibold text-white/90">
                  <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  {item.likes}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
