import Link from 'next/link';

import { LinkIcon } from '@/components/shared/LinkIcon';
import { Separator } from '@/components/ui/separator';

function Copyright() {
  return (
    <p className='text-center font-mono text-sm text-muted-foreground '>
      {'Copyright © '}
      <Link
        className='bg-inherit'
        href='https://www.linkedin.com/in/takagiyuuki/my-portfolio-website'
      >
        Yuki Takagi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </p>
  );
}

export const Footer = () => {
  const ExternalSiteLinkIcon = ({
    href,
    text,
  }: {
    href: string;
    text: string;
  }) => {
    return (
      <LinkIcon
        href={href}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='text-muted-foreground'>{text}</div>
      </LinkIcon>
    );
  };
  return (
    <footer className='my-4'>
      <Separator className='my-2' />
      <div className='mt-auto flex flex-row flex-wrap items-center justify-center'>
        <ExternalSiteLinkIcon
          text='GITHUB'
          href='https://github.com/takagiyuuki'
        />
        <ExternalSiteLinkIcon
          text='MEDIUM'
          href='https://medium.com/@snow7777man'
        />
        <ExternalSiteLinkIcon
          text='INSTAGRAM'
          href='https://medium.com/@snow7777man'
        />
        <ExternalSiteLinkIcon
          text='LINKEDIN'
          href='https://www.linkedin.com/in/takagiyuuki/'
        />
      </div>
      <Copyright />
    </footer>
  );
};
