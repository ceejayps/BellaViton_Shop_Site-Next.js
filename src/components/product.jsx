import React from 'react';
import Link from "next/link";

function Product(props) {
  const { image, title, price, salePrice, id } = props;
  
  return (
    <div>
      <Link href={`/productdetail/?productid=1`} className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
        <img src={image} loading="lazy" alt={title} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        {salePrice && <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>}
      </Link>

      <div>
        <Link href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{title}</Link>

        <div className="flex items-end gap-2">
          <span className="font-bold text-gray-800 lg:text-lg">${price.toFixed(2)}</span>
          {salePrice && <span className="mb-0.5 text-red-500 line-through">${salePrice.toFixed(2)}</span>}
        </div>
      </div>
    </div>
  );
}

export default Product;
