// app/layout.tsx
import './globals.css'

import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Myless – Organisez vos voyages en groupe sans stress',
  description:
    "Myless révolutionne l'organisation de voyages en groupe : sondages interactifs, cagnottes, calendrier partagé et réservations simplifiées.",
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Myless – Organisez vos voyages en groupe sans stress',
    description:
      "Myless révolutionne l'organisation de voyages en groupe : sondages interactifs, cagnottes, calendrier partagé et réservations simplifiées.",
    url: 'https://myless.fr',
    siteName: 'Myless',
    images: [
      {
        url: 'https://myless.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aperçu de l’application Myless',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Myless – Organisez vos voyages en groupe',
    description:
      "Collaborez, votez, gérez votre budget et réservez vos activités en groupe avec Myless.",
    images: ['https://myless.fr/twitter-image.png'],
  },
}

// Nouveau : export pour le viewport (Next.js 13.4+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#A600FF',      // déplacez-y votre couleur de thème
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
