import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { BREAK_POINT } from '../../constants/constants';
import { isMobile, isTablet } from '../../hooks/useDevice';
import Cross from '../../images/cross.png';
import { secondaryTitleStyle } from '../../styles/typography';

const ModalWrapper = styled.div<{ isFloating: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 背景透明度 50% */
  backdrop-filter: blur(5px); /* 模糊效果 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  overflow: ${({ isFloating }) => (isFloating ? 'scroll' : 'auto')};
`;

const ModalContent = styled.div<{
  width: number;
  isFloating: boolean;
  isTablet: boolean;
  isMobile: boolean;
}>`
  box-sizing: border-box;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(20, 16, 0, 0.1);
  position: relative;
  width: ${({ width }) => `${width}px`};

  ${({ isFloating }) =>
    isFloating &&
    css`
      position: absolute;
      top: 50px;
      margin: 0;
    `}

  ${({ isTablet, isFloating }) =>
    isTablet &&
    isFloating &&
    css`
      width: unset;
      margin: 0 45px;
    `}

    ${({ isMobile, isFloating }) =>
    isMobile &&
    isFloating &&
    css`
      width: 90vw;
      margin: 0 45px;
    `}
`;

const ContentWrapper = styled.div`
  padding: 40px;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    padding: 20px;
  }
`;

export type ModalProps = {
  title?: string | React.ReactNode;
  content: string | React.ReactNode;
  onClose: () => void;
  width?: number;
  image?: string;
  isFloating?: boolean;
};

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Image = styled.div<{
  image: string;
  isTablet: boolean;
  isMobile: boolean;
}>`
  width: 700px;
  height: 370px;

  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;

  ${({ isTablet }) =>
    isTablet &&
    css`
      width: 90vw;
      background-size: contain;
    `};

  ${({ isMobile }) =>
    isMobile &&
    css`
      height: 200px;
      width: 90vw;
      background-size: contain;
    `};
`;

const Title = styled.h2`
  ${secondaryTitleStyle};
`;

const Modal = ({
  title,
  content,
  onClose,
  width = 580,
  image,
  isFloating = false,
}: ModalProps) => {
  const handleClickBackgroundClose = (event: React.SyntheticEvent) => {
    if (event.target === event?.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    // 打開彈窗食禁止背景滾動
    document.body.style.overflow = 'hidden';

    // 關閉彈窗時恢復背景滾動
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <ModalWrapper
      isFloating={isFloating}
      onClick={handleClickBackgroundClose}
    >
      <ModalContent
        width={width}
        isFloating={isFloating}
        isTablet={isTablet()}
        isMobile={isMobile()}
      >
        {image && (
          <Image
            image={image}
            isTablet={isTablet()}
            isMobile={isMobile()}
          />
        )}
        <ContentWrapper>
          <Title>{title}</Title>
          <div>{content}</div>
        </ContentWrapper>
        <CloseButton
          src={Cross}
          alt='close'
          onClick={onClose}
        />
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
