import dynamic from 'next/dynamic';
/* import Navbar from './Navbar'; */

const Navbar = dynamic(() => import('./Navbar'), { ssr: false });

const Layout = ({ children, categories, detailpage }) => {
    return (
        <>
            <Navbar detailpage={detailpage} categories={categories} />
            <div className="max-w-[1000px]">{children}</div>
        </>
    );
};

export default Layout;
