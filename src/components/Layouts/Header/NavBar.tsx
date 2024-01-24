// import { HamburgerMenu } from '@/components/HamburgerMenu';
import { ModeToggle } from '@/components/Layouts/Header/modeToggle';
import { LinkIcon } from '@/components/shared/LinkIcon';

export const NavBar = () => {
  return (
    <div>
      {/* Desktop */}
      <nav className='hidden flex-none md:block'>
        <ul className='flex basis-auto items-center'>
          <li>
            <LinkIcon href='/info'>INFO</LinkIcon>
          </li>
          <li>
            <LinkIcon href='/info#contact'>CONTACT</LinkIcon>
          </li>
          <li>
            <ModeToggle />
          </li>
          <li></li>
        </ul>
      </nav>
      {/* Moblie */}
      <div className='block md:hidden'>
        <ModeToggle />
      </div>
    </div>
  );
};
