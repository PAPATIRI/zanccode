import Link from 'next/link';
import ImageCustom from './ImageCustom';

const CardArticle = ({ article }) => {
    return (
        <Link href={`/article/${article.attributes.slug}`}>
            <div className="bg-transparent rounded-md max-w-[400px] min-h-[270px] p-5 transition-all duration-75 hover:bg-gradient-to-br hover:from-blue-900 hover:via-indigo-900 hover:to-violet-900">
                <div className="rounded-md object-cover">
                    <ImageCustom
                        width={400}
                        height={100}
                        styles="rounded-md object-cover h-32"
                        gambar={article.attributes.image}
                    />
                </div>
                <div className="">
                    <p
                        className="text-sm font-normal lg:font-medium lg:text-base text-indigo-300 mt-2 mb-1"
                        id="category">
                        {article.attributes.category.data.attributes.name}
                    </p>
                    <p
                        className="text-xl md:text-2xl text-transparent font-bold capitalize bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text"
                        id="title">
                        {article.attributes.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default CardArticle;
