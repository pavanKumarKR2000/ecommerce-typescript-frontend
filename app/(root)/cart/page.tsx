import CartTable from "@/components/cart/cart-table";

const CartPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-2xl">Shopping cart</h2>
      <CartTable />
    </div>
  );
};

export default CartPage;
