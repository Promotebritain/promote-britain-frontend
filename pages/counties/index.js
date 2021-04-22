import { CountyItem } from '@/components/county-item'
import { Layout } from '@/components/layout'
import { API_URL } from '@/config/index'
import Head from 'next/head'
import Link from 'next/link'

export default function CountiesPage({ counties }) {
  return (
    <Layout>
      <Head>
        <title>Promote Britian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl ">Counties Page</h1>

      {counties.length === 0 && <h3>No counties to show</h3>}

      {counties.map(county => (
        <CountyItem key={county.id} county={county} />
      ))}

      {counties.length > 0 && (
        <Link href="/counties">
          <a>View All counties</a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/counties?_sort=name:ASC`)
  const counties = await res.json()

  return {
    props: { counties },
    revalidate: 1,
  }
}
