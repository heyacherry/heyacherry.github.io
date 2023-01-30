import { GITHUB_URL } from '@/static';
import { MyEmail, MyGithub, MyLinkedIn } from './SocialLinks';

const BUILT_BY = 'Built by Cherry Liang';
const ICON_SIZE = 18;

export const Footer = () => {
  return (
    <div className="text-base-200 mt-6 mb-10 text-sm flex flex-col items-center gap-2">
      <div className="display md:hidden flex justify-center gap-4">
        <MyLinkedIn size={ICON_SIZE} />
        <MyGithub size={ICON_SIZE} />
        <MyEmail size={ICON_SIZE} />
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
