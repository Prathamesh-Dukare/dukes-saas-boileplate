import Background from '@/components/Background';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Background className={'bg-slate-50 bg-awesome_pattern'} />
      <Hero
        preText={
          <>
            1000+ <span className='text-green-400'>Happy Customers</span>
          </>
        }
        theme='dark'
        title={'Catch Attention'}
        subtitle={
          <>
            With <span className='bg-green-400 px-2 rounded'>Next.js</span> and{' '}
            <span className='bg-green-400 px-2 rounded'>Tailwind CSS</span>
          </>
        }
        description={
          <>
            <span className='font-bold'>Next.js</span> and{' '}
            <span className='font-bold'>Tailwind CSS</span> are a match made in
            heaven. <br /> This starter template is a great way to get started
            with your next project.
          </>
        }
        ctaButtonClassName='px-8 py-4'
        ctaText='Buy Now'
      />
    </>
  );
}
