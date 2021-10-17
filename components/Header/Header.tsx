import React from 'react'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className="header pl-10 ">
      <div className="header__content flex items-stretch justify-between  pb-2">
        <div>
          <Image
            src="/logo.svg"
            alt="SafeDeal logo"
            layout="fixed"
            width="105"
            height="32"
          />
        </div>

        <div className="hidden ">
          <input
            type="text"
            className="rounded outline-none border border-gray-300 text-base  w-full mt-1 mr-10 ml-10 p-2"
            placeholder="Search for products..."
          />
        </div>
        <div className="header__toolbar flex items-center text-xs align-items-center text">
          <div className="header__toolbar--selected flex items-center gap-1 text-xs bg-main">
            <Image src="/chrome.svg" width="12" height="12" alt="chrome Icon" />
            Install SafeDeal
          </div>
          <div className="flex items-center">
            ShowCase
            <Image
              src="/down-arrow.svg"
              width="14"
              height="14"
              alt="flag icon"
            />
          </div>
          <div className="flex items-center md:gap-1">
            <Image
              src="/flag-en-us.svg"
              width="12"
              height="12"
              alt="flag icon"
            />
            <div>USD</div>
            <Image
              src="/down-arrow.svg"
              width="14"
              height="14"
              alt="flag icon"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
