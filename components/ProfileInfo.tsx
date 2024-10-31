import userAvatar from '@/public/images/user-avatar.png';
import Image from 'next/image';
import Link from 'next/link';
import { PiGear, PiPower, PiUser } from 'react-icons/pi';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

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
            <div className="text-sm font-medium text-accent-800 capitalize">User name</div>
            <Link href="#" className="text-xs text-accent-600 hover:text-primary">
              example@gmail.com
            </Link>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <Link href="#" className="cursor-pointer">
            <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-accent-600 capitalize px-3 py-1.5 hover:!bg-[#e2e8f0] dark:hover:!bg-[#334155] cursor-pointer">
              <PiUser />
              Profile
            </DropdownMenuItem>
          </Link>
          <Link href="#" className="cursor-pointer">
            <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-accent-600 capitalize px-3 py-1.5 hover:!bg-[#e2e8f0] dark:hover:!bg-[#334155] cursor-pointer">
              <PiGear />
              Settings
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="mb-0 dark:bg-[#334155]" />
        <DropdownMenuItem className="flex items-center gap-2 text-sm font-medium text-accent-600 capitalize my-1 px-3 hover:!bg-[#e2e8f0] dark:hover:!bg-[#334155] cursor-pointer">
          <PiPower />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
