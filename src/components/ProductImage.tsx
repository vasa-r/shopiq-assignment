"use client";

import Image from "next/image";
import Left from "@/assets/left-arrow.svg";
import Right from "@/assets/right-arrow.svg";
import { useCallback, useState } from "react";

const ProductImage = ({ images }: { images: string[] }) => {
  const [currImg, setCurrImg] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const nextImage = useCallback(() => {
    setCurrImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const previousImage = useCallback(() => {
    setCurrImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="mt-4 pb-2 shadow-btm w-full h-56 flex flex-col gap-2 md:flex-row md:w-1/2 md:h-full lg:flex-row lg:w-1/2">
      <div className="relative w-full rounded-lg h-[80%] flex overflow-hidden md:h-full lg:h-full md:w-3/4 lg:w-3/4">
        <Image
          src={images[currImg]}
          alt={`Product image ${currImg + 1}`}
          title={`Product image ${currImg + 1}`}
          className={`w-full flex-shrink-0 h-full object-cover ${
            isLoading ? "blur-sm" : ""
          }`}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={currImg === 0}
          placeholder="blur"
          blurDataURL="../assets/blur-img.png"
          onLoadingComplete={handleImageLoad}
        />
        <div
          className="absolute bg-white h-8 w-6 md:h-24 md:w-10 lg:h-24 lg:w-10 z-50 flex items-center justify-center left-0 top-1/2 transform -translate-y-1/2 opacity-80 rounded-r-xl cursor-pointer"
          onClick={previousImage}
          aria-label="Previous image"
          role="button"
        >
          <Image src={Left} alt="Previous image" width={24} height={24} />
        </div>
        <div
          className="absolute bg-white h-8 w-6 md:h-24 md:w-10 lg:h-24 lg:w-10 z-50 flex items-center justify-center right-0 top-1/2 transform -translate-y-1/2 opacity-80 rounded-l-xl cursor-pointer"
          onClick={nextImage}
          aria-label="Next image"
          role="button"
        >
          <Image src={Right} alt="Next image" width={24} height={24} />
        </div>
      </div>
      <div className="w-full h-[20%] flex justify-center items-center md:h-full lg:h-full md:w-1/4 lg:w-1/4">
        <div className="w-full flex gap-2 justify-center items-center md:flex-col">
          {images.map((item, index) => (
            <div
              key={item}
              className={`h-10 w-16 rounded-md relative border-[1.5px] cursor-pointer ${
                currImg === index ? " border-blue-500" : "border-black"
              }`}
              onClick={() => setCurrImg(index)}
            >
              <Image
                src={item}
                alt={`Thumbnail of product image ${index + 1}`}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductImage;
