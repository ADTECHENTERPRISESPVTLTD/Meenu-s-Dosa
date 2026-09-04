import { Location } from '@/types';

export const locationsConfig: Location[] = [
  {
    id: 'minal-residency',
    name: 'Minal Residency Outlet',
    area: 'Minal Residency, JK Road',
    city: 'Bhopal',
    addressLine1: 'Shop 21 & 22, Ground Floor, Minaal Residency',
    addressLine2: 'JK Road, Ayodhya Bypass',
    fullAddress: 'Shop 21 & 22, Ground Floor, Minaal Residency, JK Road, Ayodhya Bypass, Bhopal, Madhya Pradesh 462023',
    phone: '+91 62629 55505',
    phoneRaw: '+916262955505',
    hoursNote: 'Open Daily: 8:00 AM – 11:00 PM (Subject to official store hours)',
    mapsUrl: 'https://maps.google.com/?q=Meenu%27s+Dosa+Minal+Residency+JK+Road+Bhopal',
    embedMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.234!2d77.465!3d23.268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE2JzA0LjgiTiA3N8KwMjcnNTQuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
    zomatoUrl: process.env.NEXT_PUBLIC_ZOMATO_MINAL_URL || 'https://www.zomato.com/bhopal',
    swiggyUrl: process.env.NEXT_PUBLIC_SWIGGY_MINAL_URL || 'https://www.swiggy.com/city/bhopal',
    bookingAvailable: true,
    features: ['Dine-In', 'Takeaway', 'Home Delivery', 'Digital Payments', 'Family Seating'],
  },
  {
    id: 'mp-nagar',
    name: 'MP Nagar Outlet',
    area: 'Zone 2, Maharana Pratap Nagar',
    city: 'Bhopal',
    addressLine1: 'Shop 1, Plot 130, Zone 2',
    addressLine2: 'Maharana Pratap Nagar',
    fullAddress: 'Shop 1, Plot 130, Zone 2, Maharana Pratap Nagar, Bhopal, Madhya Pradesh 462011',
    phone: '+91 62629 55506',
    phoneRaw: '+916262955506',
    hoursNote: 'Open Daily: 8:00 AM – 11:00 PM (Subject to official store hours)',
    mapsUrl: 'https://maps.google.com/?q=Meenu%27s+Dosa+MP+Nagar+Zone+2+Bhopal',
    embedMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.12!2d77.432!3d23.232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzU1LjIiTiA3N8KwMjUnNTUuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin',
    zomatoUrl: process.env.NEXT_PUBLIC_ZOMATO_MPNAGAR_URL || 'https://www.zomato.com/bhopal',
    swiggyUrl: process.env.NEXT_PUBLIC_SWIGGY_MPNAGAR_URL || 'https://www.swiggy.com/city/bhopal',
    bookingAvailable: true,
    features: ['Dine-In', 'Takeaway', 'Home Delivery', 'High Speed Delivery Hub', 'Air Conditioned'],
  },
];

export const getLocationById = (id: string): Location | undefined => {
  return locationsConfig.find((loc) => loc.id === id);
};
