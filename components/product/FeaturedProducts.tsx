import { Product } from "@/types";
import ProductCard from "./product-card";

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  return (
    <div className="space-y-6 py-10">
      <h2 className="font-bold text-2xl">Featured Products</h2>
      <div className="grid grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
