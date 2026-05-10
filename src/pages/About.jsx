import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-forest to-leaf text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{t('aboutUs')}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('aboutDesc')}
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t('ourMission')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {t('ourCoreValues')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize eco-friendly practices in everything we do
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building connections that strengthen local eco-initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Empowering through knowledge and practical skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t('ourStory')}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('storyText1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {t('storyText2')}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {t('storyText3')}
              </p>
            </div>
            <div>
              <video class="w-full h-full object-cover" autoplay loop muted playsinline>
                <source src="/src/assets/img/v_1.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
              {/* <img
                src="/src/assets/imag/v_1.mp4"
                alt="Community gardening together"
                className="rounded-lg shadow-lg w-full"
                loading="lazy"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {t('meetOurTeam')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-forest flex items-center justify-center text-white text-4xl">
                🌱
              </div>
              <h3 className="text-xl font-semibold mb-1">Sarah Green</h3>
              <p className="text-gray-600 dark:text-gray-400">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-forest flex items-center justify-center text-white text-4xl">
                📚
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Bloom</h3>
              <p className="text-gray-600 dark:text-gray-400">Education Director</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-forest flex items-center justify-center text-white text-4xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold mb-1">Emma Thompson</h3>
              <p className="text-gray-600 dark:text-gray-400">Community Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">{t('getInTouch')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('contactText')}
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-green" onClick={() => window.location.href = 'mailto:info@urbanharvest.com'}>
              {t('emailUs')}
            </button>
            <button className="btn-green-outline" onClick={() => window.location.href = 'tel:+5551234567'}>
              {t('callUs')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About