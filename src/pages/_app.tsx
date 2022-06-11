import Script from 'next/script';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

import { Navbar, Footer } from '@components';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script defer src="https://kit.fontawesome.com/48972165bb.js" crossOrigin="anonymous"></Script>
  </ThemeProvider>
);

export default MyApp;
