import { DotFilledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  href: string | URL;
  text?: string | null;
  target?: string;
  rel?: string;
};

export const Button = ({ href, children, target, rel, text }: Props) => {
  return (
    <div className='group flex basis-auto flex-row items-center'>
      <div
        className='
        hidden transform-none transition duration-700
        group-hover:block group-hover:-translate-x-3
        group-hover:animate-pulse group-hover:delay-75'
      >
        <DotFilledIcon />
      </div>
      <Link
        href={href}
        target={target}
        rel={rel}
      >
        <button className='px-2 font-mono'>
          {children}
          {text}
        </button>
      </Link>
    </div>
  );
};
