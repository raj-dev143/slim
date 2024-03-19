import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { FaAlignJustify } from "react-icons/fa";
const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/#aboutus",
  },
  {
    name: "Testimonial",
    href: "/#testimonial",
  },
  {
    name: "Contact Us",
    href: "/#contact",
  },
];
const Header = () => {
  return (
    <header className="shadow-md bg-white p-2 sticky top-0 w-full z-10">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={"/slim24pro.svg"}
                alt="Slim"
                width={188}
                height={68}
              />
            </Link>
          </div>
          <div className="hidden md:flex gap-12 items-center">
            {navigation.map((item) => (
              <Link
                className="text-[18px] tracking-wide px-4 py-1 hover:bg-[#406213] hover:text-white"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={"/#ordernow"}
              className="px-4 py-1 bg-[#406213] text-white uppercase buyNow hover:bg-orange-700 transition-all text-[18px] tracking-wide"
            >
              Buy Now
            </Link>
          </div>
          <Link href={"/"} className="md:hidden">
            <button
              data-collapse-toggle="navbar-multi-level"
              type="button"
              id="menu"
              aria-label="menu"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
