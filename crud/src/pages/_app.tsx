import { Header } from '../components/Header'
import { Navbar } from '../components/Navbar'
import { ProductContextProvider } from '../contexts/ProductContext'
import styles from '../styles/app.module.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
  <ProductContextProvider>
    <div className={styles.wrapper}>
      <Navbar />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  </ProductContextProvider>
  )
}

export default MyApp
