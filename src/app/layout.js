import './globals.css';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'SAAS Starter Pro',
  description: 'A Next.js Tailwindcss starter template for SaaS products.',
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
