import ProductDialog from "@/components/admin/product-dialog";
import ProductTable from "@/components/admin/product-table";
import { getProducts } from "@/lib/actions/product.actions";

const AdminProductsPage = async () => {
  const res = await getProducts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <ProductDialog mode="add" />
      </div>
      {res?.data ? (
        <ProductTable products={res.data} />
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default AdminProductsPage;
