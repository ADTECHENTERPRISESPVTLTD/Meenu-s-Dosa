import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-cream text-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="w-12 h-12 rounded-full border-4 border-brand-orange/20 border-t-brand-orange animate-spin" />
      </div>
      <p className="text-xs uppercase tracking-widest font-bold text-brand-orange">
        Brewing Authenticity...
      </p>
    </div>
  );
}
