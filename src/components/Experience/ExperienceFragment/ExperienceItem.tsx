import React from 'react';
import styled from 'styled-components';
import { BREAK_POINT } from '../../../constants/constants';
import { EXPERIENCE_MODAL_DATA } from '../../../data/experienceModalData';
import { useModal } from '../../../hooks/useModal';
import {
  contentTextStyle,
  secondaryTitleStyle,
} from '../../../styles/typography';
import ExperienceModal from '../ExperienceModal';
import MoreButton from './MoreButton';

const Wrapper = styled.div`
  display: flex;
  column-gap: 50px;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    column-gap: 20px;
  }
`;

const Title = styled.h2`
  ${secondaryTitleStyle};

  width: 300px;
  color: var(--grey);
  margin: 0;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    font-size: 18px;
    width: 180px;
  }
`;

const TitleLeft = styled(Title)`
  text-align: right;
  font-weight: 600;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    width: 100px;
  }

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    width: 80px;
  }
`;

const GraphicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  margin: 4px;
  background-color: var(--yellow);
  border-radius: 20px;
`;

const Line = styled.div`
  width: 2px;
  border-radius: 6px;
  flex-grow: 1;
  background-color: var(--yellow);
`;

const CompanyWrapper = styled.div`
  width: 300px;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    width: 240px;
  }

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    width: 180px;
  }
`;

const PeriodText = styled.p`
  ${contentTextStyle}

  padding-top: 10px;
  color: var(--grey);

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    font-size: 14px;
  }
`;

type ExperienceItemProps = {
  name: string;
  position: string;
  period: string;
};

const ExperienceItem = ({ name, position, period }: ExperienceItemProps) => {
  const { openModal, closeModal, isShowModal } = useModal();
  const currentModalData = EXPERIENCE_MODAL_DATA.find(
    (company) => company.name === name
  );
  return (
    <Wrapper>
      <TitleLeft>{position}</TitleLeft>
      <GraphicWrapper>
        <Circle />
        <Line />
      </GraphicWrapper>
      <CompanyWrapper>
        <Title>{name}</Title>
        <PeriodText>{period}</PeriodText>
        <MoreButton onClick={openModal} />
      </CompanyWrapper>
      {isShowModal && (
        <ExperienceModal
          onClose={closeModal}
          name={currentModalData?.name ?? ''}
          position={currentModalData?.position ?? ''}
          description={currentModalData?.description ?? []}
        />
      )}
    </Wrapper>
  );
};

export default ExperienceItem;
