export default function ProsePreview({ content, className = 'bg-white' }) {
  return (
    <div
      className={`pt-6 flex flex-col items-center pb-8 mx-auto xl:pt-20 sm:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 px-4 ${className}`}
    >
      <div className='max-w-prose mx-auto'>
        <div
          className='w-full prose-sm sm:prose-base prose-gray prose-a:underline prose-a:underline-offset-4 prose-a:text-green-600'
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </div>
  );
}
