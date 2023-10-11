import React from 'react'
import ProductCard from './ProductCard'

const ProductCardsHolder = () => {
  return (
    <div>
      <div style={{display: 'flex',flexWrap: 'wrap', marginLeft: '10%', marginRight: '10%'}}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default ProductCardsHolder
