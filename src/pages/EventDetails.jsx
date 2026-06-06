import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import eventsData from '../data/events.json'
import WeatherWidget from '../components/WeatherWidget'
import { useLanguage } from '../context/LanguageContext'

const EventDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  
  const event = eventsData.events.find(e => e.id === parseInt(id))

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">{t('eventNotFound')}</h2>
        <button onClick={() => navigate('/events')} className="btn-green">
          {t('backToEvents')}
        </button>
      </div>
    )
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const spotsLeft = event.capacity - event.registered
  const isFullyBooked = spotsLeft === 0



  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <button
        onClick={() => navigate('/events')}
        className="mb-6 text-forest dark:text-leaf hover:underline focus:outline-none focus:ring-2 focus:ring-leaf rounded"
      >
        ← {t('backToEvents')}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Event Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={event.image}
            alt={event.title}
            width="600"
            height="450"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Event Details */}
        <div>
          <span className="inline-block px-3 py-1 bg-forest text-white rounded-full text-sm mb-4">
            {event.category}
          </span>
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            {event.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            {event.description}
          </p>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('date')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{formatDate(event.date)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('location')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('price')}:</span>
              <span className="text-2xl font-bold text-forest dark:text-leaf">
                {event.free ? t('priceFree') : `$${event.price}`}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('capacity')}:</span>
              <span className={`${spotsLeft < 10 ? 'text-orange-600' : 'text-green-600'}`}>
                {spotsLeft} {t('spotsLeft')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 dark:text-gray-300">{t('registered')}:</span>
              <span className="text-gray-600 dark:text-gray-400">{event.registered}</span>
            </div>
          </div>

          {/* Weather Widget for Outdoor Events */}
          {event.weather && (
            <div className="mb-6">
              <WeatherWidget location={event.location.split(' ')[0]} />
            </div>
          )}

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-xl font-semibold mb-3">{t('eventHighlights')}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>✓ Family-friendly environment</li>
              <li>✓ All materials provided</li>
              <li>✓ Free refreshments</li>
              <li>✓ Networking opportunities</li>
            </ul>
          </div>

          <button
            onClick={() => navigate('/booking', { state: { item: event, type: 'event' } })}
            disabled={isFullyBooked}
            className={`btn-green w-full mt-6 ${isFullyBooked && 'opacity-50 cursor-not-allowed'}`}
          >
            {isFullyBooked ? t('fullyBooked') : t('register')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default EventDetails