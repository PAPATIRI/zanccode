const EmptyPost = () => {
    return (
        <div className="flex flex-col items-center justify-between py-20 px-16">
            <p className="text-6xl md:text-8xl mb-5 animate-pulse">😥</p>
            <p className="text-indigo-200 font-normal text-base md:text-xl text-center">
                yahh belum ada postingan nih
            </p>
            <p className="text-indigo-200 font-normal text-base md:text-xl text-center">
                coba chek topik lain yuk
            </p>
        </div>
    );
};

export default EmptyPost;
