/**
 * Centralized Category Image Configuration for Meenu's Dosa
 * 
 * Exactly 8 food photographs represent the entire restaurant menu across the site.
 * Images are manually managed in `public/images/categories/` as documented in `IMAGE_PLACEMENT_GUIDE.md`.
 * 
 * NO automatic image searching, scraping, downloading, or external fetching.
 */

export const categoryImages: Record<string, string> = {
  // 8 Canonical Keys
  dosa: '/images/categories/dosa.jpg',
  idli: '/images/categories/idli.jpg',
  rice: '/images/categories/rice.jpg',
  uttapam: '/images/categories/uttapam.jpg',
  exclusives: '/images/categories/exclusives.jpg',
  desserts: '/images/categories/desserts.jpg',
  beverages: '/images/categories/beverages.jpg',
  mocktails: '/images/categories/mocktails.jpg',

  // Category ID aliases used throughout the codebase
  'idli-vada-upma': '/images/categories/idli.jpg',
  'south-indian-rice': '/images/categories/rice.jpg',
  'cold-beverages': '/images/categories/beverages.jpg',
  'mocktails-sodas': '/images/categories/mocktails.jpg',
};

/**
 * Resolves the category photograph for any category ID, slug, or dish name
 */
export function getCategoryImage(categoryKey: string): string {
  if (!categoryKey) return categoryImages.dosa;

  if (categoryImages[categoryKey]) {
    return categoryImages[categoryKey];
  }

  const normalized = categoryKey.toLowerCase();
  if (normalized.includes('dosa')) return categoryImages.dosa;
  if (normalized.includes('idli') || normalized.includes('vada') || normalized.includes('upma')) return categoryImages.idli;
  if (normalized.includes('rice')) return categoryImages.rice;
  if (normalized.includes('uttapam')) return categoryImages.uttapam;
  if (normalized.includes('exclusive')) return categoryImages.exclusives;
  if (normalized.includes('dessert') || normalized.includes('halwa') || normalized.includes('sheera') || normalized.includes('payasam')) return categoryImages.desserts;
  if (normalized.includes('beverage') || normalized.includes('shake') || normalized.includes('coffee') || normalized.includes('lassi') || normalized.includes('buttermilk')) return categoryImages.beverages;
  if (normalized.includes('mocktail') || normalized.includes('soda') || normalized.includes('tea')) return categoryImages.mocktails;

  return categoryImages.dosa;
}

export const imagesConfig = {
  hero: {
    dosaHero: categoryImages.dosa,
    dosaPlatter: categoryImages.dosa,
    idliPlatter: categoryImages.idli,
  },
  categories: categoryImages,
  ambiance: {
    interior: categoryImages.dosa,
    familyDining: categoryImages.uttapam,
    tawaArt: categoryImages.dosa,
    tableSetup: categoryImages.idli,
  },
  instagram: [
    {
      id: 'ig-1',
      image: categoryImages.dosa,
      caption: 'The golden spiral: perfectly roasted Masala Dosa served with our trio of chutneys.',
      likes: '428',
    },
    {
      id: 'ig-2',
      image: categoryImages.idli,
      caption: 'Steaming hot Idli Vada Sambar — breakfast that warms your soul.',
      likes: '512',
    },
    {
      id: 'ig-3',
      image: categoryImages.uttapam,
      caption: 'Thick, fluffy Onion & Tomato Uttapam sizzling with pure ghee.',
      likes: '389',
    },
    {
      id: 'ig-4',
      image: categoryImages.rice,
      caption: 'Tempered South Indian Rice with mustard seeds, curry leaves & pure ghee.',
      likes: '645',
    },
    {
      id: 'ig-5',
      image: categoryImages.desserts,
      caption: 'Traditional sweets made fresh daily with pure desi ghee and roasted nuts.',
      likes: '310',
    },
    {
      id: 'ig-6',
      image: categoryImages.beverages,
      caption: 'Refreshing cold churned beverages, lassis, and artisanal coffees.',
      likes: '477',
    },
  ],
};
