import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import { NAV } from '../../data/headerData';
import logo from '../../images/logo.png';
import ArrowLeftYellow from '../../images/arrow_left_yellow_small.png';
import ArrowLeftBlack from '../../images/arrow_left_black_small.png';
import { contentTextStyle } from '../../styles/typography';
import { WORK_LIST_BANNERS } from '../../data/carouselData';
import WorkModal from '../../components/Work/WorkModal';
import { useModal } from '../../hooks/useModal';
import { WORK_MODAL_BANNERS, WORK_MODAL_DATA } from '../../data/workModalData';

const Wrapper = styled.div``;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  height: 80px;
  background-color: var(--white);
  max-width: 1200px;
  width: 100%;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 56px;
  height: 42px;
`;

const SectionTitleWrapper = styled.div`
  padding-top: 80px;
`;

const ArrowLeft = styled.div`
  width: 14px;
  height: 19px;
  padding-right: 4px;

  background-image: url(${ArrowLeftBlack});
  background-repeat: no-repeat;
`;

const PreviousPage = styled.div`
  ${contentTextStyle}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--yellow);
    transition: ease-in-out 0.1s;

    ${ArrowLeft} {
      background-image: url(${ArrowLeftYellow});
      transition: ease-in-out 0.1s;
    }
  }
`;

const WorksWrapper = styled.div`
  padding: 50px 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;

const WorkImage = styled.img`
  border-radius: 4px;

  &:hover {
    outline: 6px solid var(--yellow);
    outline-offset: -6px;
  }
`;

const Category = () => {
  const navigate = useNavigate();
  const { openModal, closeModal, isShowModal } = useModal();
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);

  const modalData = WORK_MODAL_DATA.find(
    (data) => data.id === currentModalImageIndex
  );

  const currentImage = useMemo(
    () => WORK_MODAL_BANNERS[currentModalImageIndex],
    [currentModalImageIndex]
  );

  const handleScroll = () => {
    navigate('/');
    setTimeout(() => {
      const workSection = document.getElementById(NAV.WORKS);
      if (workSection) {
        workSection.scrollIntoView();
      }
    }, 100); // 等待 100ms 後滾動到作品集區塊
  };

  const handleOnImageClick = (index: number) => {
    setCurrentModalImageIndex(index);
    openModal();
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Logo src={logo} alt="logo" />
        <PreviousPage onClick={handleScroll}>
          <ArrowLeft />
          上一頁
        </PreviousPage>
      </HeaderWrapper>
      <SectionTitleWrapper>
        <SectionTitle title="全部作品" />
      </SectionTitleWrapper>
      <WorksWrapper>
        {WORK_LIST_BANNERS.map((work, index) => (
          <WorkImage src={work} onClick={() => handleOnImageClick(index)} />
        ))}
      </WorksWrapper>
      {isShowModal && (
        <WorkModal onClose={closeModal} image={currentImage} data={modalData} />
      )}
    </Wrapper>
  );
};

export default Category;
