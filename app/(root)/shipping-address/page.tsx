import ShippingAddressForm from "@/components/order/shipping-address-form";

const ShippingAddress = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-bold text-2xl">Shipping address</h2>
      <ShippingAddressForm />
    </div>
  );
};

export default ShippingAddress;
