import Head from 'next/head';
import { useRouter } from 'next/router';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import React from 'react';
import { LottiePlayer, MotionPresence } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [showHello, setShowHello] = React.useState<boolean>(true);
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => setShowHello(false), 3500);
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
      <main className={styles.main}>
        <MotionPresence visible={showHello}>
          <LottiePlayer />
        </MotionPresence>
        {!showHello && <div>Portfolio</div>}
      </main>
    </>
  );
}
