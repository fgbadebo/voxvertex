"use client";

import NavBar from "@/components/features/layout/NavBar";
import Footer from "@/components/features/layout/Footer";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const noFooterPages = ["/login", "/register"];
  const hideFooter = noFooterPages.includes(pathname);

  return (
    <FollowerPointerCard>
      <NavBar />
      {children}
      {!hideFooter && <Footer />}
    </FollowerPointerCard>
  );
}
