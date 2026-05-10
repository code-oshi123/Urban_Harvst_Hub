import { useLanguage } from '../context/LanguageContext'

const ErrorMessage = ({ message, onRetry }) => {
  const { t } = useLanguage()

  return (
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center" role="alert">
      <div className="text-red-500 text-5xl mb-3">⚠️</div>
      <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
        {t('error')}
      </h3>
      <p className="text-red-600 dark:text-red-300 mb-4">
        {message || t('errorOccurred') || 'Something went wrong. Please try again.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="btn-green"
          aria-label={t('tryAgain')}
        >
          {t('tryAgain')}
        </button>
      )}
    </div>
  )
}

export default ErrorMessage