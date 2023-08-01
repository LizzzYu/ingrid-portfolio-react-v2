import React from 'react';
import styled, { css } from 'styled-components';
import { contentTextStyle } from '../../../styles/typography';

const Wrapper = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 80px;
  background-color: var(--white);
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: var(--yellow);
      border-bottom: 2px solid var(--yellow);
    `}
`;

const Text = styled.p`
  ${contentTextStyle}
`;

type MobileNavItemProps = {
  name: string;
  currentSection: string;
  onClick: () => void;
};

const MobileNavItem = ({
  name,
  currentSection,
  onClick,
}: MobileNavItemProps) => {
  return (
    <Wrapper onClick={onClick} isSelected={currentSection === name}>
      <Text>{name}</Text>
    </Wrapper>
  );
};

export default MobileNavItem;
