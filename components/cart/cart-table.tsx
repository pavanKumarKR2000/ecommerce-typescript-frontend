"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProduct } from "@/lib/actions/product.actions";
import { useCartStore } from "@/stores/cartStore";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import AddToCartButton from "../product/add-to-cart-button";
import { cn } from "@/lib/utils";
import { IconShoppingCartExclamation } from "@tabler/icons-react";
import Image from "next/image";
import CheckoutCard from "./checkout-card";

const TABLE_HEADINGS = ["item", "quantity", "price", "actions"];

const CartTable = () => {
  const cart = useCartStore((state) => state.cart);

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center  gap-4 flex-1">
        <IconShoppingCartExclamation className="size-10" />
        <h2 className="text-xl italic">Shopping cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4">
      <Table className="w-full h-full overflow-hidden">
        <TableHeader>
          <TableRow className="uppercase">
            {TABLE_HEADINGS.map((item) => (
              <TableHead
                key={item}
                className={cn("font-bold", item === "actions" && "text-right")}
              >
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.productId}>
              <TableCell className="flex items-center gap-4">
                <Image
                  src={item.productImage}
                  alt="product image"
                  height={40}
                  width={40}
                  priority
                />
                {item.productName}
              </TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell> &#8377;{item.productPrice}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-right justify-end">
                  <AddToCartButton
                    productId={item.productId}
                    productName={item.productName}
                    productImage={item.productImage}
                    productPrice={item.productPrice}
                    stock={item.stock}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CheckoutCard />
    </div>
  );
};

export default CartTable;
