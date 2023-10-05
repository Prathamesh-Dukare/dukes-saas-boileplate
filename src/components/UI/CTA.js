import Link from 'next/link';

export default function CTA({
  href = '/contact',
  title = 'contact us',
  ctaText = 'Discuss your Project',
  className = '',
  blackTheme = true,
}) {
  return (
    <Link
      href={href}
      title={title}
      className={`inline-flex shadow items-center justify-center rounded px-5 py-3 text-base font-semibold transition-all duration-200 ${
        !blackTheme
          ? 'text-gray-950 bg-white hover:bg-gray-100 focus:bg-white'
          : 'text-white bg-green-600 hover:bg-opacity-95 focus:bg-opacity-95'
      } ${className}`}
      role='button'
    >
      {ctaText}
    </Link>
  );
}
