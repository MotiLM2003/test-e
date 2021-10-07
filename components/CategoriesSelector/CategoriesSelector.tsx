import React, { useState } from 'react'
import Image from 'next/image'
import CategoryItem from './CategoryItem'

const CategoriesSelector: React.FC = () => {
  const [selectedCatagory, setSelectedCategory] = useState(0);


  return (
    <section className="catagories-selector w-screen flex justify-center items-center gap-20">
      <CategoryItem
        text="Apparel Accessories"
        imageURL="/categories-icons/apparel.svg"
        itemId={0}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />

      <CategoryItem
        text="Automobiles & Motorcycles"
        imageURL="/categories-icons/automobile.svg"
        itemId={1}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryItem
        text="Beauty & Health"
        imageURL="/categories-icons/beautyIcon.svg"
        itemId={2}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryItem
        text="Cellphones & Communications"
        imageURL="/categories-icons/cellphonesIcon.svg"
        itemId={3}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryItem
        text="Cellphones & Communications"
        imageURL="/categories-icons/cellphonesIcon.svg"
        itemId={4}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryItem
        text="Computer & Office"
        imageURL="/categories-icons/computersIcon.svg"
        itemId={5}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />
      <CategoryItem
        text="Consumer Electronics"
        imageURL="/categories-icons/consumer.svg"
        itemId={6}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />

      <CategoryItem
        text="Education & Office"
        imageURL="/categories-icons/educationIcon.svg"
        itemId={7}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />

      <CategoryItem
        text="Education & Office"
        imageURL="/categories-icons/foodIcon.svg"
        itemId={8}
        selectedCatagory={selectedCatagory}
        setSelectedCategory={setSelectedCategory}
      />
    </section>
  )
}

export default CategoriesSelector
