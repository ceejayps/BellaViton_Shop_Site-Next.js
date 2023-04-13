import React from 'react'
import Link from "next/link";

const Logo = () => {
  return (
    <Link
    href={"/"}
    
     
      className="text-black inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
      aria-label="logo"
    >
      <svg
        width="95"
        height="94"
        viewBox="0 0 95 94"
        className="h-auto w-6 text-indigo-500"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M96 0V47L48 94H0V47L48 0H96Z" />
      </svg>

      BellaViton
    
   </Link>
  )
}

export default Logo