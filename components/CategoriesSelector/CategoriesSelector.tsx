import React from 'react'
import Image from 'next/image'

const CategoriesSelector: React.FC = () => {
  return (
    <section className="catagories-selector w-screen flex justify-center items-center gap-20">
      <div className="catagories-selector__cell flex flex-col">
        <Image
          src="/categories-icons/apparel.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Apparel Accessories</h3>
          </div>
          <div className="catagories-selector__cell flex flex-col">
        <Image
          src="/categories-icons/automobile.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Automobiles & Motorcycles</h3>
          </div>
          <div className="catagories-selector__cell flex flex-col">
        <Image
          src="/categories-icons/beautyIcon.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Beauty & Health</h3>
          </div>
          <div className="catagories-selector__cell flex flex-col ">
        <Image
          src="/categories-icons/cellphonesIcon.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Cellphones & Communications</h3>
          </div>
          <div className="catagories-selector__cell catagories-selector__cell--selected flex flex-col justify-strach">
        <Image
          src="/categories-icons/computers.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Computer & Office</h3>
          </div>
          <div className="catagories-selector__cell flex flex-col">
        <Image
          src="/categories-icons/consumer.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Consumer Electronics</h3>
          </div>
          <div className="catagories-selector__cell flex flex-col">
        <Image
          src="/categories-icons/educationIcon.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Education & Office</h3>
          </div>
          <div className="catagories-selector__cell flex flex-col">
        <Image
          src="/categories-icons/foodIcon.svg"
          width="18"
          height="18"
          alt="apparel Icon"
        />
        <h3 className="text-sm gray">Education & Office</h3>
      </div>
    </section>
  )
}



export default CategoriesSelector
