'use client';
import { useEffect, useState } from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function ClientNavbar({ categories }) {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {
        if (typeof window != undefined) {
            window.addEventListener('click', handleClick);
        }

        return window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div
            onClick={() => setShowNav(!showNav)}
            className={`bg-slate-900/80 md:hidden fixed ${
                showNav ? 'w-screen h-screen top-0 right-0' : 'h-0 w-fit top-4 right-8'
            }`}>
            <div
                className="bg-transparent mb-3 flex items-center justify-end"
                onClick={() => setShowNav(!showNav)}>
                <Bars3CenterLeftIcon
                    className={`bg-indigo-600 p-1 w-10 h-10 rounded  text-indigo-200 rotate-180 ${
                        showNav ? 'mr-8 mt-4' : 'mr-0 mt-0'
                    }`}
                />
            </div>
            <div className="flex justify-end mr-8">
                <div
                    className={`transition-opacity duration-300 w-fit text-center bg-indigo-100 p-4 text-indigo-700 rounded ${
                        showNav ? 'visible opacity-100 ease-in' : 'invisible opacity-0 ease-out'
                    }`}>
                    <Link className="block px-4 py-2" href={`/`}>
                        All
                    </Link>
                    {categories.map((cat) => {
                        return (
                            <Link
                                key={cat.attributes.id}
                                className="block px-4 py-2"
                                href={`/category/${cat.attributes.slug}`}>
                                {cat.attributes.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
