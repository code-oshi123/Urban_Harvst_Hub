import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`${t('viewDetailsFor') || 'View details for'} ${product.name}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        {!product.availability && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            {t('outOfStock')}
          </span>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-forest dark:text-leaf font-semibold">
          {product.category}
        </span>
        <h3 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">
          {product.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-forest dark:text-leaf">
            ${product.price}
          </span>
          <button 
            className={`btn-green text-sm ${!product.availability && 'opacity-50 cursor-not-allowed'}`}
            disabled={!product.availability}
            onClick={(e) => {
              e.stopPropagation()
              if (product.availability) handleClick()
            }}
          >
            {t('learnMore')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard