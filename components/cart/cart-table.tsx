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

const TABLE_HEADINGS = ["item", "quantity", "price"];

const CartTable = () => {
  const cart = useCartStore((state) => state.cart);
  const [pending, startTransition] = useTransition();
  const [cartItems, setCartItems] = useState<any>([]);

  useEffect(() => {
    if (cart.length) {
      const newCartItems = [];

      startTransition(async () => {
        const promises: any[] = [];

        cart.forEach((item) => {
          promises.push(getProduct(item.id));
        });

        try {
          const res = await Promise.all(promises);
        } catch (err) {
          toast.error("Something went wrong while fetching cart details");
        }
      });
    }
  }, [cart]);

  return (
    <Table className="w-full h-full">
      <TableHeader>
        <TableRow className="uppercase">
          {TABLE_HEADINGS.map((item) => (
            <TableHead key={item} className="font-bold">
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* {products?.map((product: any) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.rating}</TableCell>
            <TableCell>{product.isFeatured ? "true" : "false"}</TableCell>
            <TableCell className="flex items-center gap-2 text-right justify-end">
              <ProductDialog mode="update" id={product.id} />
              <DeleteDialog
                title="Are you sure you want to delete this product?"
                action={deleteProduct}
                isLoading={pending}
                open={open}
                setOpen={setOpen}
                id={product.id}
              />
            </TableCell>
          </TableRow>
        ))} */}
      </TableBody>
    </Table>
  );
};

export default CartTable;
