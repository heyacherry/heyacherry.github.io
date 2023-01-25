import { GITHUB_URL } from '@/static';

const BUILT_BY = 'Built by Cherry Liang';

export const Footer = () => {
  return (
    <div className="text-base-200 mt-6 mb-10 text-sm flex justify-center">
      <a
        href={GITHUB_URL}
        className="link link-hover hover:text-accent"
        target="_blank"
        rel="noreferrer"
      >
        {BUILT_BY}
      </a>
    </div>
  );
};
