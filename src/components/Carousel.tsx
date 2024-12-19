/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Left from "@/assets/left-arrow.svg";
import Right from "@/assets/right-arrow.svg";
import { carouselItems } from "@/utils/constants";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const Carousel = ({ autoScroll = false }: { autoScroll: boolean }) => {
  const [currImg, setCurrImg] = useState<number>(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (autoScroll) timer = setInterval(nextImage, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextImage = useCallback(() => {
    setCurrImg((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  }, []);

  const previousImage = useCallback(() => {
    setCurrImg((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  }, []);

  return (
    <section className="mt-4 px-6 shadow-bottom w-full h-56 flex-col gap-2 md:h-96 md:px-12 lg:px-12">
      <div className="relative w-full rounded-lg h-[80%] flex overflow-hidden">
        <Image
          src={carouselItems[currImg].img}
          alt={carouselItems[currImg].label}
          title={carouselItems[currImg].label}
          className="w-full flex-shrink-0 h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute bg-white h-8 w-6 md:h-24 md:w-10 lg:h-24 lg:w-10 z-20 flex items-center justify-center left-0 top-1/2 transform -translate-y-1/2 opacity-80 rounded-r-xl cursor-pointer"
          onClick={previousImage}
        >
          <Image src={Left} alt="previous banner" width={24} height={24} />
        </div>
        <div
          className="absolute bg-white h-8 w-6 md:h-24 md:w-10 lg:h-24 lg:w-10 z-20 flex items-center justify-center right-0 top-1/2 transform -translate-y-1/2 opacity-80 rounded-l-xl cursor-pointer"
          onClick={nextImage}
        >
          <Image src={Right} alt="next banner" width={24} height={24} />
        </div>
      </div>
      <div className="w-full h-[20%] flex justify-center items-center">
        <div className="w-36 flex gap-2">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={`h-[3px] w-full rounded-xl ${
                currImg === index ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
