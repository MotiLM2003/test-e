import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import React from 'react'
import Image from 'next/image'

const ProductDetails = () => {
  return (
    <div>
      <Header />
      <section className="max-w-screen-2xl mx-auto">
        <span className="text-sm text-gray-300">
          Consumer Electronics &gt; Portable Audio & Video &gt; Bluetooth
          Earphones & Headphones
        </span>
        <div className="flex justify-center mt-5 gap-10">
          <div>
            <Image
              src="/ProductFeeds/main.svg"
              height="500`"
              width="500"
              objectFit="contain"
              alt="test"
            />
          </div>
          <div className="max-w-lg text-lg">
            <h1>
              New Cross-Border E6s Smart Digital Display Bluetooth Headset
              Wireless Sports Mini Headset Stereo in-Ear
            </h1>
            <h2 className="text-gray-400 line-through ">USD $1.99 - 2.99</h2>
            <h1 className="text-2xl text-main">
              <span className="text-red-500">SALE</span> USD $1.88 - $2.82
            </h1>
            <h3 className="text-sm text-gray-300 flex items-center gap-3">
              <span>Rating 5.0</span>
              <div className="flex gap-1 -mt-1">
                <Image
                  src="/star.svg"
                  height="15`"
                  width="15"
                  objectFit="contain"
                  alt="test"
                />
                <Image
                  src="/star.svg"
                  height="15`"
                  width="15"
                  objectFit="contain"
                  alt="test"
                />
                <Image
                  src="/star.svg"
                  height="15`"
                  width="15"
                  objectFit="contain"
                  alt="test"
                />
                <Image
                  src="/star.svg"
                  height="15`"
                  width="15"
                  objectFit="contain"
                  alt="test"
                />
                <Image
                  src="/star.svg"
                  height="15`"
                  width="15"
                  objectFit="contain"
                  alt="test"
                />
              </div>
            </h3>

            <div>
              <Image
                src="/fakeGraph.svg"
                height="350"
                width="389"
                objectFit="contain"
                alt="test"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ProductDetails
