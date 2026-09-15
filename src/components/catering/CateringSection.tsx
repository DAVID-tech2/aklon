import { packages } from '@/data/packages';
import SectionHeading from '@/components/common/SectionHeading';
import EventTypes from '@/components/catering/EventTypes';
import PackageCard from '@/components/catering/PackageCard';
import EnquiryForm from '@/components/catering/EnquiryForm';

export default function CateringSection() {
  return (
    <section id="catering" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Event Catering"
          title="Planning an Event? Let Us Handle the Food."
          subtitle="Full catering services for weddings, birthdays, corporate events and more — tailored to your needs."
        />

        <EventTypes />

        {/* Packages */}
        <div className="mt-20">
          <SectionHeading
            eyebrow="Catering Packages"
            title="Choose a Package"
            subtitle="Sample packages shown here — replace with the real Mapetit packages when ready."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>

        {/* Enquiry form */}
        <div className="mt-20">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}
