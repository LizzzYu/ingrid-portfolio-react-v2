import React from 'react';
import styled, { css } from 'styled-components';
import { contentTextStyle } from '../../styles/typography';

const Wrapper = styled.div<{ isSelected: boolean }>`
  width: fit-content;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    width: 100%;
    height: 10px;
    background-color: var(--yellow);
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    color: var(--yellow);
    transition: 0.3s;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--yellow);
      &::before {
        opacity: 1;
      }
    `}
`;

const Item = styled.p`
  ${contentTextStyle}
`;

type NavItemProps = {
  name: string;
  currentSection: string;
  onClick: () => void;
};

const NavItem = ({ name, onClick, currentSection }: NavItemProps) => {
  return (
    <Wrapper onClick={onClick} isSelected={currentSection === name}>
      <Item>{name}</Item>
    </Wrapper>
  );
};

export default NavItem;
