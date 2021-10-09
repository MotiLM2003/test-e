import React from 'react'
import Image from 'next/image'

interface Props {
  imageURL: string
}

const Product: React.FC<Props> = ({ imageURL }) => {
  return (
    <div className="relative flex flex-col p-3  bg-white z-30 border rounded">
      <Image
        src={imageURL}
        height="200"
        width="200"
        objectFit="contain"
        alt="test"
      />

      <div className="text-sm mt-3 text-gray-400">
        Stress-Toy Fruit-Jelly Gifts Stuff Produ...
      </div>
    </div>
  )
}

export default Product
