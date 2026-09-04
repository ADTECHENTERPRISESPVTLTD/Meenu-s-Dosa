export interface MenuItem {
  _id?: string; // MongoDB ObjectId support for future database migration
  id: string; // Stable unique identifier (e.g. 'butter-masala-dosa')
  slug: string; // URL-friendly slug
  name: string; // Display dish name
  category: string; // Category slug reference
  description: string; // Dish description
  price: number | null; // Numeric price (e.g. 209) or null if unconfigured
  image: string | null; // Explicitly string or null for authentic photography honesty
  isVegetarian: boolean; // 100% vegetarian mark
  isFeatured: boolean; // Featured in highlights
  isSignature?: boolean; // Signature dish badge
  isBestseller?: boolean; // Bestseller badge
  isAvailable: boolean; // Current kitchen availability
  sortOrder: number; // Order index within category
  spiciness?: 'mild' | 'medium' | 'spicy';
  createdAt?: string; // Audit timestamp
  updatedAt?: string; // Audit timestamp
}

export interface MenuCategory {
  _id?: string;
  id: string; // Stable slug (e.g. 'dosa', 'idli-vada-upma')
  slug: string;
  name: string;
  description: string;
  image: string;
  sortOrder: number;
  isAvailable: boolean;
}

export interface Location {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  area: string;
  city: string;
  fullAddress: string;
  phone: string;
  phoneRaw: string;
  hoursNote: string;
  mapsUrl: string;
  embedMapsUrl?: string;
  zomatoUrl?: string;
  swiggyUrl?: string;
  bookingAvailable: boolean;
  features: string[];
}

export interface SocialLinks {
  instagram: string;
  instagramHandle: string;
  zomato: string;
  swiggy: string;
  whatsappNumber: string;
  whatsappUrl: string;
}

export interface TableBookingPayload {
  name: string;
  phone: string;
  email?: string;
  locationId: string;
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  outlet?: string;
  message: string;
}
