import Head from 'next/head';
import React from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import { LottiePlayer, MotionPresence, Portfolio } from '@/components';
import { RainbowKit } from '@/components/RainbowKit';

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
        className="flex flex-col justify-center min-h-screen font-body text-xl px-2 sm:px-6"
      >
        <RainbowKit>
          <MotionPresence visible={showHello}>
            <LottiePlayer />
          </MotionPresence>
          {!showHello && <Portfolio />}
        </RainbowKit>
      </main>
    </>
  );
}
