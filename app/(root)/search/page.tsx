import ProductCard from "@/components/product/product-card";
import { Badge } from "@/components/ui/badge";
import { getProducts } from "@/lib/actions/product.actions";
import { IconShoppingCartExclamation } from "@tabler/icons-react";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    c?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}

const SearchPage = async (props: SearchPageProps) => {
  const { q, c } = await props.searchParams;
  const res = await getProducts(c, q);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {q && (
          <p className="flex items-center gap-1">
            Search
            <Badge variant="success" className="text-md">
              {q}
            </Badge>
          </p>
        )}
        {c && (
          <p className="flex items-center gap-1">
            Category
            <Badge variant="success" className="text-md">
              {c}
            </Badge>
          </p>
        )}
      </div>

      {res?.data?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {res?.data?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center  gap-4 flex-1">
          <IconShoppingCartExclamation className="size-10" />
          <h2 className="text-xl italic">No products found</h2>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
