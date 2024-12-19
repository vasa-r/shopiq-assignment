import React from "react";
import BackNav from "./BackNav";
import { fetchProduct } from "./action";
import { Product } from "@/utils/constants";
import ProductImage from "@/components/ProductImage";
import ProductDetails from "@/components/ProductDetails";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const param = parseInt((await params).id, 10);
  const product: Product = await fetchProduct(param);

  return (
    <main className="px-6 py-2 flex flex-col md:px-12 lg:px-12 md:h-[calc(100vh-82px)] md:w-screen lg:h-[calc(100vh-82px)] lg:w-screen">
      <BackNav />
      <div className="flex flex-col gap-2 md:h-full lg:h-full md:flex-row md:w-full lg:w-full lg:flex-row">
        <ProductImage images={product?.images} />
        <ProductDetails product={product} />
      </div>
    </main>
  );
};

export default page;
