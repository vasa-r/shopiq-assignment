import { Product } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const ProductCard = ({ thumbnail, title, price, rating }: Partial<Product>) => {
  return (
    <div className="shadow-custom rounded-[3px] p-2 flex flex-col gap-1 md:p-4 lg:p-4">
      <div className="w-full h-28 relative md:h-48 lg:h-48">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title || "Product Image"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
          />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
            No Image Available
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between gap-2 relative flex-1">
        <div className="text-sm font-semibold">{title}</div>
        <div className="flex items-center justify-between">
          <div className="text-sm">Rating: {rating?.toFixed(1) || "0.0"}</div>
          <div className="text-gray-600">${price?.toFixed(2) || "0.00"}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
