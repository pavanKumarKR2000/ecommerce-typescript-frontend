"use client";

import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUserStore();
  const router = useRouter();

  if (user) {
    router.replace("/");
  }

  return (
    <main className="container mx-auto min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
}
