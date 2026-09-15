export interface GalleryImage {
  src: string;
  alt: string;
  category: 'Food' | 'Drinks' | 'Events' | 'Fruits';
}

/**
 * PLACEHOLDER gallery images — replace with real Mapetit Lusaniya
 * photos when they become available.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/4005229/pexels-photo-4005229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant buffet spread with meats, cheeses and appetizers',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/2479242/pexels-photo-2479242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Refreshing glass of berry juice with fresh fruit',
    category: 'Drinks',
  },
  {
    src: 'https://images.pexels.com/photos/19938618/pexels-photo-19938618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Grilled chicken with rice and fresh vegetables',
    category: 'Food',
  },
  {
    src: 'https://images.pexels.com/photos/36499384/pexels-photo-36499384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colourful display of fresh fruit baskets',
    category: 'Fruits',
  },
  {
    src: 'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Beautifully arranged wedding reception tables',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/23286188/pexels-photo-23286188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Crispy samosas with dipping sauce',
    category: 'Food',
  },
  {
    src: 'https://images.pexels.com/photos/8215113/pexels-photo-8215113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Colourful assortment of fresh fruit juices',
    category: 'Drinks',
  },
  {
    src: 'https://images.pexels.com/photos/22735421/pexels-photo-22735421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Traditional Ugandan meal with rice, stew and chapati',
    category: 'Food',
  },
  {
    src: 'https://images.pexels.com/photos/12007736/pexels-photo-12007736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stack of fresh citrus slices',
    category: 'Fruits',
  },
  {
    src: 'https://images.pexels.com/photos/18749086/pexels-photo-18749086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Corporate event buffet with diverse food options',
    category: 'Events',
  },
  {
    src: 'https://images.pexels.com/photos/14930534/pexels-photo-14930534.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Vibrant smoothies with fresh fruit garnish',
    category: 'Drinks',
  },
  {
    src: 'https://images.pexels.com/photos/28736727/pexels-photo-28736727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Chef serving traditional dishes at an elegant buffet',
    category: 'Events',
  },
];
