import Link from 'next/link';

export default function CTA({
  href = '/contact',
  title = 'contact us',
  ctaText = 'Discuss your Project',
}) {
  return (
    <Link
      href={href}
      title={title}
      className='inline-flex items-center justify-center rounded px-5 py-2.5 text-base font-semibold text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 focus:bg-gray-900 focus:text-white'
      role='button'
    >
      {ctaText}
    </Link>
  );
}
