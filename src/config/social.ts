import { SocialLinks } from '@/types';

export const socialConfig: SocialLinks = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/meenusdosa/',
  instagramHandle: '@meenusdosa',
  zomato: process.env.NEXT_PUBLIC_ZOMATO_URL || 'https://www.zomato.com/bhopal',
  swiggy: process.env.NEXT_PUBLIC_SWIGGY_URL || 'https://www.swiggy.com/city/bhopal',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+916262955505',
  whatsappUrl: `https://wa.me/916262955505?text=${encodeURIComponent("Hello Meenu's Dosa! I would like to inquire about ordering / table reservation.")}`,
};
