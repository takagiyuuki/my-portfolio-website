import { LinkIcon } from '@/components/shared/LinkIcon';

export const SiteIcon = () => {
  return (
    <div>
      {/* Desktop Icon */}
      <div className='hidden md:block'>
        <LinkIcon href='/'>YUKI TAKAGI</LinkIcon>
      </div>
      {/* Mobile Icon */}
      <div className='block md:hidden'>
        <LinkIcon href='/'>TEST</LinkIcon>
      </div>
    </div>
  );
};
