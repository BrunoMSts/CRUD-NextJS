import { createContext, ReactNode, useContext, useState } from "react"
import { api } from "../services/api";

import { useRouter } from 'next/router';

type Product = {
  id: string;
  name: string;
  price: number;
}

type ProductContextData = {
  createProduct: (name, price) => void;
  updateProduct: (id, name, price) => void;
}

type ProductContextProviderProps = {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductContextProvider({ children }: ProductContextProviderProps) {

  const router = useRouter()

  async function createProduct(name, price) {
    const product = { name, price }
    await api.post('products', product);
    router.push('/products')
  }

  async function updateProduct(id, name, price) {
    
    const updatedProduct = {
      name,
      price
    }
    await api.put(`/products/${id}`, updatedProduct)
    router.push('/products')
  }

  return (
    <ProductContext.Provider value={{
      createProduct,
      updateProduct,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => {
  return useContext(ProductContext);
}