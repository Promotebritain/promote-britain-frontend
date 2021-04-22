import { Layout } from '@/components/layout'
import { API_URL } from '@/config/index'
import Image from 'next/image'
import Link from 'next/link'

export default function CountryPage({ country }) {
  return (
    <Layout>
      <div>
        <h1>{country.name}</h1>
        {country.image && (
          <div>
            <Image src={country.image.url} width={960} height={600} />
          </div>
        )}

        <Link href="/countries">
          <a>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/countries?slug=${slug}`)
  const countries = await res.json()

  return {
    props: {
      country: countries[0],
    },
  }
}
