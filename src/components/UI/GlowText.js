export default function GlowText({ children, theme = 'dark' }) {
  return (
    <span
      className={`${
        theme === 'dark' ? 'bg-green-700 text-white' : 'text-green-700 bg-white'
      } px-2 py-2 shadow-md rounded-md inline-block`}
    >
      {children}
    </span>
  );
}
