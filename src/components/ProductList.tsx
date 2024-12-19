"use client";

import { Product } from "@/utils/constants";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { fetchProducts } from "@/app/action";
import Loader from "./Loader";
import Link from "next/link";

const ProductList = ({ products }: { products: Product[] }) => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setisLoading] = useState<boolean>(false);

  const ShowMore = async () => {
    setisLoading(true);
    const next = page + 1;
    try {
      const moreProducts = await fetchProducts(next);
      setProductList((prev) => [
        ...(prev?.length ? prev : []),
        ...moreProducts,
      ]);
      setPage(next);
    } catch (error) {
      console.log(error);
      return;
    } finally {
      setisLoading(false);
    }
  };

  return (
    <main>
      <section className="mt-2 px-3 pb-2 grid grid-cols-2 gap-2 md:px-12 md:pb-4 md:grid-cols-4 md:gap-4 lg:px-12 lg:pb-4 lg:grid-cols-4 lg:gap-4">
        {productList.map(({ id, thumbnail, title, price, rating }) => (
          <Link href={`/product/${id}`} key={id}>
            <ProductCard
              thumbnail={thumbnail}
              title={title}
              price={price}
              rating={rating}
            />
          </Link>
        ))}
      </section>
      <div className="flex justify-center items-center p-4">
        {isLoading ? (
          <Loader height="24px" width="24px" />
        ) : (
          <button
            className="hover-menu text-sm font-medium font-menu"
            onClick={ShowMore}
          >
            Show more
          </button>
        )}
      </div>
    </main>
  );
};

export default ProductList;
