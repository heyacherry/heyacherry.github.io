import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ScrollLink } from '@/components/ScrollLink';
import { ABOUT, EXPERIENCES } from '.';
import { LottiePlayer } from '@/components/LottiePlayer';

const Prefix = () => <span className="text-primary mr-2">{'///'}</span>;
const ScrollLinkTitle = ({ label, to }: { label: string; to: string }) => (
  <ScrollLink className="hover:text-warning cursor-pointer" to={to}>
    <Prefix />
    {label}
  </ScrollLink>
);

export const Header = () => {
  return (
    <div className="hidden lg:px-20 sm:flex w-full py-8 text-base-200 gap-4 flex-row sm:gap-8 items-center justify-end md:flex-end shadow-xl">
      <div className="position: absolute left-9">
        <LottiePlayer
          path="/assets/star.json"
          playerStyle={{ height: '60px', width: '60px' }}
        />
      </div>
      <div className="flex gap-5">
        <ScrollLinkTitle label={ABOUT} to={ABOUT} />
        <ScrollLinkTitle label={EXPERIENCES} to={EXPERIENCES} />
      </div>

      {/* <div className="hidden md:flex">
        <ConnectButton showBalance={false} />
      </div> */}
    </div>
  );
};
