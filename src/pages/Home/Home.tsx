import React from 'react'
import Banner from './Banner/Banner';
import ListProduct from './ListProduct';
import Promotiion from './Promotiion';
import ShoesSex from './ShoesSex';
import New from './News'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <ListProduct />
      <ShoesSex />
      <Promotiion /> 
      <New />
    </div>
  )
}

export default Home