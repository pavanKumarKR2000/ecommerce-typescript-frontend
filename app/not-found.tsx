"use client";

import { Button } from "@/components/ui/button";
import { IconError404 } from "@tabler/icons-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <IconError404 className="size-20" />
        <h2 className="text-xl font-bold">
          Page you are looking for does not exist
        </h2>
        <Link href="/">
          <Button variant="outline">Home page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
