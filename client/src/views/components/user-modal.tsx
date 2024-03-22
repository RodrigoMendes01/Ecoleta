import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon, ExitIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';

export function UserModal() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className='outline-none' asChild>
        <button className='p-4 rounded-full bg-green-400 hover:bg-green-600 transition-all flex items-center justify-center text-white font-medium shadow-sm hover:shadow-md outline-none border-[1px] border-green-700'>
          RM
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[200px] bg-white shadow-lg rounded-md mr-2 will-change-[opacity,transform] p-2 data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}>
          <DropdownMenu.Item className='flex rounded-lg items-center justify-between outline-none hover:bg-green-200/10 py-2 px-4 transition-all cursor-pointer'>
            <Link to="#" className='flex-1'>Perfil</Link>
            <ChevronRightIcon className='text-green-500 w-5 h-5'/>
          </DropdownMenu.Item>

          <DropdownMenu.Item className='flex rounded-lg hover:bg-green-200/10 items-center justify-between outline-none py-2 px-4 transition-all cursor-pointer'>
            <Link to="#" className='flex-1'>Sair</Link>
            <ExitIcon className='text-green-500 w-5 h-5'/>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>

    </DropdownMenu.Root>
  );
}
