import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import { NAV } from '../../data/headerData';
import HomePage from '../HomePage';
import { HEADER_HEIGHT } from '../../constants/constants';
import Works from '../Works';
import ContactMe from '../ContactMe';
import { isTablet } from '../../hooks/useDevice';
import MobileHeader from '../../components/Mobile/MobileHeader';
import MobileNav from '../../components/Mobile/MobileHeader/MobileNav';

const Main = () => {
  const [currentSection, setCurrentSection] = useState<string>(NAV.MAIN);
  const [isScrolling, setIsScrolling] = useState<boolean>(true);

  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const homePageRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const worksRef = useRef<HTMLDivElement | null>(null);
  const contactMeRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsScrolling(false);

      element.scrollIntoView();

      const rect = element.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const targetTop = rect.top + scrollTop;
      const paddingTop = HEADER_HEIGHT;

      const offset = targetTop - paddingTop;
      const scrollContainer =
        document.scrollingElement || document.documentElement;
      scrollContainer.scrollTop = offset;

      setTimeout(() => {
        setIsScrolling(true); // 滾動結束之後，設定 isScrolling 為 true
      }, 1000); // 調整延遲時間，讓滾軸可以有時間滾動到元素
    }
  };

  // 點擊跳至對應區塊
  useEffect(() => {
    if (!isScrolling) {
      handleScrollToElement(currentSection);
    }
  }, [currentSection, isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight - HEADER_HEIGHT;

      if (isScrolling) {
        const scrollPosition = window.scrollY;
        const homePageTop =
          homePageRef.current?.getBoundingClientRect().top ?? 0;
        const aboutMeTop = aboutMeRef.current?.getBoundingClientRect().top ?? 0;
        const experienceTop =
          experienceRef.current?.getBoundingClientRect().top ?? 0;
        const worksTop = worksRef.current?.getBoundingClientRect().top ?? 0;
        const contactMeTop =
          contactMeRef.current?.getBoundingClientRect().top ?? 0;

        if (
          scrollPosition >=
          contactMeTop + (isTablet() ? windowHeight * 6 : windowHeight * 4)
        ) {
          setCurrentSection(NAV.CONTACT_ME);
        } else if (
          scrollPosition >=
          worksTop + (isTablet() ? windowHeight * 4 : windowHeight * 3)
        ) {
          setCurrentSection(NAV.WORKS);
        } else if (
          scrollPosition >=
          experienceTop + (isTablet() ? windowHeight * 3 : windowHeight * 2)
        ) {
          setCurrentSection(NAV.EXPERIENCE);
        } else if (scrollPosition >= aboutMeTop + windowHeight) {
          setCurrentSection(NAV.ABOUT_ME);
        } else if (scrollPosition >= homePageTop) {
          setCurrentSection(NAV.MAIN);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

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
              onClick={() => setIsScrolling(false)}
            />
          )}
        </>
      ) : (
        <Header
          onClick={() => {
            setIsScrolling(false);
          }}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
      )}
      <div ref={homePageRef} id={NAV.MAIN}>
        <HomePage />
      </div>
      <div ref={aboutMeRef} id={NAV.ABOUT_ME}>
        <AboutMe />
      </div>
      <div ref={experienceRef} id={NAV.EXPERIENCE}>
        <Experience />
      </div>
      <div ref={worksRef} id={NAV.WORKS}>
        <Works />
      </div>
      {/* <div ref={contactMeRef} id={NAV.CONTACT_ME}>
        <ContactMe />
      </div> */}
    </>
  );
};

export default Main;
