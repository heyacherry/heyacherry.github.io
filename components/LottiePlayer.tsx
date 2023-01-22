import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { CSSProperties } from 'react';

const helloJSON = '/assets/hello.json';

interface ILottiePlayer {
  path?: string;
  playerStyle?: CSSProperties;
}

export const LottiePlayer: React.FC<ILottiePlayer> = ({
  path,
  playerStyle,
}) => (
  <Player
    autoplay
    loop
    src={path || helloJSON}
    style={{ height: '50vh', width: '50vw', ...playerStyle }}
  >
    <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
  </Player>
);
