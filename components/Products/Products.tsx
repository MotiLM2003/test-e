import React from 'react'
import Product from './Product'

const Products: React.FC = () => {
  return (
    <div className="grid grid-flow-row-dense gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
      <Product imageURL="/products/image-1.webp" />
      <Product imageURL="/products/image-2.jpg" />
      <Product imageURL="/products/image-1.webp" />
      <Product imageURL="/products/image-2.jpg" />
    </div>
  )
}

export default Products
