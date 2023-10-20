import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { contentTextStyle } from '../../../styles/typography';

const Wrapper = styled.a`
  width: 100%;
  height: 80px;
  background-color: var(--white);
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const Text = styled.p`
  ${contentTextStyle}
`;

type MobileNavItemProps = {
  name: string;
  link: string;
  setIsShowMenu: Dispatch<SetStateAction<boolean>>;
  currentSection: string;
  onClick: () => void;
};

const MobileNavItem = ({
  name,
  link,
  setIsShowMenu,
  currentSection,
  onClick,
}: MobileNavItemProps) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split('#')[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsShowMenu(false);
    }
  };

  return (
    <Wrapper
      onClick={(e: any) => onPress(e)}
      href={`#${link}`}
    >
      <Text data-to-scrollspy-id={link}>{name}</Text>
    </Wrapper>
  );
};

export default MobileNavItem;
