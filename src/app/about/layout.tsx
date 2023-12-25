/* eslint-disable tailwindcss/no-custom-classname */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article
      className='
        lg:prose-3xl
        prose
        prose-slate
        font-sans
        dark:prose-invert
        md:prose-2xl
     '
    >
      {children}
    </article>
  );
}
