import CategoriesSelector from '@components/CategoriesSelector/CategoriesSelector'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Menu from '@components/Menu/Menu'
import React from 'react'
import Products from '@components/Products/Products'

const index: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl  mt-8 ml-8 mb-8 font-semibold">All Categories</h1>
      <CategoriesSelector />
      <section className="flex  justify-stretch">
        <Menu />
        <main className="flex-grow text-center m-5 max-w-screen-2xl mx-auto">
          <Products />
        </main>
        npm
      </section>
      <Footer />
    </>
  )
}

export default index
