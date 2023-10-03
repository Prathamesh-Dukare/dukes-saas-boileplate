import CTA from './UI/CTA';

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Find out more',
  ctaHref = '/contact',
  theme = 'light',
  ctaButtonClassName = '',
  preText = 'Happy to see you here!',
}) {
  return (
    <div className='relative'>
      <div className='px-4 py-4 mx-auto sm:px-8 lg:px-10 max-w-7xl'>
        <div className='w-full text-center flex flex-col items-center justify-center'>
          <p
            className={`bg-transparent border rounded p-2 text-sm my-2 ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {preText}
          </p>
          <h1
            className={`text-4xl font-bold sm:text-7xl lg:text-8xl  ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {title}
          </h1>
          <h2
            className={`relative mt-6 text-3xl font-bold sm:text-5xl lg:text-6xl ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {subtitle}
          </h2>
          <p
            className={`mt-8 max-w-4xl text-center text-base md:text-lg ${
              theme === 'light' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {description}
          </p>
          {ctaText && (
            <div className='mt-10'>
              <CTA
                href={ctaHref}
                ctaText={ctaText}
                className={ctaButtonClassName}
                blackTheme={theme === 'dark'}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
