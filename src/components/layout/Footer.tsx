import { UtensilsCrossed, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { business } from '@/config/business';
import { openWhatsApp, generalEnquiryMessage } from '@/utils/whatsapp';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Catering', href: '#catering' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-600 text-white">
                <UtensilsCrossed className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-white">
                {business.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              {business.shortDescription}
            </p>
            <button
              onClick={() => openWhatsApp(generalEnquiryMessage())}
              className="btn-whatsapp mt-5"
            >
              Chat with us
            </button>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>{business.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>{business.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                <span>{business.location}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Opening Hours
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-stone-400">
              {business.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span>
                    <span className="block font-medium text-stone-300">
                      {h.day}
                    </span>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-800 pt-6">
          <p className="text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} {business.name}. All rights
            reserved. ·{' '}
            <span className="text-stone-600">
              Placeholder content — replace with official business information.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
