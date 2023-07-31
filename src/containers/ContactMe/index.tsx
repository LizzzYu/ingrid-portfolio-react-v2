import React from 'react';
import styled, { keyframes } from 'styled-components';
import { sectionStyle } from '../../styles/styles';
import contactMeBg from '../../images/rock_bg.png';
import contactMeImage from '../../images/contact_me.png';
import LinesLeft from '../../images/lines_left.png';
import LinesRight from '../../images/lines_right.png';
import { secondaryTitleStyle } from '../../styles/typography';

const Wrapper = styled.div`
  ${sectionStyle}

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  background-image: url(${contactMeBg});
  background-size: contain;
  background-position: center center;
`;

const ContactImg = styled.img`
  height: inherit;
`;

const DecorationRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  bottom: 100px;
  padding: 0 50px;
  box-sizing: border-box;
`;

const Lines = styled.img`
  width: 80px;
  height: 30px;
`;

const shaking = keyframes`
  0% { transform: rotate(0deg); }
  1% { transform: rotate(5deg); }
  2% { transform: rotate(0eg); }
  3% { transform: rotate(-5deg); }
  4% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const Email = styled.a`
  ${secondaryTitleStyle}

  text-decoration: none;
  color: var(--black);
  font-weight: 500;
  text-align: center;

  position: absolute;
  bottom: 310px;
  animation: ${shaking} 3s ease-in-out infinite;

  &:hover {
    color: var(--yellow);
    animation: none;
  }
`;

const ContactMe = () => {
  return (
    <Wrapper>
      <ContactImg src={contactMeImage} alt="contact_me" />
      <Email href="mailto: inchitun@hotmail.com">inchitun@hotmail.com</Email>
      <DecorationRow>
        <Lines src={LinesLeft} />
        I am looking forward to hear form you soon.
        <Lines src={LinesRight} />
      </DecorationRow>
    </Wrapper>
  );
};

export default ContactMe;
