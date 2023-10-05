'use client';

import GlowText from './UI/GlowText';
import ReviewBlock from './UI/ReviewBlock';

const data = [
  {
    name: 'Alice Smith',
    designation: 'CTO, XYZ Tech',
    date: 'July 2022',
    text: 'John Doe and his team at ABC Company delivered an outstanding product. Their expertise in software engineering is unmatched!',
    imageSrc: 'alice.jpg',
  },
  {
    name: 'David Johnson',
    designation: 'Founder, Tech Innovators',
    date: 'August 2022',
    text: 'I had the pleasure of working with John and his team. They are highly skilled and always deliver on time.',
    imageSrc: 'david.jpg',
  },
  {
    name: 'Emily Brown',
    designation: 'Product Manager, Acme Corp',
    date: 'September 2022',
    text: "John Doe's software engineering skills are top-notch. Our project was a huge success thanks to him!",
    imageSrc: 'emily.jpg',
  },
  {
    name: 'Michael Wilson',
    designation: 'CEO, Innovate Inc',
    date: 'October 2022',
    text: "ABC Company's software development team is exceptional. John's leadership is commendable.",
    imageSrc: 'michael.jpg',
  },
  {
    name: 'Sophia Lee',
    designation: 'Product Designer, TechBuddy',
    date: 'November 2022',
    text: 'Working with John and his team was a pleasure. They are true professionals in the field of software engineering.',
    imageSrc: 'sophia.jpg',
  },
  {
    name: 'William Turner',
    designation: 'VP of Engineering, InnovateTech',
    date: 'December 2022',
    text: "John Doe's software solutions are nothing short of impressive. I highly recommend ABC Company!",
    imageSrc: 'william.jpg',
  },
  {
    name: 'Olivia Davis',
    designation: 'Product Manager, CodeCrafters',
    date: 'January 2023',
    text: 'ABC Company consistently delivers high-quality software products. John Doe is a true visionary.',
    imageSrc: 'olivia.jpg',
  },
  {
    name: 'Daniel Martinez',
    designation: 'Founder, DevMasters',
    date: 'February 2023',
    text: "I've worked with many software engineers, but John stands out as one of the best. ABC Company is exceptional!",
    imageSrc: 'daniel.jpg',
  },
];

export default function Testimonials() {
  return (
    <div className='bg-green-600 py-20 w-full'>
      <h3 className='text-center text-white text-xl sm:text-4xl font-semibold mb-8 sm:mb-16'>
        <GlowText theme='light'>Testimonials</GlowText> from <br /> our
        customers
      </h3>
      <div className='container mx-auto px-4'>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 items-center justify-center'>
          {data.map((review, index) => {
            return (
              <ReviewBlock
                index={index}
                key={index}
                date={review.date}
                name={review.name}
                text={review.text}
                designation={review.designation}
                imageSrc={`https://i.pravatar.cc/64?u=${review.imageSrc}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
