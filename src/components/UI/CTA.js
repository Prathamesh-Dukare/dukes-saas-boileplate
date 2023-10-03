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
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-base font-semibold transition-all duration-200 focus:bg-gray-900 focus:text-white ${
        !blackTheme
          ? 'text-gray-950 bg-white hover:bg-gray-200 focus:bg-white'
          : 'text-white bg-gray-950 hover:bg-opacity-90 focus:bg-opacity-90'
      } ${className}`}
      role='button'
    >
      {ctaText}
    </Link>
  );
}
