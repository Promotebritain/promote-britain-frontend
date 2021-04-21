import Head from 'next/head'
import { Footer } from './footer'
import { Header } from './header'

export const Layout = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: '',
  description: '',
  keywords: '',
}
