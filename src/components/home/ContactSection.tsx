import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Music2,
  Facebook,
  Instagram,
} from 'lucide-react';
import { business } from '@/config/business';
import { openWhatsApp, generalEnquiryMessage } from '@/utils/whatsapp';
import SectionHeading from '@/components/common/SectionHeading';

const socials = [
  { name: 'TikTok', icon: Music2, url: business.social.tiktok },
  { name: 'Facebook', icon: Facebook, url: business.social.facebook },
  { name: 'Instagram', icon: Instagram, url: business.social.instagram },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Contact Us"
          subtitle="Have a question or want to place an order? Reach out — we'd love to hear from you."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Contact info card */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-stone-900">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-5">
              <ContactRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value={business.phone}
              />
              <ContactRow
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                value={`Chat with us`}
                action={() => openWhatsApp(generalEnquiryMessage())}
              />
              <ContactRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={business.email}
              />
              <ContactRow
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value={business.location}
                sub={business.locationNote}
              />
            </ul>

            {/* Socials */}
            <div className="mt-6 border-t border-stone-100 pt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Follow Us
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-all hover:bg-amber-600 hover:text-white"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Hours card */}
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-stone-900">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-4">
              {business.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-start gap-3"
                >
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="text-sm font-semibold text-stone-800">
                      {h.day}
                    </p>
                    <p className="text-sm text-stone-500">{h.time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-xs text-amber-700">
              Placeholder hours — replace with the official opening times.
            </p>
          </div>

          {/* Quick WhatsApp CTA */}
          <div className="card flex flex-col justify-between bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white sm:p-8">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <MessageCircle className="h-7 w-7" fill="white" fillOpacity={0.2} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">
                Order or Enquire on WhatsApp
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-50">
                The fastest way to reach us. Send your order or catering request
                and we'll get back to you.
              </p>
            </div>
            <button
              onClick={() => openWhatsApp(generalEnquiryMessage())}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-amber-700 shadow-lg transition-all hover:bg-amber-50 active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Start Chatting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  sub,
  action,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub?: string;
  action?: () => void;
}) {
  return (
    <li>
      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">
        {label}
      </p>
      <div className="mt-1 flex items-start gap-3">
        <span className="mt-0.5 text-amber-600">{icon}</span>
        <div>
          {action ? (
            <button
              onClick={action}
              className="text-sm font-semibold text-stone-800 underline-offset-2 hover:text-amber-600 hover:underline"
            >
              {value}
            </button>
          ) : (
            <p className="text-sm font-semibold text-stone-800">{value}</p>
          )}
          {sub && <p className="text-xs text-stone-400">{sub}</p>}
        </div>
      </div>
    </li>
  );
}
