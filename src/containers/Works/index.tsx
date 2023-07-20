import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import { CAROUSEL_BANNERS, WORK_LIST_BANNERS } from '../../data/carouselData';
import { NAV } from '../../data/headerData';
import { sectionStyle } from '../../styles/styles';
import WorkList from '../../components/Work/WorkList';
import WorkTitle from '../../components/Work/WorkTitle';
import { useModal } from '../../hooks/useModal';
import WorkModal from '../../components/Work/WorkModal';
import Carousel from '../../components/Work/Carousel';

const Wrapper = styled.div`
  ${sectionStyle}
`;

const Works = () => {
  const [currentCarouselBannerIndex, setCurrentCarouselBannerIndex] =
    useState(0);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const handleCarouselNext = () => {
    setCurrentCarouselBannerIndex(
      (prevIndex) => (prevIndex + 1) % CAROUSEL_BANNERS.length
    );
  };

  const handleCarouselPrev = () => {
    setCurrentCarouselBannerIndex(
      (prevIndex) =>
        (prevIndex - 1 + CAROUSEL_BANNERS.length) % CAROUSEL_BANNERS.length
    );
  };

  const handleNext = () => {
    setCurrentBannerIndex(
      (prevIndex) => (prevIndex + 1) % WORK_LIST_BANNERS.length
    );
  };

  const handlePrev = () => {
    setCurrentBannerIndex(
      (prevIndex) =>
        (prevIndex - 1 + WORK_LIST_BANNERS.length) % WORK_LIST_BANNERS.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleCarouselNext, 5000); // 每隔 5 秒切換到下一個 banner

    // const handleStopCarousel = (event: React.SyntheticEvent) => {
    //   if (event.target === event?.currentTarget) {
    //     clearInterval(interval);
    //   }
    // };

    return () => {
      clearInterval(interval); // 清除定时器
    };
  }, []);

  return (
    <Wrapper>
      <SectionTitle title={NAV.WORKS} />
      <Carousel
        currentCarouselIndex={currentCarouselBannerIndex}
        handleNext={handleCarouselNext}
        handlePrev={handleCarouselPrev}
        banners={CAROUSEL_BANNERS}
      />
      <WorkTitle />
      <WorkList
        currentBannerIndex={currentBannerIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
        banners={WORK_LIST_BANNERS}
      />
      {/* {isShowModal && (
        <WorkModal
          onClose={closeModal}
          image={CAROUSEL_BANNERS[currentBannerIndex]}
        />
      )} */}
    </Wrapper>
  );
};

export default Works;
