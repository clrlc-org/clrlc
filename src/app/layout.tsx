import type { Metadata } from 'next';
import { Nunito, Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Center for Low-Resource Languages & Cultures (CLRLC)',
  description: 'Advancing the representation of low-resource languages and cultures in Artificial Intelligence.',
  metadataBase: new URL('https://clrlc.org'), // Replace with actual domain later
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} ${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased text-foreground bg-background">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
