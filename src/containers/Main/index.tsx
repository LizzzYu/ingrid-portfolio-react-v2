import React, { useRef, useState } from 'react';
import ScrollSpy from 'react-ui-scrollspy';
import Header from '../../components/Header';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import { NAV, NAV_EN } from '../../data/headerData';
import HomePage from '../HomePage';
import Works from '../Works';
import ContactMe from '../ContactMe';
import { isTablet } from '../../hooks/useDevice';
import MobileHeader from '../../components/Mobile/MobileHeader';
import MobileNav from '../../components/Mobile/MobileHeader/MobileNav';

const Main = () => {
  const [currentSection, setCurrentSection] = useState<string>(NAV.MAIN);

  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const homePageRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {isTablet() ? (
        <>
          <MobileHeader onClick={() => setIsShowMenu(!isShowMenu)} />
          {isShowMenu && (
            <MobileNav
              setIsShowMenu={setIsShowMenu}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              // onClick={() => setIsScrolling(false)}
            />
          )}
        </>
      ) : (
        <Header />
      )}
      <ScrollSpy>
        <div
          ref={homePageRef}
          id={NAV_EN.MAIN}
        >
          <HomePage />
        </div>
        <div
          ref={aboutMeRef}
          id={NAV_EN.ABOUT_ME}
        >
          <AboutMe />
        </div>
        <div
          ref={experienceRef}
          id={NAV_EN.EXPERIENCE}
        >
          <Experience />
        </div>
        <div
          ref={worksRef}
          id={NAV_EN.WORKS}
        >
          <Works />
        </div>
        <div
          ref={contactMeRef}
          id={NAV_EN.CONTACT_ME}
        >
          <ContactMe />
        </div>
      </ScrollSpy>
    </>
  );
};

export default Main;
