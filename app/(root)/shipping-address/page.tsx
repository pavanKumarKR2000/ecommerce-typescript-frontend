import ShippingAddressContainer from "@/components/order/shipping-address-container";
import ShippingAddressForm from "@/components/order/shipping-address-form";
import ShippingAddressSelectCard from "@/components/order/shipping-address-select-card";

import { getShippingAddressesOfUser } from "@/lib/actions/shipping-address.actions";

const ShippingAddressPage = async () => {
  const res = await getShippingAddressesOfUser();

  return <ShippingAddressContainer addresses={res?.data} />;
};

export default ShippingAddressPage;
