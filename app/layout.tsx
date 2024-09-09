import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { NextUiProvider } from './Providers/NextUiProvider';
import MainBar from './Components/MainNav';
import FooterUI from './Components/FooterUI';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Collab Compass',
  description: 'Tours and travel agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} background-main-color`}>
        <NextUiProvider>
          <div className='bg-black/40 backdrop-blur-sm'>
            <MainBar />
            {children}
            <FooterUI />
          </div>
        </NextUiProvider>
      </body>
    </html>
  );
}
