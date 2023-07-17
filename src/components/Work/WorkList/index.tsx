import React from 'react';
import styled, { css } from 'styled-components';
import ArrowLeft from '../../../images/carousel/arrow_left.png';
import ArrowRight from '../../../images/carousel/arrow_right.png';
import CarouselPointer from '../CarouselPointer';

const Wrapper = styled.div<{ isCarousel: boolean }>`
  position: relative;
  width: 100%;
  height: ${({ isCarousel }) => (isCarousel ? '370px' : '300px')};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 20px 0;
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;

const CarouselImageStyle = css`
  width: 1060px;
  height: 370px;
  filter: drop-shadow(0px 6px 6px rgba(20, 16, 0, 0.25));
  border-radius: 4px;
`;

const ImageStyle = css`
  width: 340px;
  height: 300px;
  filter: drop-shadow(0px 6px 6px rgba(20, 16, 0, 0.25));
  border-radius: 4px;
`;

const Image = styled.img<{ isCarousel: boolean }>`
  ${({ isCarousel }) => (isCarousel ? CarouselImageStyle : ImageStyle)}

  transition: transform 0.3s ease-in-out;
`;

const CenterImageWrapper = styled.div`
  position: relative;

  transition: transform 0.3s ease-in-out;
`;

const CenterCarouselImage = styled.img`
  ${CarouselImageStyle}

  &:hover {
    outline: 6px solid var(--yellow);
    outline-offset: -6px;
  }
`;

const CenterImage = styled.img`
  ${ImageStyle}

  &:hover {
    outline: 6px solid var(--yellow);
    outline-offset: -6px;
  }
`;

const ButtonStyle = css<{ isCarousel: boolean }>`
  padding: 0;
  margin: 30px 0 0 0;
  width: 50px;
  height: ${({ isCarousel }) => (isCarousel ? '370px' : '300px')};
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

const LeftButton = styled.button<{ isCarousel: boolean }>`
  ${ButtonStyle}

  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 4px 4px 0;
`;

const RightButton = styled.button<{ isCarousel: boolean }>`
  ${ButtonStyle}

  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px 0 0 4px;
`;

type WorkListProps = {
  banners: string[];
  currentBannerIndex: number;
  isCarousel?: boolean;
  onClick?: () => void;
  handleNext?: () => void;
  handlePrev?: () => void;
};

const WorkList = ({
  handlePrev,
  handleNext,
  banners,
  currentBannerIndex,
  onClick,
  isCarousel = true,
}: WorkListProps) => {
  return (
    <Wrapper isCarousel={isCarousel}>
      <LeftButton isCarousel={isCarousel} onClick={handlePrev}>
        <img src={ArrowLeft} alt="previous" />
      </LeftButton>
      <CarouselContent>
        <Image
          isCarousel={isCarousel}
          src={
            banners[(currentBannerIndex - 1 + banners.length) % banners.length]
          }
          alt="carousel"
        />
        {isCarousel ? (
          <CenterImageWrapper onClick={onClick}>
            <CenterCarouselImage
              src={banners[currentBannerIndex]}
              alt="carousel"
            />
            <CarouselPointer
              currentBannerIndex={currentBannerIndex}
              length={banners.length}
            />
          </CenterImageWrapper>
        ) : (
          [
            currentBannerIndex,
            currentBannerIndex + 1,
            currentBannerIndex + 2,
          ].map((index) => {
            const normalizedIndex = (index + banners.length) % banners.length;
            return (
              <CenterImageWrapper key={normalizedIndex} onClick={onClick}>
                <CenterImage src={banners[normalizedIndex]} alt="work_list" />
              </CenterImageWrapper>
            );
          })
        )}
        <Image
          isCarousel={isCarousel}
          src={
            banners[
              (currentBannerIndex + (isCarousel ? 1 : 3)) % banners.length
            ]
          }
          alt="carousel"
        />
      </CarouselContent>
      <RightButton isCarousel={isCarousel} onClick={handleNext}>
        <img src={ArrowRight} alt="next" />
      </RightButton>
    </Wrapper>
  );
};

export default WorkList;
