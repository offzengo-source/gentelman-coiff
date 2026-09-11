export type NavTabId = 'hero' | 'services' | 'galerie' | 'avis' | 'localisation' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  duration: string;
  description: string;
  iconName: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  date: string;
  rating: number;
  text: string;
  avatarUrl?: string;
  highlight?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'coupes' | 'barbe' | 'ambiance';
  imageUrl: string;
  alt: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}
