import {
  UtensilsCrossed,
  GlassWater,
  Apple,
  Coffee,
  Users,
  PartyPopper,
  type LucideIcon,
} from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

/**
 * PLACEHOLDER categories — edit these names, descriptions and images
 * to match the real Mapetit Lusaniya offerings.
 */
export const featuredCategories: Category[] = [
  {
    id: 'food',
    name: 'Food',
    description: 'Hearty meals cooked fresh, from local classics to grilled favourites.',
    icon: UtensilsCrossed,
    image:
      'https://images.pexels.com/photos/22735421/pexels-photo-22735421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'juices',
    name: 'Juices',
    description: 'Natural, freshly squeezed fruit juices and smoothies.',
    icon: GlassWater,
    image:
      'https://images.pexels.com/photos/2479242/pexels-photo-2479242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'fruits',
    name: 'Fruits',
    description: 'Fresh, seasonal fruit platters and healthy options.',
    icon: Apple,
    image:
      'https://images.pexels.com/photos/36499384/pexels-photo-36499384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'tea-drinks',
    name: 'Tea & Drinks',
    description: 'Warm teas, coffee and refreshing beverages.',
    icon: Coffee,
    image:
      'https://images.pexels.com/photos/30756925/pexels-photo-30756925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'catering',
    name: 'Catering',
    description: 'Full buffet and catering services for any gathering.',
    icon: Users,
    image:
      'https://images.pexels.com/photos/4005229/pexels-photo-4005229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'events',
    name: 'Event Packages',
    description: 'Tailored packages for weddings, parties and corporate events.',
    icon: PartyPopper,
    image:
      'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

/** Menu filter categories — must match the `category` field on products. */
export const menuCategories = [
  'All',
  'Meals',
  'Chicken',
  'Local Food',
  'Snacks',
  'Juices',
  'Fruits',
  'Tea & Drinks',
] as const;

export type MenuCategory = (typeof menuCategories)[number];
