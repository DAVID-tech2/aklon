import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} ${
        visible ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-amber-600">
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-stone-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}
