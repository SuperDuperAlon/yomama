import Layout from '@/components/basic/Layout'
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Head>
                    <title>Yomama</title>
                </Head>
                <Layout>
                    <Main />
                    <NextScript />
                </Layout>
            </body>
        </Html>
    );
}
