import styles from './home.module.scss';

import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
          <title>CRUD | Home</title>
        </Head>
        <h1>Bem vindo!</h1>
        <p>Implementação básica utilizando o contexto CRUD!</p>
      </div>
  )
}
