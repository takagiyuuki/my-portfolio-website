/* eslint-disable tailwindcss/no-custom-classname */
import { OpenInWindow } from 'iconoir-react';
import Image from 'next/image';
import Link from 'next/link';
import { HamburgerMenu } from '@/components/HamburgerMenu';

export const Header = () => {
  return (
    <header
      className='
    sticky top-0 flex flex-row flex-wrap
    items-start justify-between
    py-2'
    >
      <SiteIcon />
      <NavBar />
      <HamburgerMenu />
    </header>
  );
};

const NavBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      className='
      hover:scale-80 flex items-center px-2
      font-semibold text-black transition duration-75
      hover:bg-black hover:text-white
      '
    >
      {children}
    </button>
  );
};

const NavBar = () => {
  return (
    <nav className='hidden flex-none md:block'>
      <ul className='flex basis-auto items-center'>
        <li>
          <NavBtn>
            <Link href='/'>home</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <Link href='/about'>about</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <Link href='/work'>work</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <Link
              href='https://medium.com/@snow7777man'
              target='_blank'
              rel='noopener noreferrer'
            >
              blog
            </Link>
            <OpenInWindow />
          </NavBtn>
        </li>
      </ul>
    </nav>
  );
};

const SiteIcon = () => {
  return (
    <div className='flex-none'>
      <Link href='/'>
        <Image
          src='/logo/icon_light.svg'
          width={40}
          height={40}
          alt='test'
          className='dark:hidden'
        />
        <Image
          src='/logo/icon_dark.svg'
          width={40}
          height={40}
          alt='test'
          className='hidden dark:block'
        />
      </Link>
    </div>
  );
};
const DarkModeBtn = () => {};
const LangBtn = () => {};
