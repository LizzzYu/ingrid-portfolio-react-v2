import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import ArrowLeft from '../../images/carousal/arrow_left.png';
import ArrowRight from '../../images/carousal/arrow_right.png';

type CarouselProps = {
  banners: string[];
};

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 370px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0 20px 0;
`;

const CarouselContent = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
`;

const ImageStyle = css`
  width: 1060px;
  height: 370px;
  filter: drop-shadow(0px 6px 6px rgba(20, 16, 0, 0.25));
  border-radius: 4px;
`;

const Image = styled.img`
  ${ImageStyle}
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
  margin: 50px 0 0 0;
  width: 50px;
  height: 370px;
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

const Carousel = ({ banners }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // 每隔 5 秒切換到下一個 banner

    return () => {
      clearInterval(interval); // 清除定时器
    };
  }, []);

  return (
    <CarouselWrapper>
      <LeftButton onClick={handlePrev}>
        <img src={ArrowLeft} alt="previous" />
      </LeftButton>
      <CarouselContent>
        <Image
          src={banners[(currentIndex - 1 + banners.length) % banners.length]}
          alt="carousel"
        />
        <CenterImage src={banners[currentIndex]} alt="carousel" />
        <Image
          src={banners[(currentIndex + 1) % banners.length]}
          alt="carousel"
        />
      </CarouselContent>
      <RightButton onClick={handleNext}>
        <img src={ArrowRight} alt="next" />
      </RightButton>
    </CarouselWrapper>
  );
};

export default Carousel;
