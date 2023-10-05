import './globals.css';
import { Archivo } from 'next/font/google';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'SAAS Starter Pro',
  description: 'A Next.js Tailwindcss starter template for SaaS products.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={archivo.className}>
        <main className='flex-1 w-full mx-auto'>{children}</main>
      </body>
    </html>
  );
}
