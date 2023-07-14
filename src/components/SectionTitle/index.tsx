import React from 'react';
import styled from 'styled-components';
import { sectionTitleStyle } from '../../styles/typography';
import Dot from '../Dot';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  ${sectionTitleStyle}

  padding-right: 20px;
`;

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Dot size={30} />
    </Wrapper>
  );
};

export default SectionTitle;
