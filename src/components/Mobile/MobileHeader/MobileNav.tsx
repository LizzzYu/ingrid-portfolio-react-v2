import React, { Dispatch, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';
import { NAV_DATA } from '../../../data/headerData';
import MobileNavItem from './MobileNavItem';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5); /* 背景透明度 50% */
  backdrop-filter: blur(5px); /* 模糊效果 */
  z-index: 3;
`;

const Content = styled.div`
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 80px;
  left: 0;

  box-sizing: border-box;
  padding: 0 30px 0;
`;

type MobileNavProps = {
  setCurrentSection: Dispatch<SetStateAction<string>>;
  setIsShowMenu: Dispatch<SetStateAction<boolean>>;
  currentSection: string;
  onClick?: () => void;
};

const MobileNav = ({
  setIsShowMenu,
  currentSection,
  setCurrentSection,
  onClick,
}: MobileNavProps) => {
  const handleClickBackgroundClose = (event: React.SyntheticEvent) => {
    if (event.target === event?.currentTarget) {
      setIsShowMenu(false);
    }
  };

  const onMobileNavClick = (name: string) => {
    setIsShowMenu(false);
    setCurrentSection(name);

    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    // 打開彈窗食禁止背景滾動
    document.body.style.overflow = 'hidden';

    // 關閉彈窗時恢復背景滾動
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Wrapper onClick={handleClickBackgroundClose}>
      <Content>
        {NAV_DATA.map((nav, index) => (
          <MobileNavItem
            key={index}
            name={nav.name}
            link={nav.link}
            currentSection={currentSection}
            setIsShowMenu={setIsShowMenu}
            onClick={() => onMobileNavClick(nav.name)}
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default MobileNav;
