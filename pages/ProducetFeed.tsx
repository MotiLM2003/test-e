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
              height="500"
              width="570"
              objectFit="contain"
              alt="test"
            />
            <div className="flex gap-3 mb-3 justify-center">
              <Image
                src="/small-image.svg"
                height="90"
                width="90"
                objectFit="contain"
                alt="test"
              />
              <Image
                src="/small-image.svg"
                height="90"
                width="90"
                objectFit="contain"
                alt="test"
              />
              <Image
                src="/small-image.svg"
                height="90"
                width="90"
                objectFit="contain"
                alt="test"
              />
              <Image
                src="/small-image.svg"
                height="90"
                width="90"
                objectFit="contain"
                alt="test"
              />
              <Image
                src="/small-image.svg"
                height="90"
                width="90"
                objectFit="contain"
                alt="test"
              />
            </div>
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
            <div></div>
          </div>
        </div>
        <div className="max-w-screen-2xl mx-auto text-lg">
          <div className="flex items-center  ml-24 mt-4 gap-10 text-2xl text-gray-400 border-b-4 mb-5 w-full">
            <span className="text-black"> Product Details</span>
            <span>Product Details</span>
          </div>
          <p className=" ml-24 text-sm text-gray-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tincidunt elementum laoreet. Sed sollicitudin malesuada
            rhoncus. Nam in dictum quam, quis accumsan nunc. Donec facilisis
            blandit massa lacinia euismod. Sed dignissim tempus nisl sit amet
            pharetra. In lobortis urna sed sem lobortis tristique. Nullam
            aliquet mi sit amet augue malesuada viverra. Nam molestie in turpis
            sed vehicula. Suspendisse potenti.
          </p>
        </div>
      </section>
      <section className="footer bg-main-light  text-black mb-10 mt-5 p-10 flex flex-col  items-center">
        <h1 className="text-2xl">
          Our extension is available for your browser!
        </h1>
        <h2 className="text-sm text-gray-400 mt-2">
          {' '}
          our Adjusted Rating without having to leave Amazon
        </h2>
      </section>
      <Footer />
    </div>
  )
}

export default ProductDetails
