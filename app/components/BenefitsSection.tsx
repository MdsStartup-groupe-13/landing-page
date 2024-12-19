const BenefitsSection = () => {
    return (
      <section className="bg-gradient-to-br from-gray-100 to-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#346473] mb-6">
            Les bénéfices de Myless
          </h2>
          <p className="text-lg text-[#346473] mb-12">
            Découvrez comment Myless simplifie vos voyages en groupe et vous fait gagner du temps tout en offrant une organisation optimale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Point 1 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#346473] mt-4">
                Organisation optimale
              </h3>
              <p className="text-[#346473] mt-2">
                Centralisez toutes les étapes de votre voyage : choix des destinations, gestion des budgets et calendrier partagé.
              </p>
            </div>
  
            {/* Point 2 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#346473] mt-4">
                Gain de temps
              </h3>
              <p className="text-[#346473] mt-2">
                Réservez rapidement vos hébergements et activités tout en prenant des décisions collectives grâce aux sondages interactifs.
              </p>
            </div>
  
            {/* Point 3 */}
            <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#346473] mt-4">
                Collaboration simplifiée
              </h3>
              <p className="text-[#346473] mt-2">
                Partagez les responsabilités en groupe avec une messagerie intégrée, des notifications et des outils de suivi collaboratifs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BenefitsSection;
  