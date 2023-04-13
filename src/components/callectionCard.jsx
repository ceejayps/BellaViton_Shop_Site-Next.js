import Link from "next/link";

const CollectionCard = (props) => {
  const { title, captionType, altText, image } = props;
  return (
    <div>
      <Link href={`/products/Collections/${captionType}`} className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
        <img
          src={image}
          loading="lazy"
          alt={altText}
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-col">
        <span className="text-gray-500">{captionType}</span>
        <Link
          href={`/products/Collections/${captionType}`}
          className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
