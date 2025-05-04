// app/page.tsx
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PresentationSection from './components/PresentationSection'
import BenefitsSection from './components/BenefitsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accueil – Myless',
  description:
    "Simplifiez l'organisation de vos voyages en groupe avec Myless : application collaborative, calendrier partagé, sondages et plus encore.",
  openGraph: {
    title: 'Accueil – Myless',
    description:
      "Simplifiez l'organisation de vos voyages en groupe avec Myless : application collaborative, calendrier partagé, sondages et plus encore.",
    url: 'https://myless.fr',
    images: [
      {
        url: 'https://myless.fr/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'Hero section de Myless',
      },
    ],
  },
  twitter: {
    title: 'Accueil – Myless',
    description:
      "Simplifiez l'organisation de vos voyages en groupe avec Myless : application collaborative, calendrier partagé, sondages et plus encore.",
    images: ['https://myless.fr/hero-og-image.png'],
  },
}

export default function Home() {
  return (
    <>
      <Header />

      {/* Section Accueil */}
      <section id="home" aria-label="Accueil">
        <HeroSection />
      </section>

      {/* Section À propos */}
      <section id="about" aria-label="À propos">
        <PresentationSection />
      </section>

      {/* Section Services (ou Benefits) */}
      <section id="services" aria-label="Services">
        <BenefitsSection />
      </section>

      {/* Section Contact */}
      <section id="contact" aria-label="Contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  )
}
