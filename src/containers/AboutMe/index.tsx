import React from 'react';
import styled from 'styled-components';
import Dot from '../../components/Dot';
import { BREAK_POINT } from '../../constants/constants';
import { isMobile, isTablet } from '../../hooks/useDevice';
import Avatar from '../../images/avatar.png';
import { sectionStyle } from '../../styles/styles';

const Wrapper = styled.div<{ isTablet: boolean }>`
  ${({ isTablet }) => !isTablet && sectionStyle}

  padding: 0 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const AvatarImage = styled.img`
  width: 550px;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    padding-top: 50px;
  }

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    width: 300px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 530px;
  align-items: flex-start;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    padding-top: 50px;
    padding-left: 10px;
    width: 100%;
  }
`;

const TitleWithDotWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 45px;
`;

const LargeTitle = styled.div`
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 500;
  line-height: 95px;
  padding-right: 20px;
`;

const DotGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Description = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding-top: 50px;
  color: var(--grey);
`;

const MobileDescription = styled.div<{ isMobile: boolean }>`
  height: 100svh;
  font-family: Inter;
  font-size: ${({ isMobile }) => (isMobile ? '14px' : '16px')};
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: var(--grey);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutMe = () => {
  return (
    <Wrapper isTablet={isTablet()}>
      {!isTablet() && !isMobile() && (
        <>
          <AvatarImage src={Avatar} alt="avatar" />
          <TextWrapper>
            <Title>關於</Title>
            <TitleWithDotWrapper>
              <LargeTitle>我</LargeTitle>
              <DotGroup>
                <Dot size={20} />
                <Dot size={20} />
              </DotGroup>
            </TitleWithDotWrapper>
            <Description>
              我是唐英綺，興趣電影、音樂、旅遊、運動。擅長統整、歸納、分析，喜歡嘗試不同的過程，以最有效率的方法，達成符合預期的成果。
              <br />
              <br />
              平面設計出生的我，在包裝改版過程中，喜歡以消費者心態為設計的出發點，並對於不同的通路商提出符合各通路商的行銷策略，不僅維護了長期的客戶，也開發了新的市場族群，有效的提升業績，並達成了無陣痛期的包裝改版過程。
              <br />
              <br />
              對科技業充滿憧憬的我，積極進修 UXUI
              因而成功轉職於新創軟體科技公司擔任
              UXUI，負責專案開發主視覺設計，多國語系網站設計，用戶端網頁客製化設計。
              <br />
              <br />
              過程中發現自己很喜歡以使用者體驗做為設計的出發點，卻缺乏核心的技術能力，為了降低與工程師溝通的時間成本，而開始自學
              HTML 與 CSS，也因此對程式語言產生了好奇心，決定報名 ALPHACamp
              的課程，全心投入程式技術的鑽研，過程中曾與同學偕同開發 Twitter
              專案，擔任前端工程師一職，並負責建立環境與部署。
              <br />
              <br />
              下一步目標，以前端工程師的角色，保持學習與成長的人生邁進。
            </Description>
          </TextWrapper>
        </>
      )}
      {(isTablet() || isMobile()) && (
        <>
          <div style={{ height: '100svh' }}>
            <AvatarImage src={Avatar} alt="avatar" />
            <TextWrapper>
              <Title>關於</Title>
              <TitleWithDotWrapper>
                <LargeTitle>我</LargeTitle>
                <DotGroup>
                  <Dot size={20} />
                  <Dot size={20} />
                </DotGroup>
              </TitleWithDotWrapper>
            </TextWrapper>
          </div>
          <MobileDescription isMobile={isMobile()}>
            我是唐英綺，興趣電影、音樂、旅遊、運動。擅長統整、歸納、分析，喜歡嘗試不同的過程，以最有效率的方法，達成符合預期的成果。
            <br />
            <br />
            平面設計出生的我，在包裝改版過程中，喜歡以消費者心態為設計的出發點，並對於不同的通路商提出符合各通路商的行銷策略，不僅維護了長期的客戶，也開發了新的市場族群，有效的提升業績，並達成了無陣痛期的包裝改版過程。
            <br />
            <br />
            對科技業充滿憧憬的我，積極進修 UXUI
            因而成功轉職於新創軟體科技公司擔任
            UXUI，負責專案開發主視覺設計，多國語系網站設計，用戶端網頁客製化設計。
            <br />
            <br />
            過程中發現自己很喜歡以使用者體驗做為設計的出發點，卻缺乏核心的技術能力，為了降低與工程師溝通的時間成本，而開始自學
            HTML 與 CSS，也因此對程式語言產生了好奇心，決定報名 ALPHACamp
            的課程，全心投入程式技術的鑽研，過程中曾與同學偕同開發 Twitter
            專案，擔任前端工程師一職，並負責建立環境與部署。
            <br />
            <br />
            下一步目標，以前端工程師的角色，保持學習與成長的人生邁進。
          </MobileDescription>
        </>
      )}
    </Wrapper>
  );
};

export default AboutMe;
