import type { AppProps } from 'next/app';
import Layout from '../app/components/layout';
import Head from 'next/head';
import Script from 'next/script';
import English from '../app/content/locales/en.json';
import { useRouter } from 'next/router';
import { useMemo, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];
  
  // useEffect(() => {
    
  // }, []);

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
