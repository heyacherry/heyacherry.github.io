import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ScrollLink } from '@/components/ScrollLink';
import { ABOUT, EXPERIENCES } from '.';

const Prefix = () => <span className="text-primary mr-2">{'///'}</span>;
const ScrollLinkTitle = ({ label, to }: { label: string; to: string }) => (
  <ScrollLink className="hover:text-warning cursor-pointer" to={to}>
    <Prefix />
    {label}
  </ScrollLink>
);

export const Header = () => {
  return (
    <div className="hidden sm:flex w-full py-8 text-base-200  gap-4 flex-row sm:gap-8 items-center justify-end md:justify-between">
      <div className="flex gap-5">
        <ScrollLinkTitle label={ABOUT} to={ABOUT} />
        <ScrollLinkTitle label={EXPERIENCES} to={EXPERIENCES} />
      </div>

      <div className="hidden md:flex">
        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
};
