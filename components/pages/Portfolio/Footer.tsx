import { GITHUB_URL } from '@/static';
import { MyGithub, MyLinkedIn } from './SocialLinks';

const BUILT_BY = 'Built by Cherry Liang';

export const Footer = () => {
  return (
    <div className="text-base-200 mt-6 mb-10 text-sm flex flex-col items-center gap-2">
      <div className="display md:hidden flex justify-center gap-4">
        <MyLinkedIn size={18} />
        <MyGithub size={18} />
      </div>

      <div>
        <a
          href={GITHUB_URL}
          className="link link-hover hover:text-warning"
          target="_blank"
          rel="noreferrer"
        >
          {BUILT_BY}
        </a>
      </div>
    </div>
  );
};
