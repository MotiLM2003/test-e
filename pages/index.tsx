import CategoriesSelector from '@components/CategoriesSelector/CategoriesSelector'
import Header from '@components/Header/Header'
import React from 'react'

const index: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="text-4xl  mt-8 ml-8 mb-8 font-semibold">All Categories</h1>
      <CategoriesSelector />
      <section className="flex  justify-stretch">
        <aside>menu</aside>
        <main className="flex-grow text-center">main</main>
        <aside className="bg-gray-300">menu</aside>
      </section>
    </>
  )
}

export default index
