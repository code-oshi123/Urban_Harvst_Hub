import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const NotFound = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16 text-center animate-fade-in">
      <div className="max-w-md mx-auto">
        <div className="text-9xl mb-8">🌱</div>
        <h1 className="text-6xl font-bold text-forest dark:text-leaf mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          {t('pageNotFound')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {t('pageNotFoundDesc')}
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/')}
            className="btn-green"
          >
            {t('goHome')}
          </button>
          <button
            onClick={() => navigate(-1)}
            className="btn-green-outline"
          >
            {t('goBack')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound