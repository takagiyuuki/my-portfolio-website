import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

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
      </ul>
    </nav>
  );
};
const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className='
      px-2 py-1 font-semibold text-black duration-1000 
      hover:scale-110 hover:animate-bounce hover:bg-black hover:text-white 
      focus:scale-110
      '
    >
      {title}
    </Link>
  );
};
const SiteIcon = () => {
  return (
    <Link href='/'>
      <Image src='/favicon.ico' width={100} height={100} alt='test' />
    </Link>
  );
};
const HumbergerMenu = () => {};
const DarkModeBtn = () => {};
const LangBtn = () => {};

export const Header = () => {
  return (
    <header>
      <SiteIcon />
      <NavBar />
    </header>
  );
};
