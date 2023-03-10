import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyCustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head></Head>
                <body className="flex flex-col items-center bg-indigo-100 dark:bg-gradient-to-br from-gray-900 to-indigo-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyCustomDocument;
