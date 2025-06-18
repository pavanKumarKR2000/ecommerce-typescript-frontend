"use client";
import { IconShoppingBag } from "@tabler/icons-react";
import Link from "next/link";
import ModeToggle from "./theme-toggle";
import UserMenu from "./user-menu";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  // {
  //   title: "Overview",
  //   href: "/admin/overview",
  // },
  {
    title: "Products",
    href: "/admin/products",
  },
  // {
  //   title: "Orders",
  //   href: "/admin/orders",
  // },
  {
    title: "Users",
    href: "/admin/users",
  },
];

const AdminNavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="shadow-sm sticky top-0 bg-white dark:bg-black dark:border-b dark:border-slate-700 ">
      <div className="flex items-center justify-between container mx-auto py-3">
        <div className="flex items-center gap-10">
          <Link href="/">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold leading-0!">E-STORE</h2>
              <IconShoppingBag />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                href={item.href}
                key={item.title}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname.includes(item.href) ? "" : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserMenu />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavigationBar;
