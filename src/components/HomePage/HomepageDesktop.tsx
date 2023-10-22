import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import backGround from '../../images/main_bg.png';
import mainPicture from '../../images/mainPicture.png';
import paintCan from '../../images/paint_can.png';
import { sectionStyle } from '../../styles/styles';
import Hello from './Hello';
import { BREAK_POINT } from '../../constants/constants';

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100vw);
  }
`;

const BGSlideOut = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-1200px);
  }
`;

const shaking = keyframes`
  0% { transform: rotate(0deg); }
  5% { transform: rotate(5deg); }
  10% { transform: rotate(0eg); }
  15% { transform: rotate(-5deg); }
  20% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  30% { transform: rotate(0eg); }
  35% { transform: rotate(-5deg); }
  40% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const MainWrapper = styled.div`
  ${sectionStyle}

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  overflow: hidden;
`;

const BGWrapper = styled.div`
  width: 200vw;
  min-height: 800px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${BGSlideOut} 2s ease-in-out;
  animation-fill-mode: forwards;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    width: 100vw;
  }
`;

const Background = styled.div`
  height: calc(100vh - 80px);
  min-height: 800px;
  width: 1200px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    width: 100vw;
  }
`;

const MainBGImage = styled.div`
  height: inherit;
  min-height: 800px;
  width: 100%;

  background-image: url(${backGround});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`;

const AvatarWrapper = styled.div`
  position: relative;
  animation: ${slideOut} 2s ease-in-out;
  animation-fill-mode: forwards;
`;

const MainPicture = styled.img`
  max-height: 60vh;
`;

const PaintCanImg = styled.img`
  max-height: 60vh;
  position: absolute;
  left: 0;
  top: 0;
  animation: ${shaking} 1s ease-in-out infinite;
  cursor: pointer;
`;

const HomePageDesktop = () => {
  const [isSliding, setIsSliding] = useState(false);
  const [isBGSliding, setIsisBGSliding] = useState(false);

  const handleMainPictureClick = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsisBGSliding(true);
    }, 500);
  };

  return (
    <MainWrapper>
      <BGWrapper
        style={{ animationPlayState: isBGSliding ? 'running' : 'paused' }}
      >
        <Background>
          <MainBGImage />
        </Background>
        <Background>
          <Hello />
        </Background>
      </BGWrapper>
      <AvatarWrapper
        style={{ animationPlayState: isSliding ? 'running' : 'paused' }}
      >
        <MainPicture
          src={mainPicture}
          alt='main_picture'
        />
        <PaintCanImg
          src={paintCan}
          onClick={handleMainPictureClick}
          style={{ animationPlayState: isSliding ? 'paused' : 'running' }}
        />
      </AvatarWrapper>
    </MainWrapper>
  );
};

export default HomePageDesktop;
