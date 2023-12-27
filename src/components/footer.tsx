import Link from 'next/link';
import { AiOutlineMediumWorkmark } from 'react-icons/ai';
import { DiGithubFull } from 'react-icons/di';
import { FaMedium } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaBlog } from 'react-icons/fa6';

import { Separator } from '@/components/ui/separator';

function LinkIcon({ children, link }: { children: React.ReactNode }) {
  return (
    <button className='p-3'>
      <Link
        className='flex flex-row bg-inherit'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='font-mono text-sm text-muted-foreground'>{children}</p>
      </Link>
    </button>
  );
}

function LinkText({ text, link }: { text: string }) {
  return (
    <button className='p-3'>
      <Link
        className='flex flex-row bg-inherit'
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='font-mono text-sm text-muted-foreground'>{text}</p>
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
        <LinkIcon link='https://medium.com/@snow7777man'>
          <FaMedium size='1em' />
        </LinkIcon>
        <LinkIcon link='https://www.linkedin.com/in/takagiyuuki/'>
          <FaLinkedinIn size='1em' />
        </LinkIcon>
        <LinkText text='GitHub' link='https://github.com/takagiyuuki' />
        <LinkText text='Medium' link='https://medium.com/@snow7777man' />
        <LinkText
          text='LinkedIn'
          link='https://www.linkedin.com/in/takagiyuuki/'
        />
      </div>
      <Copyright />
    </footer>
  );
};
