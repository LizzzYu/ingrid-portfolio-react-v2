import React from 'react';
import styled from 'styled-components';
import {
  contentTextStyle,
  secondaryTitleStyle,
} from '../../../styles/typography';
import Modal from '../../Modal';

const ModalWrapper = styled(Modal)`
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(20, 16, 0, 0.1);
`;

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
    <ModalWrapper
      title={<ExperienceModalTitle name={name} position={position} />}
      content={<ExperienceContent description={description} />}
      onClose={onClose}
    />
  );
};

export default ExperienceModal;
