import CTA from './UI/CTA';

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Find out more',
  ctaHref = '/contact',
  theme = 'light',
}) {
  return (
    <div className='relative'>
      <div className='px-4 py-4 mx-auto sm:px-8 lg:px-10 max-w-7xl'>
        <div className='w-full text-center flex flex-col items-center justify-center'>
          <h1
            className={`text-4xl font-bold sm:text-6xl lg:text-7xl  ${
              theme === 'light'
                ? 'text-white text-shadow shadow-gray-900'
                : 'text-gray-900'
            }`}
          >
            {title}
          </h1>
          <h2
            className={`relative text-3xl font-bold sm:text-5xl lg:text-6xl ${
              theme === 'light'
                ? 'text-white text-shadow shadow-slate-900'
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
              <CTA href={ctaHref} ctaText={ctaText} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
