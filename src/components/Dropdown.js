import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DropDown({
  menuItems = [
    { name: 'Home 1', href: '/' },
    { name: 'Home 2', href: '/' },
    { name: 'Home 3', href: '/' },
  ],
}) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full items-center justify-center gap-x-1.5 rounded-md px-3 py-2 text-base font-semibold transition-all duration-200 hover:text-opacity-80'>
          Landing Pages
          <ChevronDownIcon className='-mr-1 h-4 w-4' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-950 ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            {menuItems.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={classNames(
                      active ? 'bg-gray-50 text-gray-950' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
