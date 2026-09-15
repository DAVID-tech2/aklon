export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  featured?: boolean;
}

/**
 * ============================================================
 *  PLACEHOLDER PRODUCTS
 * ============================================================
 *  These are sample/demo items. Replace names, descriptions,
 *  prices and images with the real Mapetit Lusaniya menu.
 *  Prices are in Ugandan Shillings (UGX).
 * ============================================================
 */
export const products: Product[] = [
  // Meals
  {
    id: 1,
    name: 'Chicken & Chips',
    description: 'Grilled chicken served with golden fries and a fresh side salad.',
    price: 15000,
    category: 'Meals',
    image:
      'https://images.pexels.com/photos/19938618/pexels-photo-19938618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
    featured: true,
  },
  {
    id: 2,
    name: 'Roast Chicken Platter',
    description: 'Roasted chicken with seasonal vegetables and rich gravy.',
    price: 22000,
    category: 'Meals',
    image:
      'https://images.pexels.com/photos/16845749/pexels-photo-16845749.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 3,
    name: 'Chicken & Rice Special',
    description: 'Grilled chicken breast with steamed rice, fries and fresh veg.',
    price: 18000,
    category: 'Meals',
    image:
      'https://images.pexels.com/photos/34487536/pexels-photo-34487536.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
    featured: true,
  },

  // Chicken
  {
    id: 4,
    name: 'Grilled Chicken Wings',
    description: 'Smoky grilled chicken wings with tortillas and fries.',
    price: 16000,
    category: 'Chicken',
    image:
      'https://images.pexels.com/photos/37322776/pexels-photo-37322776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 5,
    name: 'Chicken Skewers & Noodles',
    description: 'Tender chicken skewers served with noodles and dipping sauce.',
    price: 17000,
    category: 'Chicken',
    image:
      'https://images.pexels.com/photos/37338385/pexels-photo-37338385.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 6,
    name: 'Whole Roast Chicken',
    description: 'A perfectly roasted whole chicken with garnish — great for sharing.',
    price: 35000,
    category: 'Chicken',
    image:
      'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },

  // Local Food
  {
    id: 7,
    name: 'Ugandan Special Plate',
    description: 'Rice, stew, fresh greens and chapati — a taste of home.',
    price: 12000,
    category: 'Local Food',
    image:
      'https://images.pexels.com/photos/22735421/pexels-photo-22735421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
    featured: true,
  },
  {
    id: 8,
    name: 'Chapati & Beans',
    description: 'Warm homemade chapati served with beans and vegetable sauce.',
    price: 8000,
    category: 'Local Food',
    image:
      'https://images.pexels.com/photos/5589943/pexels-photo-5589943.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 9,
    name: 'Ugali & Stew Combo',
    description: 'Traditional ugali with beans, greens and a rich vegetable sauce.',
    price: 10000,
    category: 'Local Food',
    image:
      'https://images.pexels.com/photos/37100094/pexels-photo-37100094.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },

  // Snacks
  {
    id: 10,
    name: 'Crispy Samosas',
    description: 'Golden fried samosas with a savoury filling — a perfect snack.',
    price: 5000,
    category: 'Snacks',
    image:
      'https://images.pexels.com/photos/23286188/pexels-photo-23286188.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
    featured: true,
  },
  {
    id: 11,
    name: 'Spring Rolls',
    description: 'Crispy spring rolls served with fresh lettuce and dipping sauce.',
    price: 6000,
    category: 'Snacks',
    image:
      'https://images.pexels.com/photos/4001867/pexels-photo-4001867.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 12,
    name: 'Samosa Combo Plate',
    description: 'Four crispy samosas with onion rings and green chili.',
    price: 8000,
    category: 'Snacks',
    image:
      'https://images.pexels.com/photos/36170557/pexels-photo-36170557.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },

  // Juices
  {
    id: 13,
    name: 'Berry Fresh Juice',
    description: 'Refreshing mixed berry juice with fresh fruit garnish.',
    price: 8000,
    category: 'Juices',
    image:
      'https://images.pexels.com/photos/2479242/pexels-photo-2479242.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
    featured: true,
  },
  {
    id: 14,
    name: 'Tropical Fruit Punch',
    description: 'A colourful blend of seasonal tropical fruits and juices.',
    price: 9000,
    category: 'Juices',
    image:
      'https://images.pexels.com/photos/8215113/pexels-photo-8215113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 15,
    name: 'Mango Smoothie',
    description: 'Thick, creamy mango smoothie — naturally sweet and refreshing.',
    price: 9000,
    category: 'Juices',
    image:
      'https://images.pexels.com/photos/17612822/pexels-photo-17612822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 16,
    name: 'Mango & Strawberry Blend',
    description: 'A vibrant mango and strawberry smoothie with fresh fruit.',
    price: 10000,
    category: 'Juices',
    image:
      'https://images.pexels.com/photos/14930480/pexels-photo-14930480.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },

  // Fruits
  {
    id: 17,
    name: 'Seasonal Fruit Platter',
    description: 'A colourful arrangement of fresh, seasonal fruits.',
    price: 12000,
    category: 'Fruits',
    image:
      'https://images.pexels.com/photos/36499384/pexels-photo-36499384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
    featured: true,
  },
  {
    id: 18,
    name: 'Citrus Fruit Bowl',
    description: 'Grapefruit, orange, lemon and lime slices — fresh and zesty.',
    price: 10000,
    category: 'Fruits',
    image:
      'https://images.pexels.com/photos/12007736/pexels-photo-12007736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 19,
    name: 'Mixed Fruit Selection',
    description: 'Bananas, grapes and plums — a healthy, ready-to-eat mix.',
    price: 8000,
    category: 'Fruits',
    image:
      'https://images.pexels.com/photos/29994023/pexels-photo-29994023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },

  // Tea & Drinks
  {
    id: 20,
    name: 'African Spiced Tea',
    description: 'Warm, aromatic traditional tea — freshly brewed.',
    price: 4000,
    category: 'Tea & Drinks',
    image:
      'https://images.pexels.com/photos/30756925/pexels-photo-30756925.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 21,
    name: 'Cappuccino',
    description: 'Creamy cappuccino with beautiful latte art.',
    price: 6000,
    category: 'Tea & Drinks',
    image:
      'https://images.pexels.com/photos/111159/pexels-photo-111159.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
  {
    id: 22,
    name: 'Café Latte',
    description: 'Smooth espresso with steamed milk and heart-shaped art.',
    price: 6000,
    category: 'Tea & Drinks',
    image:
      'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    available: true,
  },
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured && p.available);
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}
