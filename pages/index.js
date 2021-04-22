import { Layout } from '@/components/layout'
import Head from 'next/head'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Promote Britian</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl ">Home Page</h1>
    </Layout>
  )
}
