import React from 'react'
import Product from './Product'

const Products: React.FC = () => {
  return (
    <section className="productsFeed flex flex-col">
      <div className="grid grid-flow-row-dense gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto">
        <Product imageURL="/products/image-1.webp" color="red" />
        <Product imageURL="/products/image-2.jpg" color="green" />
        <Product imageURL="/products/image-1.webp" color="green" />
        <Product imageURL="/products/image-2.jpg" color="red" />
        <Product imageURL="/products/image-2.jpg" color="yellow" />
      </div>
    </section>
  )
}

export default Products
