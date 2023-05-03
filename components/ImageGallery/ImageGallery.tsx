"use client";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ImageGallery = ({ images }: any) => {
  console.log(images);

  const [activeImage, setActiveImage] = useState(images[0].image);

  const handleActiveImage = (image: any) => {
    setActiveImage(image);
  };

  useEffect(() => {
    console.log(activeImage);
  }, [activeImage]);

  return (
    <div className="flex items-center justify-center">
      <Image
        src={activeImage.url}
        alt={activeImage.alt}
        // className="max-w-full max-h-96 mr-8 aspect-w-4 aspect-h-3"
        className="object-cover aspect-w-4 aspect-h-3 w-full max-w-lg"
        width={"200"}
        height={400}
      />
      <img />
      <div className="flex flex-col">
        <nav className="flex flex-1 flex-col" aria-label="Sidebar">
          <ul role="list" className="-mx-2 space-y-1">
            {images.map(({ id, image, view, label }: any) => (
              <li key={id}>
                <button
                  onClick={() => handleActiveImage(image)}
                  // href={image.href}
                  className={classNames(
                    activeImage.id === image.id
                      ? "bg-zinc-50 text-shark-600"
                      : "text-zinc-700 hover:text-shark-600 hover:bg-zinc-50",
                    "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold"
                  )}
                >
                  {label ? label : view}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
