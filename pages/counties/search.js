import { CountyItem } from '@/components/county-item'
import { Layout } from '@/components/layout'
import { API_URL } from '@/config/index'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import qs from 'qs'

export default function SearchPage({ counties }) {
  const router = useRouter()

  return (
    <Layout>
      <Head>
        <title>Promote Britian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl ">
        Search Results for {router.query.term}
      </h1>

      {counties.length === 0 && <h3>No counties to show</h3>}

      {counties.map(country => (
        <CountyItem key={country.id} county={country} />
      ))}

      {counties.length > 0 && (
        <Link href="/counties">
          <a className="btn-secondary">View All counties</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ name_contains: term }],
    },
  })

  const res = await fetch(`${API_URL}/counties?${query}`)
  const counties = await res.json()

  return {
    props: { counties },
  }
}
