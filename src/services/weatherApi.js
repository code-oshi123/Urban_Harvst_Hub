import axios from 'axios';

// Note: You'll need to sign up for a free API key at OpenWeatherMap
const API_KEY = '6ff85120b37481d624a6fd105ca5ce0b' // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const fetchWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric'
      }
    })
    return {
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
      city: response.data.name
    }
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch weather')
    }
    throw new Error('Network error occurred')
  }
}

export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/w/${iconCode}.png`
}