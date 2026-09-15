export interface CateringPackage {
  id: string;
  name: string;
  tagline: string;
  description: string;
  priceLabel: string;
  image: string;
  includes: string[];
  popular?: boolean;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  image: string;
}

/**
 * ============================================================
 *  PLACEHOLDER EVENT TYPES
 * ============================================================
 */
export const eventTypes: EventType[] = [
  {
    id: 'weddings',
    name: 'Weddings',
    description: 'Elegant catering and setup for your special day.',
    image:
      'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'birthdays',
    name: 'Birthdays',
    description: 'Fun, colourful food and drinks for birthday celebrations.',
    image:
      'https://images.pexels.com/photos/19976278/pexels-photo-19976278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'corporate',
    name: 'Corporate Events',
    description: 'Professional catering for meetings, conferences and launches.',
    image:
      'https://images.pexels.com/photos/18749086/pexels-photo-18749086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'family',
    name: 'Family Functions',
    description: 'Warm, home-style catering for family gatherings.',
    image:
      'https://images.pexels.com/photos/18541972/pexels-photo-18541972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'graduations',
    name: 'Graduations',
    description: 'Celebrate achievements with great food and drinks.',
    image:
      'https://images.pexels.com/photos/28736727/pexels-photo-28736727.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'parties',
    name: 'Parties',
    description: 'Lively catering and setup for all kinds of parties.',
    image:
      'https://images.pexels.com/photos/11282245/pexels-photo-11282245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

/**
 * ============================================================
 *  SAMPLE / DEMO CATERING PACKAGES
 * ============================================================
 *  These are placeholder packages. Replace names, descriptions,
 *  prices and images with the real Mapetit Lusaniya packages.
 * ============================================================
 */
export const packages: CateringPackage[] = [
  {
    id: 'pkg-a',
    name: 'Sample Package A',
    tagline: 'Small Event Package',
    description:
      'Perfect for intimate gatherings — a curated selection of food and drinks for smaller groups.',
    priceLabel: 'From UGX 500,000',
    image:
      'https://images.pexels.com/photos/34279947/pexels-photo-34279947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    includes: [
      'Food for up to 30 guests',
      '2 juice options',
      'Basic table setup',
      'Serving staff (2)',
    ],
  },
  {
    id: 'pkg-b',
    name: 'Sample Package B',
    tagline: 'Family Celebration Package',
    description:
      'A well-rounded package for family celebrations with a variety of meals, drinks and fruit.',
    priceLabel: 'From UGX 1,200,000',
    image:
      'https://images.pexels.com/photos/18541972/pexels-photo-18541972.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    includes: [
      'Food for up to 60 guests',
      '3 juice options + fruit platter',
      'Full buffet setup',
      'Serving staff (4)',
    ],
    popular: true,
  },
  {
    id: 'pkg-c',
    name: 'Sample Package C',
    tagline: 'Corporate Catering Package',
    description:
      'Professional catering designed for corporate events, meetings and conferences.',
    priceLabel: 'From UGX 2,000,000',
    image:
      'https://images.pexels.com/photos/18749086/pexels-photo-18749086.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    includes: [
      'Food for up to 100 guests',
      'Tea, coffee & juice station',
      'Snacks & dessert table',
      'Serving staff (6)',
    ],
  },
  {
    id: 'pkg-d',
    name: 'Sample Package D',
    tagline: 'Premium Event Package',
    description:
      'Our most comprehensive package — full catering, setup and service for large events.',
    priceLabel: 'Request Quote',
    image:
      'https://images.pexels.com/photos/29040997/pexels-photo-29040997.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    includes: [
      'Food for 150+ guests',
      'Full juice & fruit bar',
      'Premium buffet & event setup',
      'Dedicated event coordinator',
    ],
  },
];
