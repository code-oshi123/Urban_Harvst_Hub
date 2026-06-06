import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import workshopsData from '../data/workshops.json'
import eventsData from '../data/events.json'
import { useLanguage } from '../context/LanguageContext'

const Booking = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useLanguage()

  // Load history from localStorage on mount
  const [bookingHistory, setBookingHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('uhh_bookings')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      console.error('Failed to load bookings from localStorage:', e)
      return []
    }
  })

  // Extract selected item to book (from location state or query parameters)
  let initialItem = location.state?.item
  let initialType = location.state?.type

  const searchParams = new URLSearchParams(location.search)
  const queryType = searchParams.get('type')
  const queryId = searchParams.get('id')

  if (!initialItem && queryType && queryId) {
    const parsedId = parseInt(queryId, 10)
    if (queryType === 'product') {
      initialItem = productsData.products.find(p => p.id === parsedId)
    } else if (queryType === 'workshop') {
      initialItem = workshopsData.workshops.find(w => w.id === parsedId)
    } else if (queryType === 'event') {
      initialItem = eventsData.events.find(e => e.id === parsedId)
    }
    initialType = queryType
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    specialRequests: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API reservation delay
    await new Promise(resolve => setTimeout(resolve, 1200))

    const newBooking = {
      id: `BKG-${Date.now().toString().slice(-6)}-${Math.floor(10 + Math.random() * 90)}`,
      item: initialItem,
      type: initialType,
      user: { ...formData },
      date: new Date().toISOString()
    }

    const updatedHistory = [newBooking, ...bookingHistory]
    setBookingHistory(updatedHistory)
    try {
      localStorage.setItem('uhh_bookings', JSON.stringify(updatedHistory))
    } catch (err) {
      console.error('Failed to save booking to localStorage:', err)
    }

    setBookingSuccess(newBooking)
    setIsSubmitting(false)
  }

  const handleCancelBooking = (id) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      const updated = bookingHistory.filter(b => b.id !== id)
      setBookingHistory(updated)
      try {
        localStorage.setItem('uhh_bookings', JSON.stringify(updated))
      } catch (err) {
        console.error('Failed to save booking cancellation to localStorage:', err)
      }
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  // Helper to determine item name/title
  const getItemName = (item) => item?.title || item?.name || 'Item'

  // Render receipt view upon successful booking
  if (bookingSuccess) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-2xl animate-fade-in">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-green-100 dark:border-green-950 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-forest to-leaf text-white text-center py-8 px-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-wide mb-1">Booking Confirmed!</h1>
            <p className="text-green-50 text-sm">Your reservation has been secured successfully.</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Details Grid */}
            <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                <span>RESERVATION ID</span>
                <span className="font-mono font-bold text-forest dark:text-leaf">{bookingSuccess.id}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {getItemName(bookingSuccess.item)}
              </h3>
              <span className="inline-block mt-2 px-2.5 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full capitalize">
                {bookingSuccess.type}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="block text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase">Customer Details</span>
                <div className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                  <p>{bookingSuccess.user.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{bookingSuccess.user.email}</p>
                  {bookingSuccess.user.phone && <p className="text-xs text-gray-500 dark:text-gray-400">{bookingSuccess.user.phone}</p>}
                </div>
              </div>

              <div>
                <span className="block text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase">Booking Summary</span>
                <div className="mt-1 font-medium text-gray-700 dark:text-gray-300">
                  <p className="capitalize"><span className="text-gray-400 font-normal">Type:</span> {bookingSuccess.type}</p>
                  {bookingSuccess.type !== 'product' && (
                    <p><span className="text-gray-400 font-normal">Guests:</span> {bookingSuccess.user.guests}</p>
                  )}
                  <p><span className="text-gray-400 font-normal">Booked on:</span> {new Date(bookingSuccess.date).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Extra Item Details */}
            {(bookingSuccess.item.location || bookingSuccess.item.date) && (
              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-4 text-xs space-y-1.5 text-gray-600 dark:text-gray-400">
                {bookingSuccess.item.date && (
                  <p><span className="font-semibold text-gray-800 dark:text-gray-300">Date & Time:</span> {formatDate(bookingSuccess.item.date)}</p>
                )}
                {bookingSuccess.item.location && (
                  <p><span className="font-semibold text-gray-800 dark:text-gray-300">Location:</span> {bookingSuccess.item.location}</p>
                )}
                {bookingSuccess.item.instructor && (
                  <p><span className="font-semibold text-gray-800 dark:text-gray-300">Instructor:</span> {bookingSuccess.item.instructor}</p>
                )}
              </div>
            )}

            {bookingSuccess.user.specialRequests && (
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <span className="block text-xs text-gray-400 dark:text-gray-500 font-semibold uppercase">Special Requests</span>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 italic">
                  "{bookingSuccess.user.specialRequests}"
                </p>
              </div>
            )}

            {/* Sustainability Badge */}
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-100 dark:border-green-900/50 rounded-xl p-4 flex gap-3 items-center">
              <span className="text-2xl">🌱</span>
              <p className="text-xs text-green-800 dark:text-green-300 leading-relaxed">
                Thank you for choosing Urban Harvest Hub! By engaging in this eco-friendly option, you are contributing directly to sustainable community programs and environmental preservation.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
              <button
                onClick={() => {
                  setBookingSuccess(null)
                  // Reset form data
                  setFormData({ name: '', email: '', phone: '', guests: 1, specialRequests: '' })
                  // Clear query or state
                  navigate('/booking', { replace: true, state: {} })
                }}
                className="flex-1 btn-green text-center py-2.5"
              >
                View My Bookings
              </button>
              <button
                onClick={() => navigate('/products')}
                className="flex-1 btn-green-outline text-center py-2.5"
              >
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Render form to make a booking
  if (initialItem && initialType) {
    const itemPrice = initialItem.price ?? 0
    const itemFree = initialItem.free ?? false
    const itemName = getItemName(initialItem)

    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl animate-fade-in">
        <button
          onClick={() => {
            // If they have location state to go back to, navigate back. Otherwise go home or browse.
            if (location.state?.item) {
              navigate(-1)
            } else {
              navigate(`/${initialType}s`)
            }
          }}
          className="mb-6 inline-flex items-center text-forest dark:text-leaf hover:underline font-semibold focus:outline-none focus:ring-2 focus:ring-leaf rounded px-2 py-1"
        >
          ← {t('goBack') || 'Go Back'}
        </button>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-8 text-center md:text-left">
          Confirm Your Reservation
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Item Profile Card */}
          <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden sticky top-20">
            <div className="relative h-48 sm:h-60 overflow-hidden">
              <img
                src={initialItem.image}
                alt={itemName}
                width="400"
                height="300"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-forest/90 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                {initialType}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs text-forest dark:text-leaf font-bold tracking-wider uppercase">
                  {initialItem.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">
                  {itemName}
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {initialItem.description}
              </p>

              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-2.5 text-sm">
                {initialItem.date && (
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">Date & Time</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{formatDate(initialItem.date)}</span>
                  </div>
                )}
                {initialItem.duration && (
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">Duration</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{initialItem.duration}</span>
                  </div>
                )}
                {initialItem.location && (
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">Location</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{initialItem.location}</span>
                  </div>
                )}
                {initialItem.instructor && (
                  <div className="flex justify-between">
                    <span className="text-gray-400 font-semibold">Instructor</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{initialItem.instructor}</span>
                  </div>
                )}
                {initialItem.sustainability && (
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3 flex gap-2 items-start">
                    <span className="text-lg">🌱</span>
                    <span className="text-xs text-green-700 dark:text-green-400 font-medium leading-relaxed">
                      {initialItem.sustainability}
                    </span>
                  </div>
                )}
              </div>

              {/* Price Details */}
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4 flex justify-between items-center">
                <span className="font-semibold text-gray-500">Price</span>
                <span className="text-2xl font-black text-forest dark:text-leaf">
                  {itemFree ? 'FREE' : `$${itemPrice.toFixed(2)}`}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-700">
              Provide Your Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent transition-all"
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
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent transition-all"
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
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent transition-all"
                />
              </div>

              {initialType !== 'product' && (
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
                    className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent transition-all"
                    aria-required="true"
                  />
                  <p className="mt-1.5 text-xs text-gray-400 dark:text-gray-500">Maximum of 10 attendees per reservation.</p>
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
                  placeholder="Any dietary needs, accessibility requirements, or preferences..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:outline-none focus:ring-2 focus:ring-leaf focus:border-transparent transition-all"
                />
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() => {
                    if (location.state?.item) {
                      navigate(-1)
                    } else {
                      navigate(`/${initialType}s`)
                    }
                  }}
                  className="flex-1 py-3 border border-gray-300 dark:border-gray-600 rounded-xl 
                           text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-bold transition-all focus:outline-none focus:ring-2 focus:ring-leaf"
                >
                  {t('close') || 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 bg-forest text-white rounded-xl font-bold 
                           transition-all hover:bg-forest/90 focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Securing Booking...</span>
                    </>
                  ) : (
                    t('submit') || 'Confirm Reservation'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  // Render bookings history page
  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        {t('myBookings')}
      </h1>

      {bookingHistory.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 text-center border border-gray-100 dark:border-gray-750">
          <div className="text-6xl mb-4">📅</div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            No Bookings Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
            {t('noBookings') || "You haven't scheduled any reservations yet. Discover our eco-friendly items and register for events today!"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate('/products')}
              className="btn-green shadow-md"
            >
              {t('browseProducts') || 'Browse Products'}
            </button>
            <button
              onClick={() => navigate('/workshops')}
              className="btn-green-outline"
            >
              Explore Workshops
            </button>
            <button
              onClick={() => navigate('/events')}
              className="btn-green-outline"
            >
              Upcoming Events
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-150 dark:border-gray-700">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              Active Reservations ({bookingHistory.length})
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {bookingHistory.map((booking) => {
              const bItem = booking.item
              const bName = getItemName(bItem)
              const isFree = bItem.free ?? false
              const priceVal = bItem.price ?? 0

              return (
                <div
                  key={booking.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-750 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
                >
                  {/* Thumbnail Image */}
                  <div className="md:w-44 h-40 md:h-auto overflow-hidden relative flex-shrink-0">
                    <img
                      src={bItem.image}
                      alt={bName}
                      width="200"
                      height="150"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-sm text-white rounded text-[10px] uppercase font-bold tracking-wider">
                      {booking.type}
                    </span>
                  </div>

                  {/* Booking Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <span className="text-[10px] text-forest dark:text-leaf font-extrabold uppercase tracking-wider">
                            {bItem.category}
                          </span>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {bName}
                          </h3>
                        </div>
                        <span className="px-2.5 py-0.5 bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-200 rounded-full text-xs font-bold">
                          {t('confirmed') || 'Confirmed'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-xs text-gray-600 dark:text-gray-400 mt-3">
                        <p><span className="text-gray-400 font-semibold">Receipt ID:</span> <span className="font-mono">{booking.id}</span></p>
                        <p><span className="text-gray-400 font-semibold">Booked On:</span> {new Date(booking.date).toLocaleDateString()}</p>
                        {bItem.date && <p className="col-span-1 sm:col-span-2"><span className="text-gray-400 font-semibold">Event Date:</span> {formatDate(bItem.date)}</p>}
                        {bItem.location && <p><span className="text-gray-400 font-semibold">Location:</span> {bItem.location}</p>}
                        {booking.type !== 'product' && <p><span className="text-gray-400 font-semibold">Guests:</span> {booking.user.guests}</p>}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Total Amount: <span className="text-lg font-black text-forest dark:text-leaf ml-1">{isFree ? 'FREE' : `$${priceVal.toFixed(2)}`}</span>
                      </div>
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1"
                      >
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Booking