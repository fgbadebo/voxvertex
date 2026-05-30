"use client";

import StaggeredMenu from "@/components/StaggeredMenu";
import ResourcesDropdown from "@/components/ui/resources-dropdown";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mobileNavLinks, mobileNavAuth } from '@/constants/index'

export default function NavBar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header>
      <nav className="hidden lg:block fixed top-0 z-30 w-full bg-background shadow-lg">
        <div className="mx-auto max-w-7xl flex justify-between items-center px-12 xl:px-4 py-4 xl:py-6">
          <Link href={"/"}>
            <div className="relative w-8 xl:w-10 h-10 xl:h-12">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                fill
                className="object-cover hover:opacity-70 transition-all duration-300"
                sizes="25vw"
                quality={100}
              />
            </div>
          </Link>

          <div className="flex items-center gap-8 font-medium text-sm xl:text-base text-black">
            <Link
              href={"/about-us"}
              className={`py-1 border-b-2 transition-all duration-300 ${
                isActive("/about-us")
                  ? "border-primary text-primary"
                  : "border-transparent hover:border-primary hover:text-primary" 
              }`}
            >
              About Us
            </Link>

            <Link
              href={"/contact-us"}
              className={`py-1 border-b-2 transition-all duration-300 ${
                isActive("/contact-us")
                  ? "border-primary text-primary"
                  : "border-transparent hover:border-primary hover:text-primary" 
              }`}
            >
              Contact Us
            </Link>

            <ResourcesDropdown />
          </div>

          <div className="flex gap-4 font-medium  items-center">
            <Link href={"/login"}>
              <button className="lg:px-6 xl:px-8 lg:py-2 xl:py-3 border border-primary rounded-full bg-transparent text-sm xl:text-base text-primary hover:bg-primary hover:text-white transition-all duration-300">
                Login
              </button>
            </Link>

            <Link href={"/register"}>
              <button className="lg:px-4 xl:px-6 lg:py-2 xl:py-3 border border-primary rounded-full bg-primary text-sm xl:text-base text-white hover:bg-transparent hover:text-primary transition-all duration-300">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav
        className="absolute lg:hidden"
        style={{ height: "100vh", background: "#1a1a1a" }}
      >
        <StaggeredMenu
          isFixed
          position="right"
          accentColor="#2888b2"
          displaySocials
          items={mobileNavLinks}
          socialItems={mobileNavAuth}
        />
      </nav>
    </header>
  );
}
