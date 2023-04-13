import React from 'react'

const Hero = () => {
  return (
    <div className="mb-8 flex flex-wrap justify-between md:mb-16">
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
        <h1 className="text-black mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
            Find your<br />style online
        </h1>

        <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            This is a section of some simple filler text, also known as
            placeholder text. It shares characteristics of real text.
        </p>
    </div>

    <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div
            className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
            <img src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy" alt="Photo by Kaung Htet" className="h-full w-full object-cover object-center" />
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy" alt="Photo by Manny Moreno"
                className="h-full w-full object-cover object-center" />
        </div>
    </div>
</div>
  )
}

export default Hero