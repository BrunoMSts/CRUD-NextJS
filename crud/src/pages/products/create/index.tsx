import styles from './styles.module.scss'

import { useProduct } from '../../../contexts/ProductContext'
import { useState } from 'react';

import Head from 'next/head'

export default function Create() {

  const { createProduct } = useProduct()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

  return (
    <div className={styles.formContainer}>
      <Head>
          <title>CRUD | New product</title>
      </Head>
      <form action="">
        <div className={styles.labelFloat}>
          <input type="text" placeholder=" " onChange={e => setName(e.target.value)}/>
          <label>Product name</label>
        </div>
        <div className={styles.labelFloat}>
          <input type="number" placeholder=" " onChange={e => setPrice(+e.target.value)}/>
          <label>Price</label>
        </div>
        <button type="button" onClick={() => createProduct(name, price)}>
          Register
        </button>
      </form>
    </div>
  )
}