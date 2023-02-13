import Navbar from './Navbar';

const Layout = ({ children, categories, detailpage }) => {
    return (
        <>
            <Navbar detailpage={detailpage} categories={categories} />
            <div className="max-w-[1000px]">{children}</div>
        </>
    );
};

export default Layout;
