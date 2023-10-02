import type { AppProps } from 'next/app';
import Layout from '../app/components/layout';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import English from '../app/content/locales/en.json';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import Footer from 'components/footer';
// export const metadata = {
//   title: 'Welcome to my Portfolio',
//   description: 'Hire a senior software engineer for your scalable backends',
// };
export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider locale={shortLocale} messages={messages} onError={()=>null}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,700;1,300;1,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/icons/devicon-master/devicon.min.css" />
      </Head>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TAG}`} />
      <Script id="google-analytics">
       {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TAG}');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntlProvider>
  );
}
