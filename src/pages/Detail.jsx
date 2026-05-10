import { useParams, Link } from 'react-router-dom'
import { useApp } from '../context/AppContext'

export default function Detail() {
  const { id } = useParams()
  const { items } = useApp()
  const item = items.find(i => i.id === id)

  if (!item) return (
    <div className="text-center py-20" role="alert">
      <p className="text-xl text-gray-500">Item not found.</p>
      <Link to="/browse" className="btn-primary mt-4 inline-block">Back to Browse</Link>
    </div>
  )

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link
        to="/browse"
        className="text-harvest-green font-semibold hover:underline focus:outline-none focus:underline"
        aria-label="Back to browse page"
      >
        ← Back to Browse
      </Link>

      <article aria-labelledby="detail-title" className="mt-6">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-72 object-cover rounded-2xl shadow"
        />
        <div className="mt-6">
          <span className="text-xs uppercase font-bold text-harvest-green bg-green-100 px-2 py-1 rounded-full">
            {item.category} · {item.type}
          </span>
          <h1
            id="detail-title"
            className="text-3xl font-extrabold text-gray-800 dark:text-white mt-3"
          >
            {item.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-3 text-lg leading-relaxed">
            {item.description}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-2xl font-bold text-harvest-green dark:text-harvest-amber">
              {item.price === 0 ? 'Free' : `£${item.price.toFixed(2)}`}
            </p>
            <span className={`font-semibold px-3 py-1 rounded-full text-sm ${
              item.available
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {item.available ? 'Available' : 'Sold Out'}
            </span>
          </div>

          {item.available && (
            <Link
              to={`/book/${item.id}`}
              className="btn-primary mt-6 inline-block text-base px-6 py-3"
            >
              Book / Register
            </Link>
          )}
        </div>
      </article>
    </div>
  )
}