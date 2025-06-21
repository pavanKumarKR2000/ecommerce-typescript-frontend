import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";
import ModeToggle from "./theme-toggle";
import CartButton from "./cart-button";
import UserMenu from "./user-menu";

const MobileMenu = () => {
  return (
    <div className="inline-flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <IconMenu2 />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle hidden></SheetTitle>
          <div className="flex items-center justify-center gap-4 px-6 py-12">
            <ModeToggle />
            <CartButton />
            <UserMenu />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
