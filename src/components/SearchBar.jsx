import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SearchBar = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState('')
  const { t } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    if (newQuery === '') {
      onSearch('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" role="search">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder || t('search')}
          className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent"
          aria-label={t('search')}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 
                   text-gray-500 hover:text-forest focus:outline-none focus:ring-2 focus:ring-leaf rounded"
          aria-label={t('search')}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar