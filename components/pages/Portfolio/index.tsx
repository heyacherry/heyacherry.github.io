import { About } from './About';
import { Education } from './Education';
import { Footer } from './Footer';
import { Intro } from './Intro';
import { OtherExperiences } from './OtherExperiences';
import { WorkExperiences } from './WorkExperiences';

export const Portfolio = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-0">
      <div className="w-full lg:max-w-[1000px] leading-relaxed">
        <Intro />
        <About />
        <WorkExperiences />
        <OtherExperiences />
        <Education />
        <Footer />
      </div>
    </div>
  );
};
