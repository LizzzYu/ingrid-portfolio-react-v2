import React from 'react';
import styled from 'styled-components';
import backGround from '../../images/main_bg.png';
import mainPicture from '../../images/mainPicture.png';
import { sectionStyle } from '../../styles/styles';

const MainWrapper = styled.div`
  ${sectionStyle}

  background-image: url(${backGround});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainPicture = styled.img`
  max-height: 60vh;
`;

const HomePage = () => {
  return (
    <MainWrapper>
      <MainPicture src={mainPicture} alt="main_picture" />
    </MainWrapper>
  );
};

export default HomePage;
