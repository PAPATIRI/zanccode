import CardArticle from './CardArticle';
import EmptyPost from './EmptyPost';

const Articles = ({ articles }) => {
    const sortedArticle = articles.sort(
        (a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)
    );

    if (articles.length < 1) {
        return <EmptyPost />;
    }

    return (
        <div className="mt-4 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-2">
            {sortedArticle.map((article) => {
                return (
                    <CardArticle article={article} key={`article__${article.attributes.slug}`} />
                );
            })}
        </div>
    );
};

export default Articles;
