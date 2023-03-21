import { AppProps } from 'next/app';
import { Ui } from '@next-repo/ui'
import { mylibWp } from '@next-repo/mylib-wp';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  console.log(mylibWp());
  return (
    <>
      <Head>
        <title>Welcome to demo!</title>
      </Head>
      <main className="app">
        <Ui />
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default CustomApp;
