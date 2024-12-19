"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import Close from "@/assets/close.svg";
import Arrow from "@/assets/arrow-up.svg";
import { menu } from "@/utils/constants";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="z-50 px-6 py-2 shadow-bottom flex items-center justify-between lg:px-12 lg:py-4 md:px-12 md:py-4">
      <div className="flex items-center gap-3">
        <Image src={Logo} alt="app logo" width={32} height={32} />
        <h1 className="font-logo text-blue-500 text-xl lg:text-3xl">ShopIT</h1>
      </div>

      {/* Mobile */}
      <div
        className={`fixed inset-0 bg-opacity-50 z-50 md:hidden transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="bg-white w-full rounded-l-xl h-full p-8 overflow-y-auto flex flex-col items-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={Close}
            alt="close menu"
            width={24}
            height={24}
            className="absolute right-4 top-4"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="font-menu font-medium text-sm flex flex-col gap-4 mt-16 w-full">
            {menu.map(({ id, label, nav }) => (
              <div
                key={id}
                className="flex items-center justify-between w-full hover-menu"
              >
                <Link href={nav} className="text-lg font-medium">
                  {label}
                </Link>
                <Image src={Arrow} alt="navigate" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop */}
      <ul className="hidden md:flex lg:flex items-center gap-3 font-menu font-medium text-sm">
        {menu.map(({ id, label, nav }) => (
          <li key={id}>
            <Link href={nav} className="hover-menu">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="md:hidden lg:hidden font-menu hover-menu text-sm font-normal"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        MENU
      </button>
    </nav>
  );
};

export default NavBar;
