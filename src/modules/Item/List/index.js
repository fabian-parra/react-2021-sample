import React from 'react'
import ProductProvider from 'providers/productProvider'
import ItemList from './ItemList'

const ItemListContainer = () => (
  <ProductProvider>
    <ItemList />
  </ProductProvider>
)

export default ItemListContainer
