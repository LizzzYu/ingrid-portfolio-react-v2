import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 15px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const Circle = styled.div<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--yellow)' : 'var(--grey)'};
`;

type CarouselPointerProps = {
  currentBannerIndex: number;
  length: number;
};

const CarouselPointer = ({
  currentBannerIndex,
  length,
}: CarouselPointerProps) => {
  const pointerArray = Array.from({ length }, () => 0);
  return (
    <Wrapper>
      {pointerArray.map((_, index) => (
        <Circle isActive={index === currentBannerIndex} />
      ))}
    </Wrapper>
  );
};

export default CarouselPointer;
