import React from 'react';
import styled from 'styled-components';
import { COMPANY_DATA } from '../../../data/experienceData';
import ExperienceItem from './ExperienceItem';
import ArrowDown from '../../../images/experience_arrow_down.png';
import { BREAK_POINT } from '../../../constants/constants';

const Wrapper = styled.div<{ rownumber: number }>`
  display: grid;
  height: calc(100vh - 210px);
  min-height: 600px;
  grid-template-rows: repeat(${({ rownumber }) => rownumber}, 1fr);
  row-gap: 10px;
  align-items: center;
  justify-content: center;
  justify-items: center;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    padding-top: 50px;
    /* height: calc(100vh - 260px); */
  }
`;

const ArrowDownImage = styled.img`
  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    padding-right: 140px;
  }

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    padding-right: 100px;
  }
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
      <ArrowDownImage
        src={ArrowDown}
        alt='arrow_down'
      />
    </Wrapper>
  );
};

export default ExperienceFragment;
