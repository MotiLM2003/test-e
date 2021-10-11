import React from 'react'
import Image from 'next/image'

interface Props {
  imageURL: string
  color: string
}

const Product: React.FC<Props> = ({ imageURL, color }) => {
  const setBorderColor = () => {
    switch (color) {
      case 'red': {
        return 'border-red-500'
      }
      case 'yellow': {
        return 'border-yellow-400'
      }
      case 'green': {
        return 'border-green-500'
      }
    }
  }

  const getShield = () => {
    switch (color) {
      case 'red': {
        return 'redshield'
      }
      case 'yellow': {
        return 'yellowshild'
      }
      case 'green': {
        return 'greenshiled'
      }
    }
  }

  return (
    <div
      className={`relative flex flex-col p-3  bg-white z-30 border-2 rounded ${setBorderColor()} `}
    >
      <Image
        src={imageURL}
        height="200"
        width="200"
        objectFit="contain"
        alt="test"
      />

      <div className="text-sm mt-3 text-gray-400 text-left">
        Stress-Toy Fruit-Jelly Gifts Stuff Produ...
      </div>
      <div className="text-left mt-1 flex items-center gap-1 ">
        <div className="mt-1"> USD $1.99 - $2.99</div>
        <Image
          src={`/assets/${getShield()}.svg`}
          height="20"
          width="20"
          alt="test"
          className="mt-22"
        />
      </div>
      <div className="text-left mt-1 text-xs text-gray-400">
        <span className="text-red-500">SALE</span> USD $1.88 - $2.82
      </div>
      <div className="text-left mt-1 text-xs text-gray-400">6 solid</div>
    </div>
  )
}

export default Product
