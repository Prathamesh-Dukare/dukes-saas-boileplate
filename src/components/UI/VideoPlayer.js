'use client';

const VideoPlayer = ({ videoSrcURL, poster }) => {
  return (
    <div className='relative w-full aspect-w-16 aspect-h-9 rounded shadow-2xl bg-gray-200 rotate-2'>
      <video
        muted
        className='-rotate-2 rounded shadow-xl'
        controls={true}
        poster={poster}
      >
        <source src={videoSrcURL} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
