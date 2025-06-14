import NavigationBar from "@/components/navigation/navigation-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
