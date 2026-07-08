// components/ImageCard.tsx
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;      // for outer wrapper (width, max-width, etc.)
  imageHeight?: string;    // for image wrapper height, e.g. "h-72"
}

export default function ImageCard({ src, alt, title, description, className ="w-full max-w-sm", imageHeight = "min-h-64" }: ImageCardProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl shadow-md ${className}`}>
      {/* Image wrapper clips the zoom so the card itself never grows */}
      <div className={`relative w-full overflow-hidden ${imageHeight}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      {/* Text content */}
      <div className="p-4 absolute bottom-0 left-0 w-full bg-linear-to-t from-black to-transparent">
        <h3 className="text-lg font-semibold text-(--foreground)">{title}</h3>
        <p className="mt-1 text-sm text-(--foreground-muted)">{description}</p>
      </div>
    </div>
  );
}