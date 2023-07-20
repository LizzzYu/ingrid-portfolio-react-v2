import React from 'react';
import styled from 'styled-components';
import Modal from '../../Modal';

type WorkModalProps = {
  onClose: () => void;
  image: string;
};

const WorkModal = ({ onClose, image }: WorkModalProps) => {
  return (
    <Modal
      width={700}
      image={image}
      title="test"
      content="test"
      onClose={onClose}
    />
  );
};

export default WorkModal;
