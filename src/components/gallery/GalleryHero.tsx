const GalleryHero = () => {
  return (
    <section className="relative bg-primary pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/20 text-accent rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Our Gallery
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 sm:mb-6 px-2">
            Fleet & Equipment Showcase
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 px-4">
            Explore our modern fleet of vehicles and heavy equipment. 
            See the quality and reliability that drives our success across Oman.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHero;
