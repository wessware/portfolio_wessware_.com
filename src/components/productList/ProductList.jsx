import React from 'react'
import './productList.css'
import Product from "../product/Product"
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>From Logic to Infinity. Wessware</h1>
            <p className='pl-desc'>
            This are some of the projects we have successfully completed for our clients. We have an on edge
            agile working methodology to ensure the satisfaction of our clients at all times.
            </p>
        </div>
        <div className='pl-list'>
          {products.map((item) => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
            </div>
    </div>
  )
}

export default ProductList