import Image from 'next/image'
import Link from 'next/link'

export const CountryItem = ({ country }) => {
  return (
    <div>
      <div>
        <Link href={`/countries/${country.slug}`}>
          <a>
            <Image
              src={
                country.image
                  ? country.image.url
                  : '/images/vercel.svg'
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
