import { useState, type FormEvent } from 'react';
import { Send, User, Phone, CalendarDays, Users, MapPin } from 'lucide-react';
import { eventTypes } from '@/data/packages';
import { openWhatsApp, enquiryMessage, type EnquiryDetails } from '@/utils/whatsapp';
import SectionHeading from '@/components/common/SectionHeading';

const serviceOptions = [
  'Food',
  'Buffet',
  'Juice',
  'Fruits',
  'Tea',
  'Event setup',
];

export default function EnquiryForm() {
  const [details, setDetails] = useState<EnquiryDetails>({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guests: '',
    location: '',
    services: [],
    notes: '',
  });

  const toggleService = (service: string) => {
    setDetails((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    openWhatsApp(enquiryMessage(details));
  };

  return (
    <div id="enquiry" className="scroll-mt-20">
      <SectionHeading
        eyebrow="Enquiry Form"
        title="Request a Quote"
        subtitle="Fill in the details below and we'll send your request straight to WhatsApp — no payment needed."
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200/70 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your Name" icon={<User className="h-4 w-4" />}>
            <input
              type="text"
              value={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              placeholder="Jane Doe"
              className="input-field"
              required
            />
          </Field>

          <Field label="Phone Number" icon={<Phone className="h-4 w-4" />}>
            <input
              type="tel"
              value={details.phone}
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
              placeholder="+256 700 000 000"
              className="input-field"
              required
            />
          </Field>

          <Field label="Event Type">
            <select
              value={details.eventType}
              onChange={(e) =>
                setDetails({ ...details, eventType: e.target.value })
              }
              className="input-field"
              required
            >
              <option value="">Select event type</option>
              {eventTypes.map((evt) => (
                <option key={evt.id} value={evt.name}>
                  {evt.name}
                </option>
              ))}
              <option value="Other">Other</option>
            </select>
          </Field>

          <Field label="Event Date" icon={<CalendarDays className="h-4 w-4" />}>
            <input
              type="date"
              value={details.eventDate}
              onChange={(e) =>
                setDetails({ ...details, eventDate: e.target.value })
              }
              className="input-field"
            />
          </Field>

          <Field label="Number of Guests" icon={<Users className="h-4 w-4" />}>
            <input
              type="number"
              min="1"
              value={details.guests}
              onChange={(e) => setDetails({ ...details, guests: e.target.value })}
              placeholder="50"
              className="input-field"
            />
          </Field>

          <Field label="Event Location" icon={<MapPin className="h-4 w-4" />}>
            <input
              type="text"
              value={details.location}
              onChange={(e) =>
                setDetails({ ...details, location: e.target.value })
              }
              placeholder="Kampala"
              className="input-field"
            />
          </Field>
        </div>

        {/* Services */}
        <div className="mt-6">
          <label className="text-sm font-semibold text-stone-700">
            Services Required
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {serviceOptions.map((service) => {
              const active = details.services.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {service}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notes */}
        <div className="mt-6">
          <label
            htmlFor="notes"
            className="text-sm font-semibold text-stone-700"
          >
            Additional Requirements
          </label>
          <textarea
            id="notes"
            value={details.notes}
            onChange={(e) => setDetails({ ...details, notes: e.target.value })}
            rows={3}
            placeholder="Tell us more about your event..."
            className="input-field mt-2 resize-none"
          />
        </div>

        <button type="submit" className="btn-whatsapp mt-6 w-full">
          <Send className="h-4 w-4" />
          Request a Quote on WhatsApp
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  icon,
  children,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-stone-700">
        {icon && <span className="text-stone-400">{icon}</span>}
        {label}
      </label>
      {children}
    </div>
  );
}
