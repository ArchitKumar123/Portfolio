
"use client";

import { NavLinks } from "@/Constant/Constant";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const sidebarOpenClose = showNav
    ? "translate-x-0"
    : "-translate-x-full";

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeNav}
        aria-hidden="true"
        className={`fixed inset-0 z-1002 bg-black/60 transition-opacity duration-300 ${
          showNav
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Navigation */}
      <nav
        aria-label="Mobile navigation"
        aria-hidden={!showNav}
        className={`fixed left-0 top-0 z-1050 flex h-dvh w-[80%] flex-col justify-center space-y-6 overflow-y-auto bg-blue-600 text-white shadow-xl transition-transform duration-300 sm:w-[60%] ${sidebarOpenClose}`}
      >
        {/* Navigation Links */}
        {NavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            tabIndex={showNav ? 0 : -1}
            onClick={closeNav}
            className="ml-8 w-fit border-b border-white/70 pb-1 text-xl text-white transition-colors hover:border-white hover:text-blue-100 sm:ml-12 sm:text-2xl"
          >
            {link.name}
          </Link>
        ))}

        {/* Close Button */}
        <button
          type="button"
          onClick={closeNav}
          aria-label="Close navigation"
          className="absolute right-5 top-5 rounded-md p-2 transition-colors hover:bg-white/10"
        >
          <X className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </nav>
    </>
  );
};

export default MobileNav;