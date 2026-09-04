import React from 'react';
import { locationsConfig } from '@/config/locations';
import { socialConfig } from '@/config/social';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/ui/Button';
import {
  Phone,
  MapPin,
  Clock,
  Instagram,
  ExternalLink,
  MessageCircle,
  Mail,
  ShieldCheck,
} from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Meenu\'s Dosa Bhopal Outlets',
  description:
    "Get in touch with Meenu's Dosa in Bhopal. Reach out to our Minal Residency or MP Nagar outlets for dining reservations, takeaway inquiries, party catering, or feedback.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-cream min-h-screen pb-24">
      {/* Header */}
      <section className="bg-brand-cream-card border-b border-brand-brown/10 py-14 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-brand-orange/20 text-xs font-semibold text-brand-orange shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>We&apos;re Here to Help</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-brown">
            Contact Meenu&apos;s Dosa
          </h1>
          <p className="text-base sm:text-lg text-brand-brown-muted max-w-xl mx-auto leading-relaxed">
            Have questions about dining, party orders, menu selections, or feedback? Reach out to our Bhopal team directly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Outlets & Direct Contacts */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange">
                Direct Outlet Reach
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
                Bhopal Outlets Contact
              </h2>
            </div>

            <div className="space-y-4">
              {locationsConfig.map((loc) => (
                <div
                  key={loc.id}
                  className="bg-white rounded-3xl p-6 border border-brand-brown/10 shadow-warm-xs space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-brand-brown">
                      {loc.name}
                    </h3>
                    <span className="text-xs font-semibold text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full">
                      {loc.area}
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-brown-muted">
                    <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>{loc.fullAddress}</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                    <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <a
                      href={`tel:${loc.phoneRaw}`}
                      className="font-bold text-brand-brown hover:text-brand-orange transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <Button
                      href={loc.mapsUrl}
                      isExternal
                      variant="outline"
                      size="sm"
                      className="text-xs py-1.5 px-3"
                    >
                      Google Maps
                    </Button>
                    <Button
                      href={`tel:${loc.phoneRaw}`}
                      variant="secondary"
                      size="sm"
                      className="text-xs py-1.5 px-3"
                    >
                      Call Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Social & Messaging Channels */}
            <div className="bg-brand-cream-card rounded-3xl p-6 border border-brand-brown/10 space-y-4">
              <h4 className="font-serif text-lg font-bold text-brand-brown">
                Online & Social Channels
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <a
                  href={socialConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white border border-brand-brown/10 hover:border-brand-green flex items-center gap-2.5 text-brand-brown transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-brand-green" />
                  <div>
                    <p className="font-bold">WhatsApp Direct</p>
                    <p className="text-[11px] text-brand-brown-muted">{socialConfig.whatsappNumber}</p>
                  </div>
                </a>

                <a
                  href={socialConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white border border-brand-brown/10 hover:border-brand-orange flex items-center gap-2.5 text-brand-brown transition-colors"
                >
                  <Instagram className="w-4 h-4 text-brand-orange" />
                  <div>
                    <p className="font-bold">Instagram</p>
                    <p className="text-[11px] text-brand-brown-muted">{socialConfig.instagramHandle}</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
