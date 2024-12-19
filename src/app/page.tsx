import ProductList from "@/components/ProductList";
import Carousel from "@/components/Carousel";
import { Product } from "@/utils/constants";
import { fetchProducts } from "./action";

const Page = async () => {
  const products: Product[] = await fetchProducts(0);

  return (
    <div className="flex flex-col gap-4">
      <Carousel autoScroll={true} />
      <ProductList products={products} />
    </div>
  );
};

export default Page;
