import styles from './styles.module.scss';
import { FiHome } from 'react-icons/fi';

import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.png" alt="Logo" />
      <Link href='/'>
        <a><FiHome size={20}/><strong>Home</strong></a>
      </Link>
    </header>
  )
}