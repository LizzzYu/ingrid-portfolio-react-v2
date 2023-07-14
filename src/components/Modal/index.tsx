import React, { useEffect } from 'react';
import styled from 'styled-components';
import Cross from '../../images/cross.png';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 背景透明度 30% */
  backdrop-filter: blur(5px); /* 模糊效果 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div<{ width: number }>`
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0px 2px 4px 0px rgba(20, 16, 0, 0.1);
  padding: 40px;
  position: relative;
  width: ${({ width }) => `${width}px`};
`;

type ModalProps = {
  title?: string | React.ReactNode;
  content: string | React.ReactNode;
  onClose: () => void;
  width?: number;
};

const CloseButton = styled.img`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Modal = ({ title, content, onClose, width = 580 }: ModalProps) => {
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
    <ModalWrapper onClick={handleClickBackgroundClose}>
      <ModalContent width={width}>
        <div>{title}</div>
        <div>{content}</div>
        <CloseButton src={Cross} alt="close" onClick={onClose} />
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
