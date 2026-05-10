import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const EventCard = ({ event }) => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleClick = () => {
    navigate(`/events/${event.id}`)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const spotsLeft = event.capacity - event.registered

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`View details for ${event.title}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        {event.free && (
          <span className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Free
          </span>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-forest dark:text-leaf font-semibold">
          {event.category}
        </span>
        <h3 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">
          {event.title}
        </h3>
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-3">
          <p>📅 {formatDate(event.date)}</p>
          <p>📍 {event.location}</p>
          <p>👥 {spotsLeft} spots left</p>
        </div>
        <button className="btn-green w-full text-sm">
          {t('register')}
        </button>
      </div>
    </div>
  )
}

export default EventCard