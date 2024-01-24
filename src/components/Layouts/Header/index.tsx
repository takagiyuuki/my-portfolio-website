import { NavBar } from './NavBar';
import { SiteIcon } from './SiteIcon';

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
    </header>
  );
};
