import { PRODUCT_CATEGORIES } from "@/lib/constants";
import { IconShoppingBag, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ProductCategoriesDropdown from "./product-caterories-dropdown";
import SearchProduct from "./SearchProduct";
import ModeToggle from "./theme-toggle";
import UserMenu from "./user-menu";

const NavigationBar = () => {
  return (
    <nav className="shadow-sm sticky top-0 bg-white dark:bg-black dark:border-b dark:border-slate-700 ">
      <div className="flex items-center justify-between container mx-auto py-3">
        <Link href="/">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold leading-0!">E-STORE</h2>
            <IconShoppingBag />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <ProductCategoriesDropdown categories={PRODUCT_CATEGORIES} />
          <SearchProduct />
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/cart">
            <Button variant="secondary">
              <IconShoppingCart /> <span>cart</span>
            </Button>
          </Link>
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
