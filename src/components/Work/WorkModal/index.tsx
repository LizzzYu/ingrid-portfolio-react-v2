import React from 'react';
import { workModalDataType } from '../../../data/workModalData';
import Modal from '../../Modal';
import WorkModalContent from './WorkModalContent';

type WorkModalProps = {
  onClose: () => void;
  image: string;
  data?: workModalDataType;
};

const WorkModal = ({ onClose, image, data }: WorkModalProps) => {
  return (
    <Modal
      isFloating
      width={700}
      image={image}
      title="創作理念"
      content={<WorkModalContent data={data} />}
      onClose={onClose}
    />
  );
};

export default WorkModal;
