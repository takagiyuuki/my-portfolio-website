import rehypePrism from '@mapbox/rehype-prism';
import createMDX from '@next/mdx';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

const withMDX = createMDX({
  // If you use remark-gfm, you'll need to use next.config.mjs
  // as the package is ESM only
  // https://github.com/remarkjs/remark-gfm#install
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      [remarkToc, { maxDepth: 3, heading: 'Index' }],
      remarkBreaks,
    ],
    rehypePlugins: [rehypeKatex, rehypePrism, rehypeSlug],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
