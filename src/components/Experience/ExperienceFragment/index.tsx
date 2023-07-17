import React from 'react';
import styled from 'styled-components';
import { COMPANY_DATA } from '../../../data/experienceData';
import ExperienceItem from './ExperienceItem';
import ArrowDown from '../../../images/experience_arrow_down.png';

const Wrapper = styled.div<{ rownumber: number }>`
  display: grid;
  height: calc(100vh - 210px);
  grid-template-rows: repeat(${({ rownumber }) => rownumber}, 1fr);
  row-gap: 10px;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const ExperienceFragment = () => {
  return (
    <Wrapper rownumber={COMPANY_DATA.length}>
      {COMPANY_DATA.map((company, index) => (
        <ExperienceItem
          key={index}
          name={company.name}
          position={company.position}
          period={company.period}
        />
      ))}
      <img src={ArrowDown} alt="arrow_down" />
    </Wrapper>
  );
};

export default ExperienceFragment;
