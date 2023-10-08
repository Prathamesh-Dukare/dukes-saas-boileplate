/**
 * GlowText Component
 *
 * A reusable component for displaying text with a glowing background.
 *
 * @param {Object} props - Component props
 * @param {string} [props.children] - The text content to display with the glowing background.
 * @param {string} [props.theme='dark'] - The theme for the glowing text ('dark' or 'light').
 * @returns {JSX.Element} - Rendered GlowText component.
 */
export default function GlowText({ children, theme = 'dark' }) {
  return (
    <span
      className={`${
        theme === 'dark' ? 'bg-green-700 text-white' : 'text-green-700 bg-white'
      } p-2 shadow-md rounded-md inline-block m-2`}
    >
      {children}
    </span>
  );
}
