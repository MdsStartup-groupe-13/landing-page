import Image from 'next/image';
const PresentationSection = () => {
    return (
      <section className="bg-[# FFFFF] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Texte de présentation */}
          <div>
            <h2 className="text-4xl font-bold text-[#346473] mb-4">
              Découvrez notre application mobile
            </h2>
            <p className="text-lg text-[#346473] mb-6">
              Planifiez vos voyages de groupe avec une application intuitive. 
              Réservez des destinations, partagez des avis et gérez les cagnottes 
              pour rendre vos aventures encore plus simples !
            </p>
            <ul className="list-disc list-inside text-[#346473] space-y-2">
              <li>Interface intuitive et facile d'utilisation</li>
              <li>Planification des voyages en temps réel</li>
              <li>Gestion des cagnottes en toute simplicité</li>
            </ul>
          </div>
  
          {/* Image du smartphone */}
          <div className="flex justify-center">
          <Image
              src="/images/Presentation_appli.png"  
              alt="Application mobile"
              className="w-85 shadow-lg rounded-lg "
              width={600} 
              height={600} 
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default PresentationSection;
  