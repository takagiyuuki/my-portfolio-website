import Link from 'next/link';

import SampleText from '@/app/SampleText';
import { Work } from '@/feature/Works';

const greeting: string = `
# Hi!

I'm a full-time infrastructure engineer working in Tokyo.
And I develop software in weekend on Github.
I am always looking for new and exciting services and software.
If you have any recommended services, please share them with me!
`;

export default function Home() {
  return (
    <>
      <Link href='/info'>
        <article className='prose-zinc line-clamp-3'>{greeting}</article>
      </Link>
      <SampleText />
      <Work />
    </>
  );
}
