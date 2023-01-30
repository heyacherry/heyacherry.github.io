import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';
import { RiMailStarLine } from 'react-icons/ri';
import { BsPatchCheck } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import { GITHUB_URL, LINKEDIN_URL, MY_EMAIL_BOX } from '@/static';
interface ISocialIcon extends Partial<HTMLAnchorElement> {
  size?: number;
  url?: string;
  Icon?: IconType;
  onClick?: () => void;
  className?: string;
}

const SocialIcon: React.FC<ISocialIcon> = ({
  size = 24,
  url,
  children,
  className,
  onClick,
  Icon,
}) => {
  const urlProps =
    url && url.startsWith('https')
      ? { target: '_blank', rel: 'noreferrer' }
      : {};

  return (
    <a
      className={`hover:text-warning ${className}`}
      href={url}
      onClick={onClick}
      {...urlProps}
    >
      <>
        {Icon && <Icon size={size} />}
        {children}
      </>
    </a>
  );
};

export const MyLinkedIn = ({ size }: { size?: number }) => (
  <SocialIcon Icon={FiLinkedin} url={LINKEDIN_URL} size={size} />
);

export const MyGithub = ({ size }: { size?: number }) => (
  <SocialIcon Icon={FaGithubAlt} url={GITHUB_URL} size={size} />
);

export const MyEmail = ({ size }: { size?: number }) => {
  const [isCopied, setIsCopied] = React.useState<boolean>();

  React.useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 3000);
    }
  }, [isCopied]);

  const notify = () => toast.success('You have copied my email : )');
  const onCopy = () => {
    setIsCopied(true);
    notify();
  };

  return (
    <div className="tooltip cursor-pointer" data-tip="Copy My Email.">
      <CopyToClipboard text={MY_EMAIL_BOX} onCopy={onCopy}>
        <SocialIcon
          Icon={isCopied ? BsPatchCheck : RiMailStarLine}
          url={`mailto:${MY_EMAIL_BOX}`}
          size={size}
          className={isCopied ? 'text-warning' : ''}
        />
      </CopyToClipboard>
      <Toaster containerClassName="text-sm mt-8" />
    </div>
  );
};

export const SocialLinks = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 md:right-10 xl:right-20 flex-col justify-center items-center gap-4 text-secondary">
      <MyLinkedIn />
      <MyGithub />
      <MyEmail size={26} />
      <div className="border-x h-52 w-0 border-secondary" />
    </div>
  );
};

export const EmailLink = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 md:left-10 xl:left-20 flex-col justify-center items-center gap-4 text-secondary">
      <div>{MY_EMAIL_BOX}</div>
      <div className="border-x h-52 w-0 border-secondary" />
    </div>
  );
};
