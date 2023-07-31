import React, { Dispatch, SetStateAction } from 'react';
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

type HeaderProps = {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<string>>;
  onClick?: () => void;
};

const Header = ({
  currentSection,
  setCurrentSection,
  onClick,
}: HeaderProps) => {
  return (
    <Wrapper onClick={onClick}>
      <Image src={logo} alt="logo" />
      <Nav
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </Wrapper>
  );
};

export default Header;
