import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import DarkModeToggle from './DarkModeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../context/LanguageContext'
import MainLogo from '../assets/img/Main_Logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/products', label: t('products') },
    { to: '/workshops', label: t('workshops') },
    { to: '/events', label: t('events') },
    { to: '/about', label: t('about') }
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50" role="navigation" aria-label={t('home')}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-forest dark:text-leaf hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-label="Urban Harvest Hub Home"
          >
            <img src={MainLogo} alt="Urban Harvest Hub Logo" width="40" height="40" className="h-10 w-10 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-leaf ${
                    isActive
                      ? 'text-forest dark:text-leaf font-semibold'
                      : 'text-gray-700 dark:text-gray-200 hover:text-forest dark:hover:text-leaf'
                  }`
                }
                aria-current={({ isActive }) => isActive ? 'page' : undefined}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'text-forest dark:text-leaf font-semibold bg-gray-100 dark:bg-gray-700'
                      : 'text-gray-700 dark:text-gray-200 hover:text-forest dark:hover:text-leaf'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex space-x-3 px-4 pt-4">
              <LanguageSwitcher />
              <DarkModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
