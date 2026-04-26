import Image from "next/image";
import { type ProjectImage } from "@/data/career";

interface ImageGalleryProps {
  images: (ProjectImage | string)[];
}

function normalize(images: (ProjectImage | string)[]): ProjectImage[] {
  return images.map((img) =>
    typeof img === "string" ? { src: img, type: "desktop" as const } : img
  );
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const normalized = normalize(images);
  const desktopImages = normalized.filter((img) => img.type === "desktop");
  const mobileImages = normalized.filter((img) => img.type === "mobile");

  return (
    <div className="mt-3 space-y-3">
      {desktopImages.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {desktopImages.map((img) => (
            <div
              key={img.src}
              className="relative w-96 h-60 shrink-0 rounded-lg overflow-hidden border border-neutral-100 shadow-sm"
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
      {mobileImages.length > 0 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {mobileImages.map((img) => (
            <div
              key={img.src}
              className="relative w-32 h-64 shrink-0 rounded-lg overflow-hidden border border-neutral-100 shadow-sm"
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
