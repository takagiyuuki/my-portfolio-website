'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export function HamburgerMenu() {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button>
            <HamburgerMenuIcon />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className='
          min-w-[220px] rounded-md 
          p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]
          backdrop-blur-xl will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade
          data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade'
          >
            <DropdownMenu.Label>Menu</DropdownMenu.Label>
            <DropdownMenu.Separator className='m-[5px] h-[1px] bg-black' />
            <DropdownMenu.Item className='active:font-bold'>
              <Link href='/'>Home</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href='/work'>Work</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href='/about'>About</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href='/'>Blog</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Link href='/'>Contact</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
