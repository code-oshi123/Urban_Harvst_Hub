import { useState, useEffect } from 'react'
import { fetchWeatherByCity } from '../services/weatherApi'

export const useWeather = (city) => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!city) return

    const getWeather = async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchWeatherByCity(city)
        setWeather(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getWeather()
  }, [city])

  return { weather, loading, error }
}