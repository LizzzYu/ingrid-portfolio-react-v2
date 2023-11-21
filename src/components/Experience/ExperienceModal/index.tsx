import React from 'react';
import styled from 'styled-components';
import { isMobile } from '../../../hooks/useDevice';
import {
  contentTextStyle,
  secondaryTitleStyle,
} from '../../../styles/typography';
import Modal from '../../Modal';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  ${secondaryTitleStyle};
  color: var(--grey);
`;

const Line = styled.div`
  height: 2px;
  width: 100%;
  background-color: var(--yellow);
  margin: 20px 0;
`;

const DescriptionWrapper = styled.div`
  ${contentTextStyle};
  color: var(--grey);
`;

interface ExperienceModalProps {
  onClose: () => void;
  name: string;
  position: string;
  description: string[];
}

const ExperienceModalTitle = ({
  name,
  position,
}: Pick<ExperienceModalProps, 'name' | 'position'>) => {
  return (
    <TitleWrapper>
      <Title>{name}</Title>
      <Title>{position}</Title>
    </TitleWrapper>
  );
};

const ExperienceContent = ({
  description,
}: Pick<ExperienceModalProps, 'description'>) => {
  return (
    <DescriptionWrapper>
      <Line />
      {description.map((des, index) => (
        <p key={index}>
          ◎ {des}
          <br />
        </p>
      ))}
    </DescriptionWrapper>
  );
};

const ExperienceModal = ({
  onClose,
  name,
  position,
  description,
}: ExperienceModalProps) => {
  return (
    <Modal
      title={
        <ExperienceModalTitle
          name={name}
          position={position}
        />
      }
      content={<ExperienceContent description={description} />}
      onClose={onClose}
      width={isMobile() ? 335 : 580}
    />
  );
};

export default ExperienceModal;
