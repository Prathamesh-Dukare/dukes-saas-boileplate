/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

/**
 * ReviewBlock Component
 *
 * A reusable component for displaying a review block with a name, designation,
 * date, text, and an image.
 *
 * @param {Object} props - Component props
 * @param {string} [props.name='John Doe'] - The name of the reviewer.
 * @param {string} [props.designation='CEO, ABC Company'] - The designation of the reviewer.
 * @param {string} [props.date='May 2021'] - The date of the review.
 * @param {string} [props.text=''] - The review text or content.
 * @param {string} [props.imageSrc=''] - URL of the reviewer's image.
 * @param {number} [props.index] - An index used to determine the rotation of the review block.
 * @returns {JSX.Element} - Rendered ReviewBlock component.
 */
export default function ReviewBlock({
  name = 'John Doe',
  designation = 'CEO, ABC Company',
  date = 'May 2021',
  text = '',
  imageSrc = '',
  index,
}) {
  return (
    <div
      className={`bg-white text-gray-950 w-full rounded-md p-6 flex flex-col space-y-4 ${
        index % 2 === 0 ? 'sm:rotate-2' : 'sm:-rotate-2'
      }`}
    >
      <div className='flex items-center'>
        <div className='w-12 h-12 rounded-full object-cover mr-4'>
          <Image
            src={imageSrc}
            alt={name}
            width={64}
            height={64}
            className='rounded-full object-cover'
          />
        </div>
        <div>
          <h2 className='text-md sm:text-lg font-bold text-gray-800'>{name}</h2>
          <p className='text-gray-500 text-xs sm:text-sm'>{designation}</p>
        </div>
      </div>
      <div className='flex flex-row gap-1'>
        {[...Array(5)].map((_, index) => {
          return (
            <Image
              width={16}
              height={16}
              alt='Star icon'
              src={'/star.svg'}
              key={index}
              className='w-4 h-4 text-yellow-500'
            />
          );
        })}
      </div>
      <p className='mt-4 leading-6 text-gray-700 text-sm'>{text}</p>
      <p className='text-gray-400 text-xs'>{date}</p>
    </div>
  );
}
