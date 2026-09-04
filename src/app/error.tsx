'use client';

import React, { useEffect } from 'react';
import { Button } from '@/ui/Button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Restaurant app error:', error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-cream px-4 text-center py-16">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-brown">
            Something Went Wrong
          </h2>
          <p className="text-xs sm:text-sm text-brand-brown-muted leading-relaxed">
            We encountered an unexpected issue. Please retry loading or contact our restaurant directly.
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => reset()}
            variant="primary"
            size="md"
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Try Again
          </Button>
          <Button
            href="/"
            variant="outline"
            size="md"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
