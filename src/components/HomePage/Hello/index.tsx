import React from 'react';
import styled from 'styled-components';
import contactMeBg from '../../../images/rock_bg.png';
import LinesLeft from '../../../images/lines_left.png';
import LinesRight from '../../../images/lines_right.png';
import HelloImage from '../../../images/hello.png';
import { contentTextStyle } from '../../../styles/typography';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  min-height: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  background-image: url(${contactMeBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const ContactImg = styled.img`
  min-height: inherit;
  height: inherit;
`;

const DecorationRow = styled.div`
  ${contentTextStyle}

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  position: absolute;
  bottom: 100px;
  padding: 0 50px;
  box-sizing: border-box;
`;

const Lines = styled.img`
  width: 80px;
  height: 30px;
`;

const Hello = () => {
  return (
    <Wrapper>
      <ContactImg
        src={HelloImage}
        alt='hello'
      />
      <DecorationRow>
        <Lines src={LinesLeft} />
        Welcome to my portfolio.
        <br />
        I’m a born Taiwan girl who with
        <br />
        the dream becoming a UI designer.
        <Lines src={LinesRight} />
      </DecorationRow>
    </Wrapper>
  );
};

export default Hello;
