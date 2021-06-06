import { GetStaticProps } from 'next'
import { api } from '../../services/api'
import styles from './styles.module.scss'

import { FiEdit, FiXCircle } from 'react-icons/fi';

import Link from 'next/link';
import { useProduct } from '../../contexts/ProductContext';
import { useState } from 'react';

import Head from 'next/head';

type Product = {
  id: string;
  name: string;
  price: number;
}

type ProductProps = {
  products: Product[];
}

export default function Products({ products }: ProductProps) {

  const { deleteProduct } = useProduct()
  const [productsList, setProductsList] = useState([...products]);

  function handleDelete(index) {
    deleteProduct(productsList[index].id)
    productsList.splice(index, 1)
    setProductsList([...productsList])
  };

  return (
    <div className={styles.container}>
      <Head>
          <title>CRUD | Products</title>
      </Head>
      <h1>Produtos</h1>
      <div className={styles.columns}>
        <span>id</span>
        <span>name</span>
        <span>price</span>
      </div>
      {productsList.map((product, index) => {
        return (
          <div key={product.id} className={styles.rowContainer}>
            <div className={styles.row}>
              <span>{product.id}</span>
              <h1>{product.name}</h1>
              <span>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className={styles.options}>
              <Link href={`/products/edit/${product.id}`}>
                <button className={styles.edit}>
                  <FiEdit size={20}/>
                </button>
              </Link>
              <button className={styles.delete} onClick={() => handleDelete(index)}>
                <FiXCircle size={20}/>
              </button>
            </div>
          </div>
        )
      })}
      <Link href="/products/create">
          <button className={styles.button}>Novo produto</button>
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