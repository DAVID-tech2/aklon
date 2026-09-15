import { business } from '@/config/business';

/** Build a wa.me URL from a pre-formatted message body. */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsapp}?text=${encoded}`;
}

/** Open WhatsApp in a new tab with the given message. */
export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

/** A simple general enquiry message for the floating button. */
export function generalEnquiryMessage(): string {
  return `Hello ${business.name} 👋\n\nI would like to make an enquiry.`;
}

export interface CartItemForWhatsApp {
  name: string;
  quantity: number;
  price: number;
}

/** Build the order message sent from the cart. */
export function orderMessage(items: CartItemForWhatsApp[], total: number): string {
  const lines = items.map(
    (item, i) => `${i + 1}. ${item.name} × ${item.quantity} — UGX ${(item.price * item.quantity).toLocaleString()}`,
  );
  return (
    `Hello ${business.name} 👋\n\n` +
    `I would like to place an order.\n\n` +
    `ORDER:\n${lines.join('\n')}\n\n` +
    `Estimated Total: UGX ${total.toLocaleString()}\n\n` +
    `Customer Name:\n` +
    `Location:\n` +
    `Preferred Date:\n` +
    `Additional Notes:`
  );
}

export interface EnquiryDetails {
  name: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  services: string[];
  notes: string;
}

/** Build the catering enquiry message. */
export function enquiryMessage(details: EnquiryDetails): string {
  const services = details.services.length
    ? details.services.map((s) => `- ${s}`).join('\n')
    : '- (none selected)';
  return (
    `Hello ${business.name} 👋\n\n` +
    `I would like to request a catering quotation.\n\n` +
    `Name: ${details.name || '—'}\n` +
    `Phone: ${details.phone || '—'}\n\n` +
    `Event Type: ${details.eventType || '—'}\n` +
    `Event Date: ${details.eventDate || '—'}\n` +
    `Number of Guests: ${details.guests || '—'}\n` +
    `Location: ${details.location || '—'}\n\n` +
    `Services Needed:\n${services}\n\n` +
    `Additional Requirements: ${details.notes || '—'}`
  );
}
