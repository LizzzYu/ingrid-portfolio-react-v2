import React from 'react';
import styled from 'styled-components';
import { BREAK_POINT } from '../../../constants/constants';
import Background from '../../../images/mobile/m_main_bg.png';
import MainPicture from '../../../images/mobile/m_main_picture.png';
import { sectionStyle } from '../../../styles/styles';

const Wrapper = styled.div`
  ${sectionStyle}

  background-image: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    height: calc(100svh - 80px);
  }
`;

const MainImage = styled.img`
  width: 70vw;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    width: calc(100% - 30px);
  }
`;

const MobileHomepage = () => {
  return (
    <Wrapper>
      <MainImage src={MainPicture} />
    </Wrapper>
  );
};

export default MobileHomepage;
