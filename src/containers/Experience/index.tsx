import React from 'react';
import styled from 'styled-components';
import ExperienceFragment from '../../components/Experience/ExperienceFragment';
import { NAV } from '../../data/headerData';
import SectionTitle from '../../components/SectionTitle';
import { sectionStyle } from '../../styles/styles';

const Wrapper = styled.div`
  ${sectionStyle}
`;

const Experience = () => {
  return (
    <Wrapper>
      <SectionTitle title={NAV.EXPERIENCE} />
      <ExperienceFragment />
    </Wrapper>
  );
};

export default Experience;
