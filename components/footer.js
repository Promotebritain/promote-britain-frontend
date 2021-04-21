import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <p>Copyright PB</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </footer>
  )
}
