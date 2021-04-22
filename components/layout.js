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
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Content goes here */}
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </main>
  )
}

Layout.defaultProps = {
  title: '',
  description: '',
  keywords: '',
}
