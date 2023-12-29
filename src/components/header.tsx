import { DotFilledIcon, GlobeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
// import { HamburgerMenu } from '@/components/HamburgerMenu';
import { ModeToggle, ModeToggleCustom } from '@/components/modeToggle';

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
      {/* <HamburgerMenu /> */}
    </header>
  );
};

const NavBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='group flex basis-auto flex-row items-center'>
      <div className='invisible transition duration-700 group-hover:visible group-hover:animate-pulse'>
        <DotFilledIcon />
      </div>
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
            <Link href='/info'>INFO</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <Link href='/info#contact'>CONTACT</Link>
          </NavBtn>
        </li>
        <li>
          <NavBtn>
            <GlobeIcon />
          </NavBtn>
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <ModeToggleCustom />
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
        <div className='px-2 font-mono'>YUKI TAKAGI</div>
      </Link>
    </div>
  );
};
const DarkModeBtn = () => {};
const LangBtn = () => {};
