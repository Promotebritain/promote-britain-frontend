import { Layout } from '@/components/layout'
import { API_URL } from '@/config/index'
import Image from 'next/image'
import Link from 'next/link'

export default function CountyPage({ county }) {
  return (
    <Layout>
      <div>
        <h1>{county.name}</h1>
        {county.image && (
          <div>
            <Image src={county.image.url} width={960} height={600} />
          </div>
        )}

        <Link href="/counties">
          <a>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/counties?slug=${slug}`)
  const counties = await res.json()

  return {
    props: {
      county: counties[0],
    },
  }
}
