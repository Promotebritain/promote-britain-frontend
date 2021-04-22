import Image from 'next/image'
import Link from 'next/link'

export const CountyItem = ({ county }) => {
  return (
    <div>
      <div>
        <h2>{county.name}</h2>
        <Link href={`/counties/${county.slug}`}>
          <a>
            <Image
              src={
                county.image
                  ? county.image.url
                  : '/images/favicon.ico'
              }
              width={170}
              height={100}
            />
          </a>
        </Link>
      </div>
    </div>
  )
}
