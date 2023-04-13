import React from 'react'
import ProductDetails from '../../../components/products/productDetails'
import Footer from '../../../components/footer/footer'
import Nav from '../../../components/nav'
import Header from '../../../components/header'

const Details = () => {
  return (
    <>
  <div className='bg-white pb-6 sm:pb-8 lg:pb-12 mx-auto max-w-screen-2xl px-4 md:px-8'>
        <Header />
        </div>
    <ProductDetails/>
    <Footer/>
    </>
  )
}

export default Details