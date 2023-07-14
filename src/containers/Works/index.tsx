import React from 'react';
import styled from 'styled-components';
import Carousel from '../../components/Carousel';
import SectionTitle from '../../components/SectionTitle';
import { CAROUSAL_BANNERS } from '../../data/carousalData';
import { NAV } from '../../data/headerData';
import { sectionStyle } from '../../styles/styles';

const Wrapper = styled.div`
  ${sectionStyle}
`;

const Works = () => {
  return (
    <Wrapper>
      <SectionTitle title={NAV.WORKS} />
      <Carousel banners={CAROUSAL_BANNERS} />
    </Wrapper>
  );
};

export default Works;
