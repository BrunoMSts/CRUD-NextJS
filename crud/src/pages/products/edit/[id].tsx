import { GetStaticPaths, GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { useProduct } from "../../../contexts/ProductContext"
import { api } from "../../../services/api"

import styles from './styles.module.scss'

type Product = {
  id: string;
  name: string;
  price: number;
}

type ProductProps = {
  product: Product;
}

export default function Edit({ product }: ProductProps) {

  const { updateProduct } = useProduct();
  
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  
  useEffect(() => {
    setName(product.name)
    setPrice(product.price)
  }, [])
  
  return (
    <div className={styles.formContainer}>
      <form action="">
        <div className={styles.labelFloat}>
          <input type="text" placeholder=" " value={name}  onChange={e => setName(e.target.value)}/>
          <label>Product name</label>
        </div>
        <div className={styles.labelFloat}>
          <input type="number" placeholder=" " value={price} onChange={e => setPrice(+e.target.value)}/>
          <label>Price</label>
        </div>
        <button type="button" onClick={() => updateProduct(product.id, name, price)}>
          Update
        </button>
      </form>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('products')

  const paths = data.map(product => {
    return {
      params: {
        id: product.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params

  const { data } = await api.get(`/products/${id}`)

  const product = {
    id: data.id,
    name: data.name,
    price: data.price,
  }

  return {
    props: {
      product
    }
  }
}