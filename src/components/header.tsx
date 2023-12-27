import Image from 'next/image';
import Link from 'next/link';
// import { HamburgerMenu } from '@/components/HamburgerMenu';
import { MdCircle, MdOutlineLanguage } from 'react-icons/md';
import { ModeToggle } from '@/components/modeToggle';

export const Header = () => {
  return (
    <header
      className='
    sticky top-0 flex flex-row flex-wrap
    items-center justify-between
    bg-inherit  py-2'
    >
      <SiteIcon />
      <NavBar />
      <ModeToggle />
      {/* <HamburgerMenu /> */}
    </header>
  );
};

const NavBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='group flex basis-auto flex-row items-center'>
      <MdCircle
        size='0.5em'
        className='invisible transition duration-700 group-hover:visible group-hover:animate-pulse'
      />
      <button
        className='
      px-2
      font-mono 
      '
      >
        {children}
      </button>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className='hidden flex-none md:block'>
      <ul className='flex basis-auto items-center'>
        <li>
          <NavBtn>
            <Link href='/about'>about</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <Link href='/about#contact'>contact</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <MdOutlineLanguage />
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
        {/* <Image
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
        /> */}
        <p className='px-2 font-mono'>Yuki Takagi</p>
      </Link>
    </div>
  );
};
const DarkModeBtn = () => {};
const LangBtn = () => {};
