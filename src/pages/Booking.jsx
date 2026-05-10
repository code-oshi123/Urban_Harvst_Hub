import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import { useLanguage } from '../context/LanguageContext'

const Booking = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [bookingHistory, setBookingHistory] = useState([])

  // In a real app, this would come from state or API
  const mockItem = location.state?.item || {
    id: 1,
    name: "Sample Item",
    title: "Sample Workshop"
  }
  const mockType = location.state?.type || 'product'

  const handleBooking = (formData) => {
    const newBooking = {
      id: Date.now(),
      item: mockItem,
      type: mockType,
      user: formData,
      date: new Date().toISOString()
    }
    setBookingHistory([newBooking, ...bookingHistory])
    alert('Booking confirmed! Check your email for details.')
    navigate('/')
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        {t('myBookings')}
      </h1>

      {bookingHistory.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">
            {t('noBookings')}
          </p>
          <button
            onClick={() => navigate('/products')}
            className="btn-green"
          >
            {t('browseProducts')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookingHistory.map((booking) => (
            <div
              key={booking.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {booking.item.name || booking.item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {t('type')}: {booking.type}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('bookedOn')}: {new Date(booking.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('name')}: {booking.user.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t('email')}: {booking.user.email}
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
                  {t('confirmed')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Booking