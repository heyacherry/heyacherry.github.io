import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ScrollLink } from '@/components/ScrollLink';
import { ABOUT, EXPERIENCES } from '.';
import { MyGithub, MyLinkedIn } from './SocialLinks';

const Prefix = () => <span className="text-primary mr-2">{'///'}</span>;
const ScrollLinkTitle = ({ label, to }: { label: string; to: string }) => (
  <ScrollLink className="hover:text-warning cursor-pointer" to={to}>
    <Prefix />
    {label}
  </ScrollLink>
);

export const Header = () => {
  return (
    <div className="w-full py-8 sm:pr-20 flex justify-end text-base-200">
      <div className="flex gap-4 flex-row sm:gap-8 items-center justify-center sm:justify-end">
        <ScrollLinkTitle label={ABOUT} to={ABOUT} />
        <ScrollLinkTitle label={EXPERIENCES} to={EXPERIENCES} />

        <span className="display md:hidden">
          <MyLinkedIn />
        </span>
        <span className="display md:hidden">
          <MyGithub />
        </span>

        <div className="hidden md:flex">
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </div>
  );
};
