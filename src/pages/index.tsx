import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hheader from '../components/header'
import Hero from '../components/hero'
import BottomHeroNav from "../components/BottomHeroNav"

import CallToAction from '../components/callToAction'
import Callection from "../components/collectionSection"
import StatsSection from '../components/statSection'
import Products from '../components/productSection'
import Footer from '../components/footer/footer'
import Testimonials from '../components/testimony/testimonialSection'




export default function Home() {
  return (
    <>
      <div className='bg-white pb-6 sm:pb-8 lg:pb-12 mx-auto max-w-screen-2xl px-4 md:px-8'>
        <Hheader />
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Hero />
          <BottomHeroNav />
        </section>
      </div>
      <CallToAction />
      <Callection />
      <StatsSection/>
      <Products/>
      <Testimonials/>
      
      <Footer/>




    </>


  )
}
