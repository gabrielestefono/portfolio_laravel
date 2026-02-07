"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProjectGallery.module.scss";

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

export function ProjectGallery({
  images,
  projectName,
}: Readonly<ProjectGalleryProps>) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className={styles["gallery"]}>
      {/* Main Image */}
      <div>
        <Image
          src={images[selectedIndex] || "/placeholder.svg"}
          alt={`${projectName} - Imagem ${selectedIndex + 1}`}
          fill
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              data-active={selectedIndex === index || undefined}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${projectName} - Thumbnail ${index + 1}`}
                fill
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
