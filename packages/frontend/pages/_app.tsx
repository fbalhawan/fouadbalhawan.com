import type { AppProps } from 'next/app';
import Layout from '../app/components/layout';
import Link from 'next/link';
import Head from 'next/head';
// export const metadata = {
//   title: 'Welcome to my Portfolio',
//   description: 'Hire a senior software engineer for your scalable backends',
// };
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,700;1,300;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/icons/devicon-master/devicon.min.css" />
        
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
