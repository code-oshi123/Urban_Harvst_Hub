const HeroBanner = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  onButtonClick,
}) => {
  // Use responsive image sources with WebP format
  const imageUrl =
    backgroundImage ||
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&fm=webp&q=80";
  const imageSrcSet = backgroundImage
    ? undefined
    : "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&fm=webp&q=80 800w, https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&fm=webp&q=80 1200w, https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&fm=webp&q=80 1600w";

  return (
    <section
      className="relative h-96 flex items-center justify-center overflow-hidden"
      aria-label="Hero banner"
    >
      <img
        src={imageUrl}
        srcSet={imageSrcSet}
        sizes="100vw"
        alt="Urban Harvest Hub - Sustainable living"
        fetchPriority="high"
        loading="eager"
        width="1600"
        height="1024"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">{subtitle}</p>
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
  );
};

export default HeroBanner;
