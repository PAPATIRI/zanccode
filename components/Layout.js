import Navbar from './Navbar';

const Layout = ({ children, categories }) => {
    return (
        <>
            <Navbar categories={categories} />
            {children}
        </>
    );
};

export default Layout;
