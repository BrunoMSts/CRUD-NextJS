import styles from './styles.module.scss';

import { FiHome } from 'react-icons/fi'
import { FaStore } from 'react-icons/fa'

import Link from 'next/link';

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.options}>
        <Link href="/">
          <a>
            <FiHome size={20}/>
            <strong>Home</strong>
          </a>
        </Link> 
        <Link href="/products">
          <a>
            <FaStore size={20}/>
            <strong>Products</strong>
          </a>
        </Link>
      </div>
    </div>
  )
}