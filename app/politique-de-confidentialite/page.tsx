// app/politique-de-confidentialite/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité – Myless',
  description:
    'Votre vie privée est importante pour Myless : découvrez comment nous collectons, utilisons et protégeons vos données.',
}

export default function PolitiqueConfidentialite() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto space-y-12 px-4">
        <h1 className="text-3xl font-extrabold text-[#346473] text-center">
          Politique de confidentialité
        </h1>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">1. Données collectées</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Nom, prénom, email et message (via le formulaire de contact).</li>
            <li>Données de navigation (cookies, logs, IP).</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">2. Finalités du traitement</h2>
          <p className="text-gray-700">
            Répondre à vos demandes, améliorer le site, et envoyer des communications si vous y avez
            consenti.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">3. Cookies</h2>
          <p className="text-gray-700">
            Cookies techniques et analytiques. Vous pouvez gérer/refuser via votre navigateur.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">4. Partage des données</h2>
          <p className="text-gray-700">
            Aucune vente de données. Partage uniquement avec nos prestataires (hébergeur, email).
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">5. Sécurité</h2>
          <p className="text-gray-700">
            Mesures techniques et organisationnelles pour protéger vos données.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">6. Durée de conservation</h2>
          <p className="text-gray-700">
            Conservation limitée à la durée nécessaire, puis archivage ou suppression selon le RGPD.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">7. Vos droits</h2>
          <p className="text-gray-700">
            Droit d’accès, rectification, effacement, limitation, opposition. Écrivez à{' '}
            <a
              href="mailto:privacy@myless.fr"
              className="text-[#A600FF] hover:underline"
            >
              privacy@myless.fr
            </a>
            .
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">8. Contact</h2>
          <p className="text-gray-700">
            Pour toute question, contactez{' '}
            <a
              href="mailto:privacy@myless.fr"
              className="text-[#A600FF] hover:underline"
            >
              privacy@myless.fr
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
