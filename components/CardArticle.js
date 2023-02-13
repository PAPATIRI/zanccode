import Link from 'next/link';
import ImageCustom from './ImageCustom';

const CardArticle = ({ article }) => {
    return (
        <Link href={`/article/${article.attributes.slug}`}>
            <div className="bg-transparent rounded-md max-w-[320px] min-h-[270px] p-5 transition-all duration-400 hover:bg-gradient-to-br hover:from-indigo-200 dark:hover:from-blue-900 hover:via-purple-200 dark:hover:via-indigo-900 hover:to-pink-200 dark:hover:to-violet-900">
                <div className="rounded-md object-cover overflow-hidden">
                    <ImageCustom
                        width={400}
                        height={100}
                        styles="rounded-md object-cover h-32"
                        gambar={article.attributes.image}
                    />
                </div>
                <div className="">
                    <p
                        className="text-sm font-normal lg:font-medium lg:text-base text-gray-600 dark:text-gray-200 mt-2 mb-1"
                        id="category">
                        {article.attributes.category.data.attributes.name}
                    </p>
                    <p
                        className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-bold capitalize"
                        id="title">
                        {article.attributes.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CardArticle;
