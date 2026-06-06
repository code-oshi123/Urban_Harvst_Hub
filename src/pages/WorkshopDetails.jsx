import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import workshopsData from '../data/workshops.json'
import WeatherWidget from '../components/WeatherWidget'
import { useLanguage } from '../context/LanguageContext'

const WorkshopDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  
  const workshop = workshopsData.workshops.find(w => w.id === parseInt(id))

  if (!workshop) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('workshopNotFound')}</h2>
        <button onClick={() => navigate('/workshops')} className="btn-green">
          {t('backToWorkshops')}
        </button>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }



  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button
        onClick={() => navigate('/workshops')}
        className="mb-6 text-forest dark:text-leaf hover:underline focus:outline-none focus:ring-2 focus:ring-leaf rounded"
      >
        ← {t('backToWorkshops')}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Workshop Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={workshop.image}
            alt={workshop.title}
            width="600"
            height="450"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Workshop Details */}
        <div>
          <span className="inline-block px-3 py-1 bg-forest text-white rounded-full text-sm mb-4">
            {workshop.category}
          </span>
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {workshop.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {workshop.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('date')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{formatDate(workshop.date)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('duration')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{workshop.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('instructor')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{workshop.instructor}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('location')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{workshop.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('price')}:</span>
              <span className="text-2xl font-bold text-forest dark:text-leaf">
                ${workshop.price}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('availability')}:</span>
              <span className="text-green-600">{workshop.availability} {t('spotsLeft')}</span>
            </div>
          </div>

          {/* Weather Widget for Outdoor Workshops */}
          {workshop.weather && (
            <div className="mb-6">
              <WeatherWidget location={workshop.location.split(' ')[0]} />
            </div>
          )}

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-semibold mb-3">{t('whatYoullLearn')}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ Practical hands-on experience</li>
              <li>✓ Expert guidance and Q&A</li>
              <li>✓ Take-home materials</li>
              <li>✓ Certificate of completion</li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/booking', { state: { item: workshop, type: 'workshop' } })}
            className="btn-green w-full mt-6"
          >
            {t('register')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkshopDetails