import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { Navbar, Footer } from '@components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script defer src="https://kit.fontawesome.com/48972165bb.js" crossOrigin="anonymous"></Script>
  </ThemeProvider>
);

export default MyApp;
