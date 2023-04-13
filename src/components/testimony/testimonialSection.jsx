import React from "react"
import Testimonial from "./testimoney"

const Testimonials =() => {
    const testimonials = [
      {
        quote: '“This is a section of some simple filler text, also known as placeholder text.”',
        author: 'John McCulling',
        company: 'CEO / Datadrift',
        image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112'
      },
      {
        quote: '“This is a section of some simple filler text, also known as placeholder text.”',
        author: 'Kate Berg',
        company: 'CFO / Dashdash',
        image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112'
      },
      {
        quote: '“This is a section of some simple filler text, also known as placeholder text.”',
        author: 'Greg Jackson',
        company: 'CTO / Uptime',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500'
      }
    ]
  
    return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>
          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  export default Testimonials