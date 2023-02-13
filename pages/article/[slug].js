import ImageCustom from '../../components/ImageCustom';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { fetchAPI } from '../../lib/api';
import DOMPurify from 'isomorphic-dompurify';
import Moment from 'react-moment';
import { useEffect, useState } from 'react';
import styles from './Custom.module.css';
import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

const Article = ({ article, categories }) => {
    const [scrolled, setScrolled] = useState(false);
    const imageUrl = article.attributes.image;
    const [contentArticle, setContentArticle] = useState(article.attributes.content);
    const router = useRouter();

    const isBrowser = () => typeof window !== 'undefined';
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const heightOnScrollHandler = () => {
        window.scrollY >= 10 ? setScrolled(true) : setScrolled(false);
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
        <Layout detailpage categories={categories.data}>
            <Seo seo={seo} />
            <div
                className={`px-4 lg:px-36 pt-16 h-screen'
                }`}>
                <button
                    type="button"
                    className="flex items-center gap-3 text-base md:text-lg text-gray-600 dark:text-gray-200 mb-5"
                    onClick={() => router.back()}>
                    <FaArrowLeft size={16} className="text-gray-600 dark:text-gray-200" />
                    kembali
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="mb-2 font-black text-center capitalize text-xl lg:text-3xl text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 bg-clip-text">
                        {article.attributes.title}
                    </h1>
                    <div className="mb-4">
                        <span className="text-gray-600 dark:text-slate-300 text-sm md:text-base">
                            By {article.attributes.author.data.attributes.name}{' '}
                        </span>
                        <span className="text-gray-600 dark:text-slate-300">
                            <Moment format="MMM Do YYYY">{article.attributes.publishedAt}</Moment>
                        </span>
                    </div>
                    <ImageCustom
                        gambar={imageUrl}
                        height={280}
                        width={720}
                        styles="h-48 object-cover rounded-md mb-12"
                    />
                </div>
                <div
                    className={`mb-10 text-gray-700 dark:text-indigo-200 text-base lg:text-lg leading-7 lg:leading-8 ${styles.imageCustomStyle}`}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(contentArticle),
                        }}></div>
                </div>
                {scrolled && (
                    <button
                        className="fixed bottom-4 right-8 p-1 bg-indigo-600 rounded"
                        onClick={scrollToTop}>
                        <ChevronUpIcon className="w-8 h-8 text-indigo-200" />
                    </button>
                )}
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
