import React from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import Nav from './Nav';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  height: 80px;
  background-color: var(--white);
  max-width: 1200px;
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 4;
`;

const Image = styled.img`
  width: 56px;
  height: 42px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Image
        src={logo}
        alt='logo'
      />
      <Nav />
    </Wrapper>
  );
};

export default Header;
