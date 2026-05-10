import { useLanguage } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  const languages = [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'si', label: 'සිං', name: 'Sinhala' }
  ]

  return (
    <div className="relative inline-block" role="group" aria-label="Language selector">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer
                 focus:outline-none focus:ring-2 focus:ring-leaf"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher