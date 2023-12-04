import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import './globals.css';

import { HamburgerMenu } from '@/components/HamburgerMenu';

const NavBar = () => {
  return (
    <nav className='p-2'>
      <ul className='flex items-center space-x-2'>
        <li>
          <NavLink href='/' title='home' />
        </li>
        <li>
          <NavLink href='/about' title='about' />
        </li>
        <li>
          <NavLink href='/work' title='work' />
        </li>
        <li>
          <NavLink
            href='https://www.google.com'
            title='blog'
            target='_blank'
            rel='noopener noreferrer'
          >
            {/* <ExternalLinkIcon /> */}
            <BiLinkExternal />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
const NavLink = ({
  children,
  href = '',
  title,
  target = '',
  rel = '',
}: {
  children: React.ReactNode;
  href: Object;
  title: string;
  target: string;
  rel: string;
}) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='
      flex items-center px-2 py-1 font-semibold 
      text-black transition duration-1000 hover:scale-110
      hover:bg-black hover:text-white
      '
    >
      {title}
      {children}
    </Link>
  );
};
const SiteIcon = () => {
  return (
    <Link href='/' class='md:transparent backdrop-blur-sm'>
      <Image
        src='/icon_light.png'
        width={200}
        height={200}
        alt='test'
        className='dark:hidden'
      />
      <Image
        src='/icon_dark.png'
        width={200}
        height={200}
        alt='test'
        className='hidden dark:block'
      />
    </Link>
  );
};
const DarkModeBtn = () => {};
const LangBtn = () => {};

export const Header = () => {
  return (
    <header className='sticky top-0 flex flex-row flex-wrap items-start justify-between py-4 md:backdrop-blur-sm'>
      <div className='flex-none'>
        <SiteIcon />
      </div>
      <div className='hidden flex-none md:block '>
        <NavBar />
      </div>
      <div className='block flex-none md:hidden '>
        <HamburgerMenu />
      </div>
    </header>
  );
};
