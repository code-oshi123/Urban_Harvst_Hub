import { useLanguage } from '../context/LanguageContext'

const LoadingSpinner = () => {
  const { t } = useLanguage()
  
  return (
    <div className="flex justify-center items-center py-12" role="status" aria-label={t('loading')}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        <div className="w-12 h-12 rounded-full border-4 border-forest border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="sr-only">{t('loading')}</span>
    </div>
  )
}

export default LoadingSpinner