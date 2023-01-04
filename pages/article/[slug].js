import ImageCustom from '../../components/ImageCustom';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { fetchAPI } from '../../lib/api';
import DOMPurify from 'isomorphic-dompurify';
import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import styles from './CustomImgStyle.module.css';

const Article = ({ article, categories }) => {
    const [scrolled, setScrolled] = useState(false);
    const imageUrl = article.attributes.image;
    const [contentArticle, setContentArticle] = useState(article.attributes.content);

    const heightOnScrollHandler = () => {
        window.scrollY >= 2 ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        setContentArticle(
            contentArticle.split('/uploads/').join(`${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads/`)
        );
        window.addEventListener('scroll', heightOnScrollHandler);
    }, []);

    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true,
    };

    return (
        <Layout categories={categories.data}>
            <Seo seo={seo} />
            <div
                className={`pt-20 px-8 lg:px-24 xl:px-48 2xl:px-80 ${
                    scrolled ? 'h-fit' : 'h-screen'
                }`}>
                <div className="flex flex-col items-center">
                    <h1 className="mb-2 font-black text-center capitalize text-xl lg:text-3xl text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text">
                        {article.attributes.title}
                    </h1>
                    <div className="mb-4">
                        <span className="text-slate-300 text-sm md:text-base">
                            By {article.attributes.author.data.attributes.name}{' '}
                        </span>
                        <span className="text-slate-300">
                            <Moment format="MMM Do YYYY">{article.attributes.publishedAt}</Moment>
                        </span>
                    </div>
                    <ImageCustom
                        gambar={imageUrl}
                        height={250}
                        width={720}
                        styles="h-48 object-cover rounded-md mb-12"
                    />
                </div>
                <div
                    className={`px-0 md:px-20 mb-10 text-indigo-200 text-base lg:text-lg ${styles.imageCustomStyle}`}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(contentArticle),
                        }}></div>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI('/articles', { fields: ['slug'] });

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articlesRes = await fetchAPI('/articles', {
        filters: {
            slug: params.slug,
        },
        populate: ['image', 'category', 'author.picture'],
    });
    const categoriesRes = await fetchAPI('/categories');

    return {
        props: {
            article: articlesRes.data[0],
            categories: categoriesRes,
        },
        revalidate: 1,
    };
}

export default Article;
