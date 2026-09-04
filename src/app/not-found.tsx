import React from 'react';
import Link from 'next/link';
import { Button } from '@/ui/Button';
import { Utensils, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-cream px-4 text-center py-16">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center mx-auto text-2xl font-serif font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-brown">
            Page Not Found
          </h1>
          <p className="text-sm text-brand-brown-muted leading-relaxed">
            Looks like this table has been cleared! Let us guide you back to our authentic South Indian menu.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="primary"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
          >
            Back to Home
          </Button>
          <Button
            href="/menu"
            variant="outline"
            size="md"
            leftIcon={<Utensils className="w-4 h-4" />}
          >
            Explore Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
