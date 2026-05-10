import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  return (
    <article className="card" aria-label={item.title}>
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <span className="text-xs uppercase tracking-wide font-bold text-harvest-green bg-green-100 px-2 py-1 rounded-full">
          {item.category}
        </span>
        <h2 className="mt-2 font-bold text-lg text-gray-800 dark:text-white">{item.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">{item.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="font-bold text-harvest-green dark:text-harvest-amber">
            {item.price === 0 ? 'Free' : `£${item.price.toFixed(2)}`}
          </span>
          <Link
            to={`/item/${item.id}`}
            className="btn-primary text-sm"
            aria-label={`View details for ${item.title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}