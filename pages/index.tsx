import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import React from 'react';
import { LottiePlayer, MotionPresence, Portfolio } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showHello, setShowHello] = React.useState<boolean>(true);
  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowHello(false), 3500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Cherry Liang</title>
        <meta
          name="description"
          content="Cherry Liang, Software Engineer, React Front End Developer, Portfolio "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        data-theme="cherryTheme"
        className="flex flex-col justify-center min-h-screen font-body text-xl px-6"
      >
        <MotionPresence visible={showHello}>
          <LottiePlayer />
        </MotionPresence>
        {!showHello && <Portfolio />}
      </main>
    </>
  );
}