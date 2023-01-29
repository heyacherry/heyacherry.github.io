import { FiLinkedin } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';
import { RiMailStarLine } from 'react-icons/ri';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { GrMailOption } from 'react-icons/gr';
import { IoMailUnreadOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { GITHUB_URL, LINKEDIN_URL, MY_EMAIL_BOX } from '@/static';
import { IconType } from 'react-icons';

interface ISocialIcon extends Partial<HTMLAnchorElement> {
  size?: number;
  url?: string;
  Icon?: IconType;
  onClick?: () => void;
}

const SocialIcon: React.FC<ISocialIcon> = ({
  size = 24,
  url,
  Icon,
  children,
  onClick,
}) => {
  const urlProps =
    url && url.startsWith('https')
      ? { target: '_blank', rel: 'noreferrer' }
      : {};

  return (
    <a
      className="hover:text-warning"
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

export const MyEmail = ({ size }: { size?: number }) => (
  <div
    className="tooltip cursor-pointer"
    data-tip="Grab/Copy My Email."
    onClick={() => {
      navigator.clipboard.writeText(MY_EMAIL_BOX);
    }}
  >
    <RiMailStarLine className="hover:text-warning" size={size} />
  </div>
);

export const SocialLinks = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 md:right-20 flex-col justify-center items-center gap-4 text-secondary">
      <MyLinkedIn />
      <MyGithub />
      <MyEmail size={26} />
      <div className="border-x h-52 w-0 border-secondary" />
    </div>
  );
};
