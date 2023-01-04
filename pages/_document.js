import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyCustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-gradient-to-br from-gray-900 to-indigo-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyCustomDocument;
