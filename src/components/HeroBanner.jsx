const HeroBanner = ({ title, subtitle, backgroundImage, buttonText, onButtonClick }) => {
  return (
    <section 
      className="relative bg-cover bg-center h-96 flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200'})` }}
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            {subtitle}
          </p>
        )}
        {buttonText && onButtonClick && (
          <button
            onClick={onButtonClick}
            className="btn-green text-lg px-8 py-3"
            aria-label={buttonText}
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  )
}

export default HeroBanner