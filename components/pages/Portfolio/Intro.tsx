import { StringWithLink } from '@/components/StringWithLink';
import { SUBQUERY_URL } from '@/static';

const I_AM = 'Heya, my name is';
const NAME = 'Cherry Liang';
const I_CREATE_THINGS = 'I build things live on the internet.';

const INTRO_1 = `🦄 A motivated Software Engineer 🦄 focusing on build accessible and intuitive products. Currently, I work with `;
const currentGig = { label: 'SubQuery', link: SUBQUERY_URL };
const INTRO_2 =
  'to make Web3 data more accessible to Web2 as a senior software engineer.';

export const Intro = () => {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="text-primary">{I_AM}</div>
      <div className="font-heading text-highlight text-6xl sm:text-8xl my-5">
        {NAME}
      </div>
      <div className="font-heading text-4xl sm:text-6xl text-base-200">
        {I_CREATE_THINGS}
      </div>

      <div className="my-8 w-auto md:w-3/4">
        <StringWithLink
          startString={INTRO_1}
          link={currentGig}
          endString={INTRO_2}
          highlightColor="#4f46e5"
        />
      </div>
    </div>
  );
};
