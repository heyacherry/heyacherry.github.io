import { Element } from 'react-scroll';
import { About } from './About';
import { Education } from './Education';
import { Footer } from './Footer';
import { Header } from './Header';
import { Intro } from './Intro';
import { OtherExperiences } from './OtherExperiences';
import { SocialLinks } from './SocialLinks';
import { WorkExperiences } from './WorkExperiences';

export const ABOUT = 'About';
export const EXPERIENCES = 'Experiences';

export const Portfolio = () => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-0 relative">
      <div className="w-full lg:max-w-[1000px] leading-relaxed">
        <Header />
        <Intro />
        <Element name={ABOUT}>
          <About />
        </Element>
        <Element name={EXPERIENCES}>
          <WorkExperiences />
        </Element>
        <OtherExperiences />
        <Education />
        <Footer />
      </div>
      <SocialLinks />
    </div>
  );
};
