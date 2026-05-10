import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const WorkshopCard = ({ workshop }) => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleClick = () => {
    navigate(`/workshops/${workshop.id}`)
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`${t('viewDetailsFor') || 'View details for'} ${workshop.title}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={workshop.image} 
          alt={workshop.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        {workshop.weather && (
          <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            🌤️ {t('outdoorEvent')}
          </span>
        )}
      </div>
      <div className="p-4">
        <span className="text-sm text-forest dark:text-leaf font-semibold">
          {workshop.category}
        </span>
        <h3 className="text-lg font-bold mt-1 mb-2 text-gray-800 dark:text-white">
          {workshop.title}
        </h3>
        <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-3">
          <p>📅 {formatDate(workshop.date)}</p>
          <p>⏱️ {workshop.duration}</p>
          <p>👨‍🏫 {workshop.instructor}</p>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-forest dark:text-leaf">
            ${workshop.price}
          </span>
          <button className="btn-green text-sm">
            {t('bookNow')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default WorkshopCard