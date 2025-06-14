import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ProductCategoriesDropdown from "./product-caterories-dropdown";
import { PRODUCT_CATEGORIES } from "@/lib/constants";
import SearchProduct from "./SearchProduct";
import { IconShoppingBag } from "@tabler/icons-react";
import ModeToggle from "./theme-toggle";

const NavigationBar = () => {
  return (
    <nav className="border-b border-gray-400">
      <div className="flex items-center justify-between container mx-auto py-2">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold leading-0!">E-STORE</h2>
          <IconShoppingBag />
        </div>
        <div className="flex items-center gap-4">
          <ProductCategoriesDropdown categories={PRODUCT_CATEGORIES} />
          <SearchProduct />
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
