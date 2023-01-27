import { RxDot } from 'react-icons/rx';
import { SectionTitle, NotationButton } from '@/components';
import React from 'react';

const OTHER_EXPERIENCES = 'Work Experiences';

const SUBQUERY = 'SubQuery';
const subQueryWork = [
  'Lead the development of a data scanner - Subquery Network Explorer: from front-end to data middleware,resulting in definite performance improvement and on-time delivery.',
  'Build UI Component library and SDKs helping standardize and efficiency on developments.',
  'Designed and built a data dashboard - Subvis(deprecated) and released several iterations.',
  'Plan and prioritize tickets; provide code review and mentorship.',
];
const subQueryExperiences = {
  title: 'Senior Software Engineer',
  gig: 'SubQuery',
  gigLink: '',
  duration: 'Nov 2021 - Present',
  works: subQueryWork,
};
const PALOMA = 'Paloma';
const palomaWork = [
  'Implemented features for Afterpay mobile app via React Native, using by over 13 millions users around the world.',
  'Participate requirements meeting, cross-team/release support to ship features on time.',
];
const palomaExperiences = {
  title: 'Software Engineer',
  gig: 'Paloma(Prev. Dovetail)',
  gigLink: '',
  duration: 'May 2021 - Nov 2021',
  works: palomaWork,
};
const ASB = 'ASB Bank';
const asbWork = [
  'Designed and built insurance payment web application from scratch and delivered phrase 1.',
  'Built and maintained an internal shared component lib, which saved efforts across projects.',
  'Sorted out the plans and requirements via cross team collaborations.',
];
const asbExperiences = {
  title: 'Senior Software Engineer',
  gig: 'ASB Bank',
  gigLink: '',
  duration: 'May 2021 - Nov 2021',
  works: asbWork,
};
const CEN = 'Centrality.ai';
const cenWork = [
  'Built an open source, cross-platform crypto wallet , based on substrate/polkadot network.',
  'Implemented features for a TGE(token sale) DApp with KYC feature on Ethereum network.',
  'Built whole-set integration tests for TGE app using Cypress, ensuring smooth prod deliveries',
];
const cenExperiences = {
  title: 'Full Stack Developer',
  gig: 'Centrality.ai',
  gigLink: '',
  duration: 'Jul 2017 - Aug 2020',
  works: cenWork,
};

const HSBC = 'HSBC';
const hsbcWork = [
  'Maintained and developed existing application systems - foreign exchange platform.',
  'Performed database(Oracle) administrative responsibilities, such as production backup.',
  'Collaborated with distributed teams and worked within Agile methodologies.',
];

const hsbcExperiences = {
  title: 'Full Stack Developer',
  gig: 'HSBC',
  gigLink: '',
  duration: 'Aug 2015 - Apr 2017',
  works: hsbcWork,
};

const whereIHaveBeen: Array<
  typeof SUBQUERY | typeof PALOMA | typeof ASB | typeof CEN | typeof HSBC
> = [SUBQUERY, PALOMA, ASB, CEN, HSBC];
const works = {
  [SUBQUERY]: subQueryExperiences,
  [PALOMA]: palomaExperiences,
  [ASB]: asbExperiences,
  [CEN]: cenExperiences,
  [HSBC]: hsbcExperiences,
};

interface IExperience {
  title: string;
  gig: string;
  gigLink: string;
  duration: string;
  works: Array<string>;
}

// TODO: Link Performance
const Experience: React.FC<IExperience> = ({
  title,
  gig,
  gigLink,
  duration,
  works,
}) => {
  return (
    <>
      <div className="text-2xl flex flex-col sm:flex-row gap-1">
        <div>{title}</div>
        <div className="text-primary">
          @
          <a
            href={gigLink}
            target="_blank"
            rel="noreferrer"
            className="link link-hover"
          >
            {gig}
          </a>
        </div>
      </div>
      <div className="text-sm">{duration}</div>
      <div className="mt-5 text-lg pr-4">
        {works.map((work) => (
          <div key={work} className="flex flex-cl">
            <div className="h-[28px] flex items-center mr-1">
              <RxDot className="text-primary w-4" />
            </div>
            <div>{work}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export const WorkExperiences = () => {
  const [activeTab, setActiveTab] = React.useState<string>(SUBQUERY);
  const [work, setWork] = React.useState<IExperience>(works[SUBQUERY]);

  const onChooseTab = (
    gig: typeof SUBQUERY | typeof PALOMA | typeof ASB | typeof CEN | typeof HSBC
  ) => {
    setActiveTab(gig);
    setWork(works[gig]);
  };

  return (
    <div className="mb-40">
      <SectionTitle title={OTHER_EXPERIENCES} />

      <div className="mt-8 flex gap-9 overflow-scroll flex-col sm:flex-row">
        <div className="btn-group sm:btn-group-vertical flex-wrap">
          {whereIHaveBeen.map((gig) => (
            <NotationButton
              key={gig}
              active={gig === activeTab}
              onClick={() => onChooseTab(gig)}
              notationProps={{ color: '#4f46e5' }}
              buttonStyles={gig === activeTab ? 'text-primary' : ''}
            >
              {gig}
            </NotationButton>
          ))}
        </div>

        <div className="sm:px-4 py-2 text-base-200">
          <Experience {...work} />
        </div>
      </div>
    </div>
  );
};
