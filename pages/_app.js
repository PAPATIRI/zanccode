import { createContext } from 'react';
import '../styles/globals.css';
import App from 'next/app';
import { fetchAPI } from '../lib/api';
import '../styles/globals.css';
import Head from 'next/head';

export const GlobalContext = createContext({});

function MyApp({ Component, pageProps }) {
    const { global } = pageProps;

    return (
        <div className="container">
            <Head>
                <link
                    rel="shortcut icon"
                    type="icon"
                    href="getStrapiMedia(global.attributes.favicon)"
                />
            </Head>

            <GlobalContext.Provider value={global.attributes}>
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </div>
    );
}

MyApp.getInitialProps = async (context) => {
    const appProps = await App.getInitialProps(context);
    //fetch global setting from strapi
    const globalRes = await fetchAPI('/global', {
        populate: {
            favicon: '*',
            defaultSeo: {
                populate: '*',
            },
        },
    });
    //pass data to page via props
    return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;
