import FeaturedProducts from "@/components/product/FeaturedProducts";
import { getFeaturedProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      <FeaturedProducts products={featuredProducts.data} />
    </div>
  );
}
