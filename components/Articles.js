import CardArticle from './CardArticle';

const Articles = ({ articles }) => {
    const sortedArticle = articles.sort(
        (a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
    );

    return (
        <div className="mt-10 flex flex-wrap justify-center gap-2">
            {sortedArticle.map((article) => {
                return (
                    <CardArticle article={article} key={`article__${article.attributes.slug}`} />
                );
            })}
        </div>
    );
};

export default Articles;
