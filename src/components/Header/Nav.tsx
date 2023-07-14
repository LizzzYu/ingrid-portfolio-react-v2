import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { NAV_DATA } from '../../data/headerData';
import NavItem from './NavItem';

const Wrapper = styled.div`
  display: flex;
  column-gap: 30px;
`;

type NavProps = {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
};

const Nav = ({ currentSection, setCurrentSection }: NavProps) => {
  const onNavClick = (name: string) => {
    setCurrentSection(name);
  };

  return (
    <Wrapper>
      {NAV_DATA.map((nav, index) => (
        <NavItem
          key={index}
          name={nav.name}
          currentSection={currentSection}
          onClick={() => onNavClick(nav.name)}
        />
      ))}
    </Wrapper>
  );
};

export default Nav;
