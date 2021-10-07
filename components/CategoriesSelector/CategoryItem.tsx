import React from 'react'
import Image from 'next/image'

interface Props {
  text: string
  imageURL: string
  itemId: number
  selectedCatagory: number
  setSelectedCategory: (id: number) => void
}

const CategoryItem: React.FC<Props> = ({
  text,
  imageURL,
  selectedCatagory,
  itemId,
  setSelectedCategory,
}) => {
  const setCategory = () => {
    setSelectedCategory(itemId)
  }

  return (
    <div
      onClick={setCategory}
      className={`catagories-selector__cell flex flex-col items-center justify-center gap-3 ${
        selectedCatagory === itemId && ' catagories-selector__cell--selected'
      }`}
    >
      <Image src={imageURL} width="18" height="18" alt={text} />
      <h3 className="text-sm gray">{text}</h3>
    </div>
  )
}

export default CategoryItem
