/* eslint-disable @next/next/no-img-element */
const logos = [
  'stripe.svg',
  'tesla.svg',
  'microsoft.svg',
  'mastercard.svg',
  'redbull.svg',
  'spotify.svg',
];

export default function Logos() {
  return (
    <section className='py-4 bg-white sm:py-8 lg:py-12'>
      <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8'>
        Trusted by the world&rsquo;s best
      </h3>
      <div className='px-4 mx-auto max-w-8xl sm:px-6 lg:px-8'>
        <div className='flex flex-wrap items-center space-x-4 space-y-4 justify-evenly'>
          {logos.map((logo, index) => {
            return (
              <div className='p-2' key={index}>
                <img
                  className='object-contain w-auto mx-auto h-10'
                  src={`/${logo}`}
                  alt={`logos of ${logo}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
