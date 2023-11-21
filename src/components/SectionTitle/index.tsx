import React from 'react';
import styled from 'styled-components';
import { BREAK_POINT } from '../../constants/constants';
import { isMobile } from '../../hooks/useDevice';
import { sectionTitleStyle } from '../../styles/typography';
import Dot from '../Dot';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  ${sectionTitleStyle}

  padding-right: 20px;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    padding-right: 10px;
  }
`;

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Dot size={isMobile() ? 15 : 30} />
    </Wrapper>
  );
};

export default SectionTitle;
