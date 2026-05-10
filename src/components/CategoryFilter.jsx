import { useLanguage } from '../context/LanguageContext'

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const { t } = useLanguage()

  return (
    <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Category filters">
      <button
        onClick={() => onCategoryChange('')}
        className={`px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-leaf ${
          selectedCategory === ''
            ? 'bg-forest text-white'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
        }`}
        aria-pressed={selectedCategory === ''}
      >
        {t('allCategories')}
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-leaf ${
            selectedCategory === category
              ? 'bg-forest text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter