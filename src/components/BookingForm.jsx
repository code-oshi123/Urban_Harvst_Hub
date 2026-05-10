import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const BookingForm = ({ item, type, onSubmit, onClose }) => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSubmit(formData)
    setIsSubmitting(false)
  }

  const itemName = item?.title || item?.name

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {t('book') || 'Book'} {type}: {itemName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-leaf rounded"
            aria-label={t('close')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              {t('name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              {t('email')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent"
              aria-required="true"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              {t('phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent"
            />
          </div>

          {type !== 'product' && (
            <div>
              <label htmlFor="guests" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                {t('numberOfGuests') || 'Number of Guests'} *
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="10"
                required
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent"
                aria-required="true"
              />
            </div>
          )}

          <div>
            <label htmlFor="specialRequests" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
              {t('specialRequests') || 'Special Requests'}
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="3"
              value={formData.specialRequests}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700
                       focus:outline-none focus:ring-2 focus:ring-leaf"
            >
              {t('close')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 btn-green disabled:opacity-50"
            >
              {isSubmitting ? t('loading') : t('submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm