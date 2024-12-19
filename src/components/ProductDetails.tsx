import { Product } from "@/utils/constants";
import ReviewCard from "./ReviewCard";

const ProductDetails = ({ product }: { product: Product }) => {
  const {
    title,
    description,
    tags,
    rating,
    stock,
    warrantyInformation,
    shippingInformation,
    discountPercentage,
    price,
    returnPolicy,
    reviews,
  } = product;

  function ogPrice(discountedPrice: number, discountPercentage: number) {
    return (discountedPrice / (1 - discountPercentage / 100)).toFixed(2);
  }

  return (
    <div className="p-2 md:w-1/2 lg:w-1/2 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-medium md:text-6xl lg:text-6xl">
          {title}
        </h1>
        <p className="text-sm font-normal md:text-lg lg:text-lg">
          {description}
        </p>
        <div className="flex items-center flex-wrap gap-3">
          {tags?.map((tag) => (
            <div
              key={tag}
              className="px-2 py-1 rounded-lg bg-greyish flex justify-center items-center w-min cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between md:max-w-96 lg:max-w-96">
          <h2>
            Rating : <span className="font-medium">{rating}</span>
          </h2>
          <h2 className="font-medium">
            {stock > 1 ? "In Stock" : "Out Of Stock"}
          </h2>
        </div>
      </div>
      <div className="shadow-card mt-2 p-2 flex items-center md:max-w-96 lg:max-w-96">
        <div className="border-r-2 flex-1 text-center">
          {warrantyInformation && warrantyInformation}
        </div>
        <div className="flex-1 text-center">{returnPolicy && returnPolicy}</div>
      </div>
      <hr className="h-2 my-3" />
      <div>
        <div className="flex items-center gap-4">
          <h2 className="text-2xl text-red-500">
            -{discountPercentage && discountPercentage}%
          </h2>
          <h2 className="text-4xl">${price && price}</h2>
        </div>
      </div>
      <h2>
        MRP:{" "}
        <span className="text-lg font-medium line-through">
          {ogPrice(price, discountPercentage)}
        </span>
      </h2>
      <hr className="h-2 my-3" />
      <div className="w-full flex justify-center items-center">
        <div className="w-2/3 flex flex-col gap-4">
          <div className="flex-1 rounded-[3px] p-3 border-black border-[1px] text-center cursor-pointer">
            Add to Cart
          </div>
          <div className="flex-1 rounded-[3px] p-3 bg-blue-500 text-white text-center cursor-pointer">
            Add to Cart
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm font-medium">
        {shippingInformation && shippingInformation}
      </p>
      <hr className="h-2 my-3" />
      <h2 className="text-xl font-bold underline underline-offset-4">
        Reviews <span className="text-sm font-medium">({reviews.length})</span>
      </h2>
      <div className="mt-3 flex flex-col gap-3">
        {reviews.map((review) => (
          <ReviewCard key={review.comment} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
