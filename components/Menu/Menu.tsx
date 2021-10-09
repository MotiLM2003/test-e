import React from 'react'
import Image from 'next/image'

const Menu: React.FC = () => {
  return (
    <aside className="p-5 md:text-sm">
      <section className="flex flex-col gap-5">
        <div>
          <h3 className="font-semibold">Price</h3>
          <div className="mt-2">
            <input type="range" min="1" max="100" value="50" id="slider" />
            <div className="w-full  flex justify-between items-center">
              <span>0</span>
              <span>100</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4">Rating Safedeal</h3>
          <ul className="text-gray-400 mt-2">
            <li>High (80% - 100%)</li>
            <li className="text-main">Middle (50% - 79%)</li>
            <li>Low (0% - 49%)</li>
          </ul>
        </div>
      </section>
      <section className="mt-10">
        <ul className="text-gray-400 mt-2">
          <li className="text-main font-extrabold text-base flex items-center">
            <span>By orders</span>
            <Image
              src="/down-arrow.svg"
              width="20"
              height="20"
              alt="flag icon"
            />
          </li>
          <li>By price</li>
          <li>By reviews</li>
          <li>By price</li>
          <li>By Safedeal rating</li>
        </ul>
      </section>
    </aside>
  )
}

export default Menu
