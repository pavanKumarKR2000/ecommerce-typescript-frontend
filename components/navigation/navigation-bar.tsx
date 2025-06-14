import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import ProductCategoriesDropdown from "./product-caterories-dropdown";
import { PRODUCT_CATEGORIES } from "@/lib/constants";

const NavigationBar = () => {
  return (
    <nav className="bg-gradient-to-b from-blue-500/50 from-10% to-white to-120% border-b border-gray-400">
      <div className="container mx-auto py-2 space-y-8">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.svg"
            height={10}
            width={10}
            className="h-12 w-auto"
            alt="logo"
          />
          <div>
            <Link href="/sign-up">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
        <ProductCategoriesDropdown categories={PRODUCT_CATEGORIES} />
      </div>
    </nav>
  );
};

export default NavigationBar;
