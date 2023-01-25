import { FiLinkedin } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';
import { GITHUB_URL, LINKEDIN_URL } from '@/static';

export const MyLinkedIn = () => (
  <a
    className="hover:text-warning"
    href={LINKEDIN_URL}
    target="_blank"
    rel="noreferrer"
  >
    <FiLinkedin size={24} />
  </a>
);

export const MyGithub = () => (
  <a
    className="hover:text-warning"
    href={GITHUB_URL}
    target="_blank"
    rel="noreferrer"
  >
    <FaGithubAlt size={24} />
  </a>
);

export const SocialLinks = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 md:right-20 flex-col justify-center items-center gap-4 text-secondary">
      <MyLinkedIn />
      <MyGithub />
      <div className="border-x h-52 w-0 border-secondary" />
    </div>
  );
};
