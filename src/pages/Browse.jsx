import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import CategoryFilter from '../components/CategoryFilter'
import ItemCard from '../components/ItemCard'

export default function Browse() {
  const { filteredItems, setActiveCategory } = useApp()
  const [searchParams] = useSearchParams()

  // Sync category from URL query param (e.g. /browse?category=food)
  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2">Browse</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Filter by category to find what matters to you.
      </p>

      <CategoryFilter />

      {filteredItems.length === 0 ? (
        <p role="status" className="text-center text-gray-400 mt-12">
          No items found in this category.
        </p>
      ) : (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Items list"
        >
          {filteredItems.map(item => (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}