// app/mentions-legales/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales – Myless',
  description:
    'Informations légales du site Myless : éditeur, hébergeur, propriété intellectuelle, responsabilité.',
}

export default function MentionsLegales() {
  return (
    <main className="bg-gray-50 py-16">
      <div className="max-w-3xl mx-auto space-y-12 px-4">
        <h1 className="text-3xl font-extrabold text-[#346473] text-center">
          Mentions légales
        </h1>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">Éditeur du site</h2>
          <p className="text-gray-700 mb-2">
            Le site <strong>myless.fr</strong> est édité par la société{' '}
            <strong>Myless SAS</strong>, au capital de 10 000 €, immatriculée au RCS de Paris
            sous le numéro 123 456 789, dont le siège social est situé au 10 rue de l’Aventure,
            75000 Paris, France.
          </p>
          <p className="text-gray-700">
            Directeur de la publication : <strong>Bilal Boukhorissa</strong><br />
            Contact :{' '}
            <a href="mailto:contact@myless.fr" className="text-[#A600FF] hover:underline">
              contact@myless.fr
            </a><br />
            Tél. :{' '}
            <a href="tel:+33123456789" className="text-[#A600FF] hover:underline">
              +33 (0)1 23 45 67 89
            </a>
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">Hébergeur</h2>
          <p className="text-gray-700">
            Hébergement assuré par <strong>Vercel Inc.</strong><br />
            340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
            Site web :{' '}
            <a href="https://vercel.com" target="_blank" className="text-[#A600FF] hover:underline">
              vercel.com
            </a>
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-700">
            Tous les contenus (textes, images, logos, vidéos) sont protégés par les lois sur la
            propriété intellectuelle. Toute reproduction, modification ou diffusion sans autorisation
            écrite de Myless SAS est interdite.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">Responsabilité</h2>
          <p className="text-gray-700">
            Myless met tout en œuvre pour assurer l’exactitude des informations, mais décline toute
            responsabilité en cas d’erreur ou d’omission.
          </p>
        </section>

        <section className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold text-[#346473] mb-4">Liens externes</h2>
          <p className="text-gray-700">
            Les liens vers des sites tiers n’engagent pas la responsabilité de Myless quant à leur contenu.
          </p>
        </section>
      </div>
    </main>
  )
}
