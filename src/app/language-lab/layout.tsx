import type { Metadata } from 'next';
import { Sidebar } from './components/Sidebar';

export const metadata: Metadata = {
  title: 'Language Lab - CLRLC',
  description: 'Speech-to-text and document translation tools for African languages',
  robots: {
    index: false,
    follow: false,
  },
};

export default function LanguageLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 lg:ml-60">
        <div className="p-4 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
