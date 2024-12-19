const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black to-gray-900 px-8 py-2 md:px-12 md:py-10 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Texte côté gauche */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Simplifiez l’organisation de vos voyages avec <span className="text-[#A600FF]">Myless</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Voyager, c'est découvrir de nouveaux horizons, créer des souvenirs et partager des moments inoubliables.
          </p>
          <div className="flex space-x-4">
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


            <button className="text-white underline text-lg hover:text-gray-300">
              En savoir plus
            </button>
          </div>
          <div className="flex space-x-8 mt-6">
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

        {/* Image SVG côté droit */}
        <div className="md:w-[80%] w-full h-auto relative flex justify-center items-center">
          <img
            src="/images/mockup.svg" // Chemin vers votre fichier SVG
            alt="Mockup Myless App"
            className="w-[130%] max-w-[1200px] h-auto md:translate-x-10 translate-x-5"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
