/* eslint-disable tailwindcss/no-custom-classname */
const text: string = ` aaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaa
aaaaaaaaaaa aaaaaaaaaaaaaa a`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article
      className='
        prose
        prose-zinc
        dark:prose-invert
        md:prose-xl
        prose-strong:text-2xl prose-strong:font-serif
     '
    >
      {children}
      <div id='contact'>
        <div>contact</div>
        <p>{text}</p>
      </div>
    </article>
  );
}
