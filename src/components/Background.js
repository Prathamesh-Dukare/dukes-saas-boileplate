/* eslint-disable @next/next/no-img-element */
export default function Background({ videoSrc, imgSrc, className }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {imgSrc ? (
        <img
          className='absolute inset-0 w-full h-full object-cover brightness-50 blur-sm'
          src={imgSrc}
          alt='Background'
        />
      ) : null}
      {videoSrc ? (
        <video
          className='absolute inset-0 w-full h-full object-cover brightness-[0.80]'
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source src={videoSrc} type='video/mp4' />
        </video>
      ) : null}
    </div>
  );
}
