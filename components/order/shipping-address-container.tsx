"use client";
import ShippingAddressForm from "@/components/order/shipping-address-form";
import ShippingAddressSelectCard from "@/components/order/shipping-address-select-card";
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface ShippingAddressContainerProps {
  addresses: any[];
}

const ShippingAddressContainer = ({
  addresses,
}: ShippingAddressContainerProps) => {
  const [showShippingAddressForm, setShowShippingAddressForm] = useState(
    !addresses?.length,
  );

  return (
    <div className="space-y-6 ">
      <h2 className="font-bold text-2xl">Shipping address</h2>
      {showShippingAddressForm ? (
        <ShippingAddressForm
          addresses={addresses}
          setShowShippingAddressForm={setShowShippingAddressForm}
        />
      ) : (
        <ShippingAddressSelectCard
          addresses={addresses}
          setShowShippingAddressForm={setShowShippingAddressForm}
        />
      )}
    </div>
  );
};
export default ShippingAddressContainer;
