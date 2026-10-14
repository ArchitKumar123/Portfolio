
"use client";

import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NavLinks } from "@/Constant/Constant";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    // Set the correct navbar background on initial load and refresh
    handler();

    window.addEventListener("scroll", handler, { passive: true });

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-100 h-[12vh] w-full border-b transition-all duration-300 ${
        navBg
          ? "border-gray-200/40 bg-white/75 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/75"
          : "border-transparent bg-white/30 backdrop-blur-md dark:bg-gray-900/30"
      }`}
    >
      <div className="mx-auto flex h-full w-[90%] items-center justify-between xl:w-[80%]">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="hidden items-center space-x-10 lg:flex">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-700 dark:text-white dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Download CV */}
          <a
            href="/Archit_Kumar_Raul_CV.pdf"
            download="Archit_Kumar_Raul_CV.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-3 font-bold text-white ring-1 ring-indigo-300 transition-all duration-300 hover:bg-indigo-700 sm:px-5"
          >
            <Download className="h-4 w-4" />
            <span className="text-sm">Download CV</span>
          </a>

          {/* Theme Toggle */}
          <ThemeToggler />

          {/* Mobile Menu */}
          <MenuIcon
            onClick={openNav}
            className="h-8 w-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;