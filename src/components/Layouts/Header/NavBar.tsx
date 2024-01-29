// import { HamburgerMenu } from '@/components/HamburgerMenu';
import { Button } from '@/components/Elements/Button';
import { ModeToggle } from '@/components/Layouts/Header/modeToggle';

export const NavBar = () => {
  return (
    <div>
      {/* Desktop */}
      <nav className='hidden flex-none md:block'>
        <ul className='flex basis-auto items-center'>
          <li>
            <Button href='/info'>INFO</Button>
          </li>
          <li>
            <Button href='/info#contact'>CONTACT</Button>
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
