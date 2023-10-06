import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const title = 'SAAS Starter Pro | Best Nextjs TailwindCSS SAAS Template';
export const metadata = {
  title,
  description: 'Best Nextjs TailwindCSS SAAS Template',
  openGraph: {
    title,
    description: 'Best Nextjs TailwindCSS SAAS Template',
    url: `https://saas-starter-pro.vercel.app`,
    siteName: 'saas-starter-pro.vercel.app',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://saas-starter-pro.vercel.app/og.jpg',
        width: 2400,
        height: 1260,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: 'Best Nextjs TailwindCSS SAAS Template',
    creator: '@sandeep_indie',
    images: ['https://saas-starter-pro.vercel.app/og.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <main className='flex-1 w-full mx-auto'>{children}</main>
      </body>
    </html>
  );
}
