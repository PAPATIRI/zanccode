const EmptyPost = () => {
    return (
        <div className="flex flex-col items-center py-20 px-16 self-center mt-20 md:mt-32">
            <p className="text-6xl md:text-8xl mb-8 md:mb-10">😥</p>
            <p className="text-gray-700 dark:text-indigo-200 font-black text-2xl md:text-4xl text-center mb-1 md:mb-3 uppercase">
                Kosong???
            </p>
            <p className="text-gray-700 dark:text-indigo-200 font-normal text-base md:text-xl text-center">
                coba chek topik lain deh
            </p>
        </div>
    );
};

export default EmptyPost;
