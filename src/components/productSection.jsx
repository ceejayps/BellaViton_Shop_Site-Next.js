import React from "react";
import Product from "./product";
import Link from "next/link";


function Products(props) {
  const products = [
    {
      id: 1,
      name: "Product A",
      description: "This is the description for Product A",
      price: 9.99,
      salePrice: 7.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600",
      
    },
    {
      id: 2,
      name: "Product B",
      description: "This is the description for Product B",
      price: 19.99,
      salePrice: null,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600",
  
    },
    {
      id: 3,
      name: "Product C",
      description: "This is the description for Product C",
      price: 29.99,
      salePrice: 25.99,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&q=75&fit=crop&w=600",
  
    },
    {
      id: 4,
      name: "Product D",
      description: "This is the description for Product D",
      price: 39.99,
      salePrice: null,
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&q=75&fit=crop&w=600",
      
    },
    {
      id: 5,
      name: "Product E",
      description: "This is the description for Product E",
      price: 49.99,
      salePrice: 39.99,
      image: "https://images.unsplash.com/photo-1528476513691-07e6f563d97f?auto=format&q=75&fit=crop&w=600",
  
    },
    {
      id: 6,
      name: "Product F",
      description: "This is the description for Product F",
      price: 59.99,
      salePrice: null,
      image: "https://images.unsplash.com/photo-1612033448550-9d6f9c17f07d?auto=format&q=75&fit=crop&w=600",
  
    },
    {
      id: 7,
      name: "Product G",
      description: "This is the description for Product G",
      price: 69.99,
      salePrice: 59.99,
      image: "https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70?auto=format&q=75&fit=crop&w=600",
  
    },
    {
      id: 8,
      name: "Product H",
      description: "This is the description for Product H",
      price: 79.99,
      salePrice: null,
      image: "https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600",

    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Selected
          </h2>

          <Link
            href="#"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Show more
          </Link>
        </div>

        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              salePrice={product.salePrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
