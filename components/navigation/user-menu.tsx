"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUserStore } from "@/stores/userStore";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";

const UserMenu = () => {
  const { user } = useUserStore();

  if (user) {
    return (
      <Link href="/sign-up">
        <Button>Sign up</Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <IconUser /> <span>user</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem className="hover:bg-white!">
          <div className="space-y-2">
            <p className="font-medium">Pavan Kumar</p>
            <p className="text-slate-500">pavan@gmail.com</p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>User profile</DropdownMenuItem>
        <DropdownMenuItem>Order history</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
