import Link from 'next/link';
import ImageCustom from './ImageCustom';

const CardArticle = ({ article }) => {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        <Link href={`/article/${article.attributes.slug}`}>
            <div className="min-h-[330px] bg-transparent rounded-md max-w-[320px] min-h-[270px] p-5 transition-all duration-400 hover:bg-gradient-to-br hover:from-indigo-200 dark:hover:from-blue-900 hover:via-purple-200 dark:hover:via-indigo-900 hover:to-pink-200 dark:hover:to-violet-900">
                <div className="rounded-md object-cover overflow-hidden">
                    <ImageCustom
                        width={400}
                        height={100}
                        styles="rounded-md object-cover h-32"
                        gambar={article.attributes.image}
                    />
                </div>
                <div className="mt-2">
                    <div className="flex item-center justify-between mb-2">
                        <p
                            className="text-sm font-normal lg:font-medium lg:text-base text-gray-600 dark:text-gray-400 mt-2 mb-1"
                            id="category">
                            {new Date(article.attributes.publishedAt).toLocaleDateString(
                                'id-ID',
                                options
                            )}
                        </p>
                        <p
                            className="text-sm font-normal lg:font-medium lg:text-base text-gray-600 dark:text-gray-400 mt-2 mb-1"
                            id="category">
                            {article.attributes.category.data.attributes.name}
                        </p>
                    </div>
                    <p
                        className="text-lg md:text-xl text-center text-gray-800 dark:text-gray-300 font-bold capitalize"
                        id="title">
                        {article.attributes.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CardArticle;
