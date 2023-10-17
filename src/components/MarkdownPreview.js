import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeExternalLinks from 'rehype-external-links';

const MarkdownPreview = ({ children }) => {
  return (
    <ReactMarkdown
      className='prose w-full prose-sm sm:prose-base prose-gray prose-a:underline prose-a:underline-offset-4 prose-a:text-green-600'
      skipHtml={false}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeExternalLinks]}
      components={{
        h1: 'h3',
        h2: 'h4',
        h3: 'h5',
        pre() {
          return null;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkdownPreview;
