export default function ProsePreview({ content }) {
  return (
    <div className='pt-6 bg-gray-50 flex flex-col items-center pb-8 mx-auto xl:pt-20 sm:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 px-4'>
      <div className='max-w-prose mx-auto'>
        <div
          className='w-full prose prose-gray'
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></div>
      </div>
    </div>
  );
}
