import React from 'react';
import styled from 'styled-components';
import ArrowRight from '../../../images/arrow_right_small.png';
import { secondaryTitleStyle } from '../../../styles/typography';

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled(FlexBox)`
  column-gap: 10px;
  padding-left: 70px;
  width: fit-content;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: var(--yellow);
  padding-right: 2px;

  visibility: hidden;
  transform: translateX(-60px);
  transition: all 0.3s ease-in-out; /* 添加過渡效果 */
`;

const Arrow = styled.img`
  width: 10px;
  height: 14px;

  transform: translateX(-50px);
  transition: all 0.3s ease-in-out; /* 添加過渡效果 */
`;

const DescriptionWrapper = styled(FlexBox)`
  overflow: hidden;
  cursor: pointer;

  &:hover {
    ${Description} {
      visibility: visible;
      transform: translateX(0);
    }

    ${Arrow} {
      transform: translateX(0);
    }
  }
`;

const Title = styled.p`
  ${secondaryTitleStyle}

  font-size: 20px;
  line-height: 24px;
`;

const WorkTitle = () => {
  return (
    <Wrapper>
      <Title>我的作品</Title>
      <DescriptionWrapper>
        <Description>全部作品</Description>
        <Arrow src={ArrowRight} />
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default WorkTitle;