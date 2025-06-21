import { IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";
import CartButton from "./cart-button";
import ProductCategoriesSelect from "./product-caterories-select";
import SearchProduct from "./SearchProduct";
import ModeToggle from "./theme-toggle";
import UserMenu from "./user-menu";
import MobileMenu from "./mobile-menu";

const NavigationBar = () => {
  return (
    <nav className="shadow-sm sticky top-0 bg-white dark:bg-black dark:border-b dark:border-slate-700 z-10">
      <div className="flex items-center justify-between container mx-auto py-4 px-2 md:px-0">
        <Link href="/">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold leading-0! hidden md:inline-flex">
              E-STORE
            </h2>
            <IconShoppingBag />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <ProductCategoriesSelect />
          <SearchProduct />
        </div>

        <div className="md:flex items-center gap-4 hidden">
          <ModeToggle />
          <CartButton />
          <UserMenu />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default NavigationBar;
