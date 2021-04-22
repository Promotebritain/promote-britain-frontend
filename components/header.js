import Link from 'next/link'
import { Search } from './search'

export const Header = () => {
  return (
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/countries">
              <a>Countries</a>
            </Link>
          </li>
          <li>
            <Link href="/counties">
              <a>Counties</a>
            </Link>
          </li>
          <li>
            <Link href="/companies">
              <a>Companies</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
