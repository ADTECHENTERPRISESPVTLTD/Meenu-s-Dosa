import React from 'react';
import { siteConfig } from '@/config/site';
import { locationsConfig } from '@/config/locations';

export function RestaurantJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    image: siteConfig.ogImage,
    servesCuisine: ['South Indian', 'Vegetarian'],
    hasMenu: `${siteConfig.url}/menu`,
    acceptsReservations: 'True',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Digital Wallet',
    department: locationsConfig.map((loc) => ({
      '@type': 'Restaurant',
      name: `${siteConfig.name} - ${loc.name}`,
      telephone: loc.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${loc.addressLine1}, ${loc.addressLine2}`,
        addressLocality: loc.city,
        addressRegion: 'Madhya Pradesh',
        postalCode: loc.id === 'minal-residency' ? '462023' : '462011',
        addressCountry: 'IN',
      },
      hasMap: loc.mapsUrl,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
