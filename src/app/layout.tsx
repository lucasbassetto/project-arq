import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

/* TODO: Replace with Editorial New (Pangram Pangram) license — commercial web font */
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

/* TODO: Replace with Neue Haas Grotesk (Monotype/Adobe Fonts) license — commercial web font */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'LAR Arquitetura — Arquitetura Autoral e Contextual',
  description:
    'A LAR e um escritorio de arquitetura autoral e contextual que transforma cada projeto em uma narrativa espacial unica — concebida com rigor intelectual, sensibilidade estetica e profundo respeito ao contexto.',
  openGraph: {
    title: 'LAR Arquitetura — Arquitetura Autoral e Contextual',
    description:
      'Cada projeto, uma resposta. Nunca uma formula. Investigamos o contexto, interpretamos identidades e traduzimos em forma, materia e gesto.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'LAR Arquitetura',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAR Arquitetura — Arquitetura Autoral e Contextual',
    description:
      'Cada projeto, uma resposta. Nunca uma formula.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)] antialiased">
        {children}
      </body>
    </html>
  );
}
