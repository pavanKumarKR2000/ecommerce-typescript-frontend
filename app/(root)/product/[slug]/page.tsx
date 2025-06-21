import ProductDetails from "@/components/product/product-details";
import { getProduct } from "@/lib/actions/product.actions";

interface ProductPageProps {
  searchParams: Promise<{
    id: number;
  }>;
}

const ProductPage = async (props: ProductPageProps) => {
  const { id } = await props.searchParams;
  const res = await getProduct(id);

  return <ProductDetails product={res?.data} />;
};

export default ProductPage;
