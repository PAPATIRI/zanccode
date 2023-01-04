import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';

const NavbarMobile = ({ categories }) => {
    return (
        <Popover className="block md:hidden mr-8">
            <Popover.Button>
                <Bars3CenterLeftIcon className="h-10 w-10 text-indigo-100 cursor-pointer rotate-180" />
            </Popover.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1">
                <Popover.Panel className="absolute bg-indigo-100 rounded-md z-10 mt-3 right-8">
                    <div className="flex flex-col">
                        <li className="list-none px-8 py-4">
                            <Link
                                className="text-base text-center block capitalize text-indigo-900"
                                href="/">
                                All
                            </Link>
                        </li>
                        {categories.map((category) => {
                            return (
                                <li key={category.id} className="list-none px-8 py-4">
                                    <Link
                                        className="text-base text-center block capitalize text-indigo-900"
                                        href={`/category/${category.attributes.slug}`}>
                                        {category.attributes.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    );
};

export default NavbarMobile;
