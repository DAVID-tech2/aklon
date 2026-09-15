import { useState, type ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';

interface SmartImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
}

/**
 * Image with graceful fallback — shows a placeholder if the
 * image fails to load or the src is empty.
 */
export default function SmartImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'Image coming soon',
  ...rest
}: SmartImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`flex items-center justify-center bg-stone-100 text-stone-400 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-2 px-4 text-center">
          <ImageOff className="h-8 w-8" strokeWidth={1.5} />
          <span className="text-xs font-medium">{fallbackLabel}</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setError(true)}
      className={className}
      {...rest}
    />
  );
}
