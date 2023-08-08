import React from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo.png';
import HamburgerImage from '../../../images/mobile/hamburger.png';

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  z-index: 4;
`;

const HamburgerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding: 33px 40px;
`;

const MobileHeader = ({ onClick }: { onClick: () => void }) => {
  return (
    <Wrapper onClick={onClick}>
      <img height={42} src={logo} alt="logo" />
      <HamburgerWrapper>
        <img src={HamburgerImage} alt="hamburger" />
      </HamburgerWrapper>
    </Wrapper>
  );
};

export default MobileHeader;
