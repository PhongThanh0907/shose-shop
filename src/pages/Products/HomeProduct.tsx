import React from 'react'
import ProductsBanner from './ProductsBanner'
import SneakerList from './SneakerList'

type Props = {}

const HomeProduct = (props: Props) => {
  return (
    <div>
      <ProductsBanner />
      <SneakerList />
      </div>
  )
}

export default HomeProduct;