import { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import { fetchAPI } from '../../lib/api';

const Category = ({ category, categories }) => {
    const [scrolled, setScrolled] = useState(false);

    const seo = {
        metaTitle: category.attributes.name,
        metaDescription: `Semua artikel tentang ${category.attributes.name}`,
    };

    const heightOnScrollHandler = () => {
        window.scrollY >= 2 ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', heightOnScrollHandler);
    }, []);

    return (
        <Layout categories={categories.data}>
            <Seo seo={seo} />
            <div className={`pt-24 px-4 lg:px-36 md:h-screen ${scrolled ? 'h-fit' : 'h-screen'}`}>
                <h1 className="text-center font-black uppercase text-3xl lg:text-5xl text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-300% animate-left-to-right bg-clip-text ">
                    {category.attributes.name}
                </h1>
                <Articles articles={category.attributes.articles.data} />
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const categoriesRes = await fetchAPI('/categories', { fields: ['slug'] });

    return {
        paths: categoriesRes.data.map((category) => ({
            params: {
                slug: category.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAPI('/categories', {
        filters: { slug: params.slug },
        populate: {
            articles: {
                populate: '*',
            },
        },
    });
    const allCategories = await fetchAPI('/categories');

    return {
        props: {
            category: matchingCategories.data[0],
            categories: allCategories,
        },
        revalidate: 1,
    };
}

export default Category;
