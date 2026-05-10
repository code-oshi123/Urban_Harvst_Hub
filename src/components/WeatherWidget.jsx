import { useWeather } from '../hooks/useWeather'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import { getWeatherIconUrl } from '../services/weatherApi'
import { useLanguage } from '../context/LanguageContext'

const WeatherWidget = ({ location }) => {
  const { weather, loading, error } = useWeather(location)
  const { t } = useLanguage()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={`${t('unableToLoadWeather') || 'Unable to load weather for'} ${location}`} />
  }

  if (!weather) {
    return null
  }

  return (
    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
        <span>🌤️</span> {t('weatherInfo')} - {weather.city}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={getWeatherIconUrl(weather.icon)} 
            alt={weather.description}
            className="w-12 h-12"
          />
          <div>
            <div className="text-2xl font-bold">{Math.round(weather.temp)}°C</div>
            <div className="text-sm capitalize">{weather.description}</div>
          </div>
        </div>
        <div className="text-sm">
          <div>💧 {weather.humidity}%</div>
          <div>💨 {Math.round(weather.windSpeed)} km/h</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget  