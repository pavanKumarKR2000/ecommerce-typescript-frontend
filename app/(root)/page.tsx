import FeaturesCard from "@/components/features-card";
import FeaturedProducts from "@/components/product/featured-products";
import { getFeaturedProducts } from "@/lib/actions/product.actions";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="flex flex-col justify-between gap-10">
      <FeaturedProducts products={featuredProducts?.data} />
      <FeaturesCard />
    </div>
  );
}
