import React from 'react'
import Link from 'next/link'

const BottomHeroNavButtons = () => {
  return (
    <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
    <Link href={`/products/Collections/men`}
        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Men</Link> 
    <Link href={`/products/Collections/Women`}
        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Women</Link> 
    <Link href={`/products/Collections/Teens`}
        className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Teens</Link> 
</div>
  )
}

export default BottomHeroNavButtons