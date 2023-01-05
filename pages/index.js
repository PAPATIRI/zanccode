import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Articles from '../components/Articles';
import { fetchAPI } from '../lib/api';
import { useEffect, useState } from 'react';

export default function Home({ articles, categories, homepage }) {
    const [scrolled, setScrolled] = useState(false);

    const heightOnScrollHandler = () => {
        window.scrollY >= 2 ? setScrolled(true) : setScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', heightOnScrollHandler);
    }, []);
    return (
        <Layout categories={categories}>
            <Seo seo={homepage.attributes.seo} />
            <div
                className={`bg-transparent pt-20 md:pt-32 px-8 lg:px-24 xl:px-44 2xl:px-80 ${
                    scrolled ? 'h-fit' : 'h-screen'
                }`}>
                <div className="mr-0 mb-8 md:mb-16 lg:mr-40 lg:pl-8">
                    <h1 className="text-transparent pr-0 pl-0 lg:pl-3 xl:pl-5 lg:pr-10 text-center lg:text-left text-4xl md:text-5xl lg:text-6xl font-black uppercase bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-400% animate-left-to-right bg-clip-text ">
                        {homepage.attributes.hero.title}{' '}
                        <a href="https://www.instagram.com/zancc_/" className="italic">
                            syarif th.
                        </a>
                    </h1>
                </div>
                <Articles articles={articles} />
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    //panggil api secara paralel
    const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
        fetchAPI('/articles', { populate: ['image', 'category'] }),
        fetchAPI('/categories', { populate: '*' }),
        fetchAPI('/homepage', {
            populate: {
                hero: '*',
                seo: { populate: '*' },
            },
            encodeValuesOnly: true,
        }),
    ]);

    return {
        props: {
            articles: articlesRes.data,
            categories: categoriesRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    };
}
