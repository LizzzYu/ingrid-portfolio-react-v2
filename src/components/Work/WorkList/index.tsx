import React, { useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  WORK_MODAL_BANNERS,
  WORK_MODAL_DATA,
} from '../../../data/workModalData';
import { useModal } from '../../../hooks/useModal';
import ArrowLeft from '../../../images/carousel/arrow_left.png';
import ArrowRight from '../../../images/carousel/arrow_right.png';
import WorkModal from '../WorkModal';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;

const ImageStyle = css`
  width: 340px;
  height: 300px;
  filter: drop-shadow(0px 6px 6px rgba(20, 16, 0, 0.25));
  border-radius: 4px;
`;

const Image = styled.img`
  ${ImageStyle}

  transition: transform 0.3s ease-in-out;
`;

const CenterImageWrapper = styled.div`
  position: relative;
`;

const CenterImage = styled.img`
  ${ImageStyle}

  &:hover {
    outline: 6px solid var(--yellow);
    outline-offset: -6px;
  }
`;

const ButtonStyle = css`
  padding: 0;
  margin: 30px 0 0 0;
  width: 50px;
  height: 300px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 2;

  > img {
    opacity: 0;
  }

  &:hover {
    > img {
      opacity: 1;
      transition: ease-in-out 0.1s;
    }
  }
`;

const LeftButton = styled.button`
  ${ButtonStyle}

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 4px 4px 0;
`;

const RightButton = styled.button`
  ${ButtonStyle}

  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px 0 0 4px;
`;

type WorkListProps = {
  banners: string[];
  currentBannerIndex?: number;
  handleNext?: () => void;
  handlePrev?: () => void;
};

const WorkList = ({
  handlePrev,
  handleNext,
  banners,
  currentBannerIndex = 0,
}: WorkListProps) => {
  const { openModal, closeModal, isShowModal } = useModal();
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);

  const handleImageClick = () => {
    openModal();
  };

  const currentImage = useMemo(
    () => WORK_MODAL_BANNERS[currentModalImageIndex],
    [currentModalImageIndex]
  );

  const modalData = WORK_MODAL_DATA.find(
    (data) => data.id === currentModalImageIndex
  );

  return (
    <Wrapper>
      <LeftButton onClick={handlePrev}>
        <img src={ArrowLeft} alt="previous" />
      </LeftButton>
      <CarouselContent>
        <Image
          src={
            banners[(currentBannerIndex - 1 + banners.length) % banners.length]
          }
          alt="carousel"
        />
        {[
          currentBannerIndex,
          currentBannerIndex + 1,
          currentBannerIndex + 2,
        ].map((index) => {
          const normalizedIndex = (index + banners.length) % banners.length;
          return (
            <CenterImageWrapper
              key={normalizedIndex}
              onClick={() => {
                setCurrentModalImageIndex(normalizedIndex);
                handleImageClick();
              }}
            >
              <CenterImage src={banners[normalizedIndex]} alt="work_list" />
            </CenterImageWrapper>
          );
        })}
        <Image
          src={banners[(currentBannerIndex + 3) % banners.length]}
          alt="carousel"
        />
      </CarouselContent>
      <RightButton onClick={handleNext}>
        <img src={ArrowRight} alt="next" />
      </RightButton>
      {isShowModal && (
        <WorkModal onClose={closeModal} image={currentImage} data={modalData} />
      )}
    </Wrapper>
  );
};

export default WorkList;
