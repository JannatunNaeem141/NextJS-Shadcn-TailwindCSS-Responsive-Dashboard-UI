import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import userAvatar from '@/public/images/user-avatar.png';
import Image from 'next/image';

export default function ProfileInfo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="flex items-center">
          <Image src={userAvatar} alt="User Avatar" width={36} height={36} className="rounded-full" priority />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-0" align="end">
        <DropdownMenuLabel className="flex gap-2 items-center mb-1 p-3">
          <Image src={userAvatar} alt="User Avatar" width={36} height={36} className="rounded-full" />
          <div>
            <div className="text-sm font-medium text-default-800 capitalize">User name</div>
            <Link href='#' className="text-xs text-default-600 hover:text-primary">
              example@gmail.com
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {[
            {
              name: 'profile',
              icon: 'heroicons:user',
              href: '/profile',
            },
          ].map((item, index) => (
            <Link href={item.href} key={`info-menu-${index}`} className="cursor-pointer">
              <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize px-3 py-1.5 dark:hover:bg-background cursor-pointer">
                {/* <Icon icon={item.icon} className="w-4 h-4" /> */}
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="mb-0 dark:bg-background" />
        <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-default-600 capitalize my-1 px-3 dark:hover:bg-background cursor-pointer">
          {/* <Icon icon="heroicons:power" className="w-4 h-4" /> */}
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
