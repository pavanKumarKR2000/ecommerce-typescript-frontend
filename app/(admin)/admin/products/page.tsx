import AddProductDialog from "@/components/admin/add-product-dialog";

const AdminProductsPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Products</h2>
        <AddProductDialog />
      </div>
    </div>
  );
};

export default AdminProductsPage;
