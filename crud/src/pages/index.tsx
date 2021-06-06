import styles from './home.module.scss';

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>CRUD | Home</title>
        </Head>
        <h1>Welcome!</h1>
        <p>Basic implementation using CRUD context!!</p>
      </div>
  )
}
