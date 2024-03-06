import Link from 'next/link'
import s from './header.module.scss'
export const Header = () => {
  return (
    <header className={s.root}>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
