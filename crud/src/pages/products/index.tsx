import { GetStaticProps } from 'next'
import { api } from '../../services/api'
import styles from './styles.module.scss'

import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: string;
}

type ProductProps = {
  products: Product[];
}

export default function Products({ products }: ProductProps) {

  return (
    <div className={styles.container}>
      <h1>Produtos</h1>
      <div className={styles.columns}>
        <span>id</span>
        <span>name</span>
        <span>price</span>
      </div>
      {products.map(product => {
        return (
          <div className={styles.row}>
            <span>{product.id}</span>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
          </div>
        )
      })}
      <Link href="/products/create">
        <a>
          <button className={styles.button}>Novo produto</button>
        </a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('products')

  const products = data.map(product => {
    return {
      id: product.id,
      name: product.name,
      price: product.price
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24
  }
}