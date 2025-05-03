// app/components/PresentationSection.tsx
import Image from 'next/image'

const PresentationSection = () => {
  return (
    <section
      aria-labelledby="presentation-heading"
      className="relative bg-white py-20 md:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Texte de présentation */}
        <div>
          <h2 id="presentation-heading" className="text-4xl font-bold text-[#346473] mb-4">
            Découvrez une nouvelle façon de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient">
              voyager
            </span>
          </h2>
          <p className="text-lg text-[#346473] mb-6 leading-relaxed">
            Myless révolutionne la façon dont les voyages en groupe sont organisés. Fini le stress lié à
            la coordination des agendas, aux budgets et à la réservation d'activités. Notre application
            offre une expérience collaborative unique, rendant chaque étape intuitive et amusante.
          </p>
          <p className="text-lg text-[#346473] mb-6 leading-relaxed">
            Grâce à des fonctionnalités telles que les sondages interactifs pour le choix des destinations,
            un calendrier partagé, une gestion transparente des cagnottes et des réservations directes,
            Myless facilite chaque aspect de votre voyage.
          </p>
          <ul className="list-disc list-inside text-[#346473] space-y-3">
            <li>
              <strong>Collaboration simplifiée :</strong> Décidez ensemble grâce à des outils interactifs.
            </li>
            <li>
              <strong>Organisation efficace :</strong> Un calendrier partagé et des notifications pour ne
              rien manquer.
            </li>
            <li>
              <strong>Gestion des finances :</strong> Cagnottes intégrées pour collecter et répartir les
              frais en toute sérénité.
            </li>
            <li>
              <strong>Réservations faciles :</strong> Hébergements, activités et transports à portée de
              clic.
            </li>
          </ul>
          <p className="text-lg text-[#346473] mt-6 leading-relaxed">
            Avec Myless, transformez vos rêves d’évasion en réalité sans les tracas habituels. Explorez,
            planifiez et profitez de vos voyages en toute simplicité, seul ou en groupe !
          </p>
        </div>

        {/* Image du smartphone */}
        <div className="relative w-full h-auto flex justify-end items-center overflow-visible">
          <img
            src="/images/mockup2.png"
            alt="Vue de l’application Myless mobile"
            className="
              w-full
              md:w-[200%]
              lg:w-[450%]
              xl:w-[300%]
              object-contain
              transform
              md:translate-x-12
              lg:translate-x-32
              xl:translate-x-30
            "
          />
        </div>
      </div>
    </section>
  )
}

export default PresentationSection
