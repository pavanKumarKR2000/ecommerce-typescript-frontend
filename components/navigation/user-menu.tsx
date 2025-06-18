"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/lib/actions/auth.actions";
import { useUserStore } from "@/stores/userStore";
import { IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

const UserMenu = () => {
  const { user, clearUser } = useUserStore();
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(async () => {
      const { success, message } = await signOutUser();

      if (success) {
        toast.success(message);
        clearUser();
      } else {
        toast.error(message);
      }
    });
  };

  if (!user) {
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
            <p className="font-medium">{user.name}</p>
            <p className="text-slate-500">{user.email}</p>
          </div>
        </DropdownMenuItem>
        {user.role === "admin" && (
          <DropdownMenuItem>
            <Link href="/admin/products">Admin</Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem>User profile</DropdownMenuItem>
        <DropdownMenuItem>Order history</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button variant="ghost" onClick={onClick} disabled={isPending}>
            {isPending ? "Logging out..." : "Log out"}
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
