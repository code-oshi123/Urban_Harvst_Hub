import { useNavigate } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import ProductCard from '../components/ProductCard'
import WorkshopCard from '../components/WorkshopCard'
import EventCard from '../components/EventCard'
import productsData from '../data/products.json'
import workshopsData from '../data/workshops.json'
import eventsData from '../data/events.json'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()
  
  const featuredProducts = productsData.products.slice(0, 3)
  const upcomingWorkshops = workshopsData.workshops.slice(0, 3)
  const upcomingEvents = eventsData.events.slice(0, 3)

  return (
    <div className="animate-fade-in">
      <HeroBanner 
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        buttonText={t('exploreProducts')}
        onButtonClick={() => navigate('/products')}
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {t('whyChooseUs')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">{t('ecoFriendlyProducts')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('ecoFriendlyDesc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">{t('educationalWorkshops')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('educationalDesc')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">{t('communityEventsTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('communityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{t('featuredProducts')}</h2>
            <button 
              onClick={() => navigate('/products')}
              className="text-forest dark:text-leaf hover:underline focus:outline-none focus:ring-2 focus:ring-leaf rounded"
            >
              {t('viewAll')} →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{t('upcomingWorkshops')}</h2>
            <button 
              onClick={() => navigate('/workshops')}
              className="text-forest dark:text-leaf hover:underline focus:outline-none focus:ring-2 focus:ring-leaf rounded"
            >
              {t('viewAll')} →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWorkshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{t('communityEventsTitle')}</h2>
            <button 
              onClick={() => navigate('/events')}
              className="text-forest dark:text-leaf hover:underline focus:outline-none focus:ring-2 focus:ring-leaf rounded"
            >
              {t('viewAll')} →
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-forest text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('stayUpdated')}</h2>
          <p className="text-lg mb-6">{t('newsletterText')}</p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-leaf"
              aria-label="Email address"
            />
            <button type="submit" className="bg-white text-forest px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
              {t('subscribe')}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Home