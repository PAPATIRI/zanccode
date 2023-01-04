import ClientNavbar from '../pages/clientnavbar';
import Navbar from './Navbar';

const Layout = ({ children, categories }) => {
    return (
        <>
            <ClientNavbar categories={categories} />
            <Navbar categories={categories} />
            {children}
        </>
    );
};

export default Layout;
