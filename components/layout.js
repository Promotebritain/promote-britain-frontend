import Head from 'next/head'

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
      {children}
    </div>
  )
}

Layout.defaultProps = {
  title: '',
  description: '',
  keywords: '',
}
