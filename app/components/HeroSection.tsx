const HeroSection = () => { 
  return (
    <section
      id="home"
      className="
        relative
        bg-gradient-to-br from-black to-gray-900
        px-8
        pt-32        /* ↑ plus d’espacement en haut */
        pb-16        /* ↓ moins (ou égal) en bas */
        md:px-12
        md:pt-40     /* ↑ encore plus sur grand écran */
        md:pb-20
        text-white
      "
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Texte */}
        <div className="w-full md:w-1/2 space-y-6 mt-12 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Simplifiez l’organisation de vos voyages avec{' '}
            <span className="text-[#A600FF]">Myless</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Voyager, c'est découvrir de nouveaux horizons, créer des souvenirs et partager des moments inoubliables.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#A600FF] via-[#A600FF] to-[#c2e920] text-white px-6 py-3 rounded-lg flex items-center shadow-md transition-all duration-500 bg-[length:300%_300%] animate-slow-gradient">
              Télécharger l'application
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <a
              href="#about"
              className="text-white underline text-base md:text-lg hover:text-gray-300 self-center"
            >
              En savoir plus
            </a>
          </div>

          <div className="flex space-x-8 mt-8">
            <div>
              <p className="text-3xl font-bold">4.8</p>
              <p className="text-gray-400 text-sm">Note sur l'AppStore</p>
            </div>
            <div>
              <p className="text-3xl font-bold">700k+</p>
              <p className="text-gray-400 text-sm">Utilisateurs actifs</p>
            </div>
          </div>
        </div>

        {/* Mockup */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/mockup.png"
            alt="Mockup Myless App"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
