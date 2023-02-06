import { RxDot } from 'react-icons/rx';
import { SectionTitle } from '@/components';
import { LottiePlayer } from '@/components/LottiePlayer';

const ABOUT = 'ABOUT ME';
const INTRO_01 = `Hello! My name is Cherry. I am a full stack developer and I enjoy creating accessible and user-friendly products bridging the requirements between business and users.`;
const INTRO_02 = `With 6+ years software development experiences, I have participated in a variety of projects: from web, mobile, desktop to Web3 Dapp and I always keen to learn something new.
`;

const INTRO_03 = `Here are a few technologies I’ve been working with recently:`;

const recentTechStacks = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'NextJS',
  'GraphQL',
  'web3.js/ether.js',
  'nestJS(nodeJS)',
  'AWS',
];

export const About = () => {
  return (
    <div className="mb-40">
      <SectionTitle title={ABOUT} />

      <div className="flex flex-col sm:flex-row items-center justify-around mt-8">
        <div className="w-auto sm:w-2/3 flex flex-col gap-4 ">
          <div>{INTRO_01}</div>
          <div>{INTRO_02}</div>
          <div>{INTRO_03}</div>
          <div className="flex flex-wrap">
            {recentTechStacks.map((stack) => (
              <div key={stack} className="flex gap-2 items-center w-1/2">
                <RxDot className="text-primary" />
                <span>{stack}</span>
              </div>
            ))}
          </div>
        </div>
        <LottiePlayer
          // path="/assets/girl-on-computer.json"
          path="/assets/female-avatar.json"
          playerStyle={{ width: 'auto' }}
        />
      </div>
    </div>
  );
};
