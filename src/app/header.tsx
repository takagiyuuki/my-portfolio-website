/* eslint-disable tailwindcss/no-custom-classname */
import { OpenInWindow } from 'iconoir-react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { HamburgerMenu } from '@/components/HamburgerMenu';
import { Url } from 'next/dist/shared/lib/router/router';
import { title } from 'process';

export const Header = () => {
  return (
    <header className='sticky top-0 flex flex-row flex-wrap items-start justify-between py-2 backdrop-blur-[1px]'>
      <SiteIcon />
      <NavBar />
    </header>
  );
};

const NavLink = ({
  title,
  href,
  target = '_self',
  rel,
  icon,
}: {
  title: string;
  href?: string;
  target?: string;
  rel?: string;
  icon?: boolean;
}) => {
  const hrefLink: string = '/' + { {title} == 'home' ? '' :  { title } },
  return (
    <Link
      href={{ href } || { hrefLink }}
      target={target}
      id={title}
      rel={{ rel } || ''}
      className='hover:scale-80 flex items-center px-2 font-semibold text-black transition duration-75 hover:bg-black hover:text-white'
    >
      {title}
      {icon && <OpenInWindow />}
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className='hidden flex-none md:block'>
      <ul className='flex basis-auto items-center'>
        <li>
          <NavLink title='home' />
        </li>
        <li>
          <NavLink title='about' />
        </li>
        <li>
          <NavLink title='work' />
        </li>
        <li>
          <NavLink
            title='blog'
            href='https://medium.com/@snow7777man'
            target='_blank'
            rel='noopener noreferrer'
            icon=true
          />
        </li>
      </ul>
    </nav>
  );
};

// const NavBar = () => {
//   return (
//     <nav className='hidden flex-none md:block'>
//       <ul className='flex basis-auto items-center'>
//         <li>
//           <Link href='/' className={NavLinkClass}>
//             home
//           </Link>
//         </li>
//         <li>
//           <Link href='/about' className={NavLinkClass}>
//             about
//           </Link>
//         </li>
//         <li>
//           <Link href='/work' className={NavLinkClass}>
//             work
//           </Link>
//         </li>
//         <li>
//           <Link
//             href='https://medium.com/@snow7777man'
//             title='blog'
//             target='_blank'
//             rel='noopener noreferrer'
//             className={NavLinkClass}
//           >
//             blog
//             <OpenInWindow height={15} width={15} />
//             {/* <Image
//               src='/icons/open-new-window.svg'
//               alt='open_new_tab'
//               width={10}
//               height={10}
//             /> */}
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

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
