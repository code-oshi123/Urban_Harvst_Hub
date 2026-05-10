import { useState, useMemo } from 'react'
import WorkshopCard from '../components/WorkshopCard'
import CategoryFilter from '../components/CategoryFilter'
import SearchBar from '../components/SearchBar'
import workshopsData from '../data/workshops.json'
import { useLanguage } from '../context/LanguageContext'

const Workshops = () => {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('')

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(workshopsData.workshops.map(w => w.category))]
  }, [])

  // Filter and search workshops
  const filteredWorkshops = useMemo(() => {
    let filtered = workshopsData.workshops

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(workshop =>
        workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workshop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(workshop => workshop.category === selectedCategory)
    }

    // Apply sorting
    if (sortBy === 'date-asc') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
    } else if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        {t('educationalWorkshops')}
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        {t('workshopsDesc')}
      </p>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
          <SearchBar onSearch={setSearchTerm} placeholder={t('search')} />
          
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-leaf"
              aria-label="Sort workshops"
            >
              <option value="">{t('sortBy')}</option>
              <option value="date-asc">{t('dateSoonest')}</option>
              <option value="price-asc">{t('priceLowHigh')}</option>
              <option value="price-desc">{t('priceHighLow')}</option>
            </select>
          </div>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Results Count */}
      <div className="mb-4 text-gray-600 dark:text-gray-400">
        {t('found')} {filteredWorkshops.length} {t('workshops').toLowerCase()}
      </div>

      {/* Workshops Grid */}
      {filteredWorkshops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map(workshop => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            {t('noResults')}
          </p>
          <button
            onClick={() => {
              setSearchTerm('')
              setSelectedCategory('')
              setSortBy('')
            }}
            className="btn-green mt-4"
          >
            {t('clearFilters')}
          </button>
        </div>
      )}
    </div>
  )
}

export default Workshops