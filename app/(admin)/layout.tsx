import AdminNavigationBar from "@/components/navigation/admin-navigation-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNavigationBar />
      <main className="container mx-auto px-3 md:px-0 py-10">{children}</main>
    </>
  );
}
