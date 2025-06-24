"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductCategoriesSelect = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const c = searchParams.get("c");
  const [category, setCategory] = useState(c || "");
  const router = useRouter();

  const onValueChange = (e: string) => {
    setCategory(e);
    const params = {
      q: q || "",
      c: e,
    };
    router.push(`/search?${new URLSearchParams(params).toString()}`);
  };

  useEffect(() => {
    if (!c) {
      setCategory("");
    }
  }, [searchParams]);

  return (
    <div className="hidden md:inline-flex">
      <Select name="category" onValueChange={onValueChange} value={category}>
        <SelectTrigger className="w-[240px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {PRODUCT_CATEGORIES.map((item) => (
            <SelectItem key={item.id} value={item.name}>
              {<item.icon />} {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductCategoriesSelect;
