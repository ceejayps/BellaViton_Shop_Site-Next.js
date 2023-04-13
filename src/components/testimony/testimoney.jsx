import Image from 'next/image'

const Testimonial = ({ quote, author, company, image }) => {
  return (
    <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
      <div className="text-center text-gray-600">{quote}</div>
      <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
          <Image src={image} alt="Photo of {author}" width={112} height={112} />
        </div>
        <div>
          <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">{author}</div>
          <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">{company}</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial