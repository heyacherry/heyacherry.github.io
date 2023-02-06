import { RxDot } from 'react-icons/rx';
import { SectionTitle } from '@/components';
import React from 'react';

const WORK_EXPERIENCES = 'Other Experiences';

const OPEN_SOURCE_CONTRIBUTOR = 'Open source contributor';
const OPEN_SOURCE_CONTRIBUTOR_DESC =
  'Make contributions to projects such as polkadot.js, awesome-vue(54k starts), etc.';

const HACKATHON = 'Polkaworld Cup Hackathon - 2nd place';
const HACKATHON_DESC =
  'The First Substrate Blockchain Hackathon hosted in Shanghai, CN (Sep. 2019).';

const FCC = 'Organiser of FreeCodeCamp community';
const FCC_DESC = 'FreeCodeCamp Guangzhou China (2016 - 2017).';

const AIESEC = 'Volunteer of International Student AIESEC (2013)';

const myExperiences = [
  { title: OPEN_SOURCE_CONTRIBUTOR, details: [OPEN_SOURCE_CONTRIBUTOR_DESC] },
  { title: HACKATHON, details: [HACKATHON_DESC] },
  { title: FCC, details: [FCC_DESC] },
  { title: AIESEC },
];

interface IExperience {
  title: string;
  details?: Array<string>;
}

// TODO: Add Link
const Experience: React.FC<IExperience> = ({ title, details }) => {
  return (
    <>
      <div>
        <span>{title}</span>
      </div>
      {details && (
        <div className="mb-5 text-base pr-4 text-base-200">
          {details.map((work) => (
            <div key={work} className="flex flex-cl">
              <div className="h-[28px] flex items-center mr-1">
                <RxDot className="text-primary w-4" />
              </div>
              <div>{work}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const OtherExperiences = () => {
  return (
    <div className="mb-40">
      <SectionTitle title={WORK_EXPERIENCES} />

      <div className="mt-8 flex gap-9">
        <div className="sm:px-4 py-2">
          {myExperiences.map((experience) => (
            <Experience {...experience} key={experience.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
