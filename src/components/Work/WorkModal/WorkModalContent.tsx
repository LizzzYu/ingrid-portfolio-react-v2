import React from 'react';
import styled, { css } from 'styled-components';
import { workModalDataType } from '../../../data/workModalData';
import { isTablet } from '../../../hooks/useDevice';
import { contentTextStyle } from '../../../styles/typography';

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: flex-start;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25px 1fr;
  gap: 20px;

  margin: 30px 0;
  padding: 30px;
  border-radius: 4px;
  background: var(--f-4-f-3-ea, #f4f3ea);
`;

const MobileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 30px 0;
  padding: 0 40px 40px;
  border-radius: 4px;
  background: var(--f-4-f-3-ea, #f4f3ea);
`;

const Text = styled.h4`
  ${contentTextStyle}
`;

const MobileText = styled.h4`
  ${contentTextStyle}

  padding: 40px 0;
  text-align: center;
`;

const Image = styled.img``;

type WorkModalContentProps = {
  data?: workModalDataType;
};

const WorkModalContent = ({ data }: WorkModalContentProps) => {
  if (!data) return null;

  return (
    <Wrapper>
      {isTablet() ? (
        <MobileContentWrapper>
          <MobileText>{data.title_1}</MobileText>
          <Image src={data.img_1} />
          <MobileText>{data.title_2}</MobileText>
          <Image src={data.img_2} />
          {data.img_3 && (
            <>
              <MobileText>{data.title_3}</MobileText>
              <Image src={data.img_3} />
            </>
          )}
        </MobileContentWrapper>
      ) : (
        <ContentWrapper>
          <Text>{data.title_1}</Text>
          <Text>{data.title_2}</Text>
          <Image src={data.img_1} />
          {data.img_3 ? (
            <>
              <Image src={data.img_2} />
              <div />
              <>
                <Text>{data.title_3}</Text>
                <div />
                <Image src={data.img_3} />
              </>
            </>
          ) : (
            <Image src={data.img_2} />
          )}
        </ContentWrapper>
      )}

      <Text>{data.description}</Text>
    </Wrapper>
  );
};

export default WorkModalContent;
