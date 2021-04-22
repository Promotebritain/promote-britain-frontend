import { CountryItem } from '@/components/country-item'
import { Layout } from '@/components/layout'
import { API_URL } from '@/config/index'
import Head from 'next/head'
import Link from 'next/link'

export default function HomePage({ countries }) {
  return (
    <Layout>
      <Head>
        <title>Promote Britian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl ">Home Page</h1>

      {countries.length === 0 && <h3>No countries to show</h3>}

      {countries.map(country => (
        <CountryItem key={country.id} country={country} />
      ))}

      {countries.length > 0 && (
        <Link href="/countries">
          <a className="btn-secondary">View All countries</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/countries`)
  const countries = await res.json()

  return {
    props: { countries },
    revalidate: 1,
  }
}
