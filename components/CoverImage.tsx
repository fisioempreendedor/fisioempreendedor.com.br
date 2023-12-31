import { Image, Link } from '@nextui-org/react';

const CoverImage = ({ title, src, slug }: {
  title: string;
  src: string;
  slug?: string;
}) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={`shadow-sm w-full ${slug ? slug : 'hover:shadow-lg transition-shadow duration-200'}`}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/artigos/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
