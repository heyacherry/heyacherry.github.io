import React from 'react';
import ReactGA from 'react-ga';
import { Element } from 'react-scroll';
import { About } from './About';
import { Education } from './Education';
import { Footer } from './Footer';
import { Header } from './Header';
import { Intro } from './Intro';
import { OtherExperiences } from './OtherExperiences';
import { LeftDivided, SocialLinks } from './SocialLinks';
import { WorkExperiences } from './WorkExperiences';

export const ABOUT = 'About';
export const EXPERIENCES = 'Experiences';

ReactGA.initialize(process.env.GA_ID ?? '');

export const Portfolio = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 sm:px-0 relative">
      <Header />
      <div className="w-full lg:max-w-[1000px] leading-relaxed sm:px-4">
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
      <LeftDivided />
      <SocialLinks />
    </div>
  );
};
