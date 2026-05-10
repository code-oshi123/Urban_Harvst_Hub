import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import productsData from '../data/products.json'
import BookingForm from '../components/BookingForm'
import { useLanguage } from '../context/LanguageContext'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [showBooking, setShowBooking] = useState(false)
  
  const product = productsData.products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('productNotFound')}</h2>
        <button onClick={() => navigate('/products')} className="btn-green">
          {t('backToProducts')}
        </button>
      </div>
    )
  }

  const handleBooking = (formData) => {
    console.log('Booking submitted:', { product, formData })
    alert(`Thank you for your interest in ${product.name}! We'll contact you soon.`)
    setShowBooking(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button
        onClick={() => navigate('/products')}
        className="mb-6 text-forest dark:text-leaf hover:underline focus:outline-none focus:ring-2 focus:ring-leaf rounded"
      >
        ← {t('backToProducts')}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <span className="inline-block px-3 py-1 bg-forest text-white rounded-full text-sm mb-4">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {product.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {product.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('price')}:</span>
              <span className="text-3xl font-bold text-forest dark:text-leaf">
                ${product.price}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('availability')}:</span>
              <span className={product.availability ? 'text-green-600' : 'text-red-600'}>
                {product.availability ? t('inStock') : t('outOfStock')}
              </span>
            </div>

            {product.sustainability && (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300">{t('sustainability')}:</span>
                <span className="text-gray-600 dark:text-gray-400">{product.sustainability}</span>
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-semibold mb-3">{t('productDetails')}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ Eco-friendly materials</li>
              <li>✓ Sustainable packaging</li>
              <li>✓ Carbon-neutral shipping</li>
              <li>✓ 30-day return policy</li>
            </ul>
          </div>

          <button
            onClick={() => setShowBooking(true)}
            disabled={!product.availability}
            className={`btn-green w-full mt-6 ${!product.availability && 'opacity-50 cursor-not-allowed'}`}
          >
            {t('bookNow')}
          </button>
        </div>
      </div>

      {showBooking && (
        <BookingForm
          item={product}
          type="product"
          onSubmit={handleBooking}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  )
}

export default ProductDetails