import {CategoryCard, CategoryCard1} from './CategoryCard'

const Categories = () => {
  return (
    <>
      <h3 className="text-heading-3 text-gray-100 font-label font-bold pt-14 mb-8">
        Course Category
      </h3>

      <div className="flex justify-between">
        {Array.from({ length: 6 }).map((_, index) => (
          index % 2 === 0 ? <CategoryCard key={index} /> : <CategoryCard1 key={index} />
        ))}
      </div>
    </>
  )
}

export default Categories
