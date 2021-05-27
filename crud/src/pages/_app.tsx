import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <div className={styles.wrapper}>
    <Navbar />
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
  </div>
  )
}

export default MyApp
