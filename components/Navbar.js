import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = ({ categories }) => {
    const [navbarBorder, setNavbarBorder] = useState(false);

    const navbarOnScrollBehavior = () => {
        window.scrollY >= 80 ? setNavbarBorder(true) : setNavbarBorder(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', navbarOnScrollBehavior);
    }, []);

    return (
        <nav
            className={`hidden md:block py-4 h-14 fixed top-0 left-0 right-0 bg-transparent px-0 md:px-40 ${
                navbarBorder ? 'bg-gray-900/95' : ''
            }`}>
            <div className="flex justify-center">
                <ul className="flex items-center justify-center gap-x-8">
                    <Link href={'/'} className="text-base block capitalize text-gray-100">
                        All
                    </Link>
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <Link
                                    className="text-base block capitalize text-gray-100"
                                    href={`/category/${category.attributes.slug}`}>
                                    {category.attributes.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
