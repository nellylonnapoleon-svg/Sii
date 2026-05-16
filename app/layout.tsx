import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'FitBite Wellness app',
  description: 'Premium minimalist fitness tracking',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-slate-800 bg-slate-50 min-h-screen" suppressHydrationWarning>
        <div className="mx-auto max-w-md w-full min-h-screen bg-[#F8F9FA] relative shadow-2xl overflow-x-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
