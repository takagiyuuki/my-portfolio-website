import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdown: string = '/test.md';

export default function Test() {
  return <ReactMarkdown remarkPlugins={{ remarkGfm }} url={markdown} />;
}
