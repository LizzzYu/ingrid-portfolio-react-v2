import React from 'react';
import styled from 'styled-components';
import { NAV_DATA } from '../../data/headerData';
import NavItem from './NavItem';

const Wrapper = styled.div`
  display: flex;
  column-gap: 30px;
`;

const Nav = () => {
  return (
    <Wrapper>
      {NAV_DATA.map((nav, index) => (
        <NavItem
          key={index}
          name={nav.name}
          link={nav.link}
        />
      ))}
    </Wrapper>
  );
};

export default Nav;
