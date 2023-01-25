import { SectionTitle } from '@/components';
import React from 'react';

const EDUCATION = 'Education';
const EDUCATION_DEGREE = 'Information Management & System @Bachelor';
const EDUCATION_YEAR = '2011 - 2015 @China';

export const Education = () => {
  return (
    <div className="mb-40">
      <SectionTitle title={EDUCATION} />

      <div className="mt-2 flex flex-col text-base-200">
        <div>{EDUCATION_DEGREE}</div>
        <div className="flex gap-8 text-base">
          <span>{EDUCATION_YEAR}</span>
        </div>
      </div>
    </div>
  );
};
