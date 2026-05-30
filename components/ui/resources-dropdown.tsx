"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function ResourcesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 


  const isActive = (path: string) => pathname === path;

  const isParentActive = ["/blogs", "/courses", "/podcasts"].some((path) =>
    pathname.startsWith(path)
  );

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 transition-all duration-300 focus:outline-none border-b-2 py-2 ${
          isParentActive ? "text-primary border-primary" : "hover:text-primary border-transparent hover:border-primary"
        }`}
      >
        Resources
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-4/5 left-0 pt-4 w-48 z-50">
          <div className="rounded-lg bg-white border border-gray-100 shadow-xl flex flex-col gap-1 overflow-hidden font-medium">
            
            <Link
              href="/blogs"
              className={`px-4 py-2 text-xs xl:text-sm transition-all duration-300 ${

                isActive("/blogs")
                  ? "text-primary bg-primary/5"
                  : "text-secondary hover:bg-primary/5 hover:text-primary"
              }`}
            >
              Blogs
            </Link>
            <Link
              href="/courses"
              className={`px-4 py-2 text-xs xl:text-sm transition-all duration-300 ${
                isActive("/courses")
                  ? "text-primary bg-primary/5"
                  : "text-secondary hover:bg-primary/5 hover:text-primary"
              }`}
            >
              Courses
            </Link>

            <Link
              href="/podcasts"
              className={`px-4 py-2 text-xs xl:text-sm transition-all duration-300 ${
                isActive("/podcasts")
                  ? "text-primary bg-primary/5"
                  : "text-secondary hover:bg-primary/5 hover:text-primary"
              }`}
            >
              Podcasts
            </Link>

          </div>
        </div>
      )}
    </div>
  );
}