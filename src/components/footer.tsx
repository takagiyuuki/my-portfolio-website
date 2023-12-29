import Link from 'next/link';
import { FaLinkedinIn, FaMedium } from 'react-icons/fa6';

import { Separator } from '@/components/ui/separator';

type Props = {
  children?: React.ReactNode;
  href: string | URL;
  text?: string;
};

function LinkIcon({ children, href }: Props) {
  return (
    <button className='p-3'>
      <Link
        className='flex flex-row bg-inherit text-muted-foreground'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </Link>
    </button>
  );
}

function LinkText({ text, href }: Props) {
  return (
    <button className='p-3'>
      <Link
        className='flex flex-row bg-inherit font-mono text-sm text-muted-foreground'
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {text}
      </Link>
    </button>
  );
}

function Copyright() {
  return (
    <p className='text-center font-mono text-sm text-muted-foreground'>
      {'Copyright © '}
      <Link className='bg-inherit' href='https://mui.com/'>
        Yuki Takagi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

export const Footer = () => {
  return (
    <footer className='my-4'>
      <Separator className='my-2' />
      <div className='mt-auto flex flex-row flex-wrap items-center justify-center'>
        <LinkIcon href='https://medium.com/@snow7777man'>
          <FaMedium size='1em' />
        </LinkIcon>
        <LinkIcon href='https://www.linkedin.com/in/takagiyuuki/'>
          <FaLinkedinIn size='1em' />
        </LinkIcon>
        <LinkText text='GITHUB' href='https://github.com/takagiyuuki' />
        <LinkText text='MEDIUM' href='https://medium.com/@snow7777man' />
        <LinkText text='INSTAGRAM' href='https://medium.com/@snow7777man' />
        <LinkText
          text='LINKEDIN'
          href='https://www.linkedin.com/in/takagiyuuki/'
        />
      </div>
      <Copyright />
    </footer>
  );
};
