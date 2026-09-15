import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import SmartImage from '@/components/common/SmartImage';
import { useReveal } from '@/hooks/useReveal';
import { business } from '@/config/business';

const aboutImage =
  'https://images.pexels.com/photos/14867246/pexels-photo-14867246.jpeg?auto=compress&cs=tinysrgb&w=1200';

const highlights = [
  'Freshly prepared food',
  'Natural fruit juices',
  'Full event catering',
  'Customisable packages',
];

export default function AboutPreview() {
  const { ref, visible } = useReveal();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            visible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <SmartImage
                src={aboutImage}
                alt="Chef serving a variety of colorful dishes at a buffet"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-3 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-stone-200 sm:block">
              <p className="font-display text-3xl font-bold text-amber-600">
                100%
              </p>
              <p className="text-xs font-medium text-stone-500">
                Fresh &amp; made to order
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              center={false}
              eyebrow="About Us"
              title={`About ${business.name}`}
            />
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              Business story and official information will be added here. This
              is a placeholder section — the real story of {business.name}{' '}
              will replace this text once it's collected.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-stone-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary mt-8"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
