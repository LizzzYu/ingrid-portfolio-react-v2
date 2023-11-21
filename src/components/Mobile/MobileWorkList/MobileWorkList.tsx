import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { BREAK_POINT } from '../../../constants/constants';
import {
  WORK_MODAL_BANNERS,
  WORK_MODAL_DATA,
} from '../../../data/workModalData';
import { useModal } from '../../../hooks/useModal';
import WorkModal from '../../Work/WorkModal';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(30px, auto);
  padding: 30px 60px 0;
  gap: 30px;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    padding: 30px 30px 0;
    gap: 10px;
  }
`;

type MobileWorkListProps = {
  banners: string[];
  currentBannerIndex?: number;
};

const Image = styled.img`
  border-radius: 4px;
  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    width: 100%;
  }
`;

const MobileWorkList = ({
  banners,
  currentBannerIndex = 0,
}: MobileWorkListProps) => {
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);
  const { openModal, closeModal, isShowModal } = useModal();

  const currentImage = useMemo(
    () => WORK_MODAL_BANNERS[currentModalImageIndex],
    [currentModalImageIndex]
  );

  const modalData = WORK_MODAL_DATA.find(
    (data) => data.id === currentModalImageIndex
  );

  const onBannerClick = (index: number) => {
    setCurrentModalImageIndex(index);
    openModal();
  };

  return (
    <Wrapper>
      {banners.map((banner, index) => (
        <Image
          src={banner}
          alt='banner'
          onClick={() => onBannerClick(index)}
        />
      ))}
      {isShowModal && (
        <WorkModal
          onClose={closeModal}
          image={currentImage}
          data={modalData}
        />
      )}
    </Wrapper>
  );
};

export default MobileWorkList;
