import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden gap-12 lg:flex">
      <Link href="/" className="text-md font-light text-indigo-500">
       Home
      </Link>
      <Link href="/features" className="text-md font-light text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
       Features
      </Link>
      <Link href="/pricing" className="text-md font-light text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
       Pricing
      </Link>
      <Link href="/about" className="text-md font-light text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">
        About
      </Link>
    </nav>
  );
};

export default Nav;
