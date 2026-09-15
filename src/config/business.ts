/**
 * ============================================================
 *  CENTRAL BUSINESS CONFIGURATION
 * ============================================================
 *  Replace the PLACEHOLDER values below with the real
 *  Mapetit Lusaniya business information when it becomes
 *  available. Everything across the site reads from here.
 * ============================================================
 */

export const business = {
  name: 'Mapetit Lusaniya',
  tagline: 'Food, Juices & Event Catering',
  shortDescription:
    'Freshly prepared food, natural juices and full event catering for every occasion.',

  // PLACEHOLDER: Replace with the real business WhatsApp number
  // Use international format without "+" or spaces (e.g. 2567XXXXXXXX for Uganda)
  whatsapp: '256700000000',

  // PLACEHOLDER: Replace with the real phone number
  phone: '+256 700 000 000',

  // PLACEHOLDER: Replace with the real email address
  email: 'hello@mapetitlusaniya.example',

  // PLACEHOLDER: Replace with the real location/area
  location: 'Kampala, Uganda',
  locationNote: 'Exact address will be added here.',

  // PLACEHOLDER: Replace with the real opening hours
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],

  social: {
    tiktok: 'https://www.tiktok.com/@mapetitlusaniya',
    facebook: 'https://www.facebook.com/mapetitlusaniya',
    instagram: 'https://www.instagram.com/mapetitlusaniya',
  },
} as const;

export type BusinessInfo = typeof business;
