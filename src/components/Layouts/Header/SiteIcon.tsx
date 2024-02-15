import { Button } from '@/components/Elements/Button';

export const SiteIcon = () => {
  return (
    <div>
      {/* Desktop Icon */}
      <div className='hidden md:block'>
        <Button href='/'>YUKI TAKAGI</Button>
      </div>
      {/* Mobile Icon */}
      <div className='block md:hidden'>
        <Button href='/'>TEST</Button>
      </div>
    </div>
  );
};
