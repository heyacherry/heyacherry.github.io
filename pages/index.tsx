import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cherry Liang</title>
        <meta
          name="description"
          content="Cherry Liang, Software Engineer, Portfolio "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Player
          autoplay
          loop
          src="https://assets5.lottiefiles.com/packages/lf20_Zz37yH.json"
          style={{ height: '50vh', width: '50vw' }}
        >
          <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </main>
    </>
  );
}
