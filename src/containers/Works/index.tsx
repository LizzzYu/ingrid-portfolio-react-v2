import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import {
  CAROUSEL_BANNERS,
  TABLET_CAROUSEL_BANNERS,
  TABLET_WORK_LIST_BANNERS,
  WORK_LIST_BANNERS,
} from '../../data/carouselData';
import { NAV } from '../../data/headerData';
import { sectionStyle } from '../../styles/styles';
import WorkList from '../../components/Work/WorkList';
import WorkTitle from '../../components/Work/WorkTitle';
import Carousel from '../../components/Work/Carousel';
import { isMobile, isTablet } from '../../hooks/useDevice';
import MobileWorkList from '../../components/Mobile/MobileWorkList/MobileWorkList';
import { BREAK_POINT } from '../../constants/constants';

const Wrapper = styled.div`
  ${sectionStyle}
  min-height: 900px;

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    height: auto;
  }
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

  const carouselBanners = useMemo(() => {
    if (isTablet()) {
      return TABLET_CAROUSEL_BANNERS;
    }

    return CAROUSEL_BANNERS;
  }, []);

  const workListBanners = useMemo(() => {
    if (isTablet()) {
      return TABLET_WORK_LIST_BANNERS;
    }

    return WORK_LIST_BANNERS;
  }, []);

  return (
    <Wrapper>
      <SectionTitle title={NAV.WORKS} />
      <Carousel
        currentCarouselIndex={currentCarouselBannerIndex}
        handleNext={handleCarouselNext}
        handlePrev={handleCarouselPrev}
        banners={carouselBanners}
      />
      <WorkTitle />
      {isTablet() || isMobile() ? (
        <MobileWorkList banners={workListBanners} />
      ) : (
        <WorkList
          currentBannerIndex={currentBannerIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
          banners={workListBanners}
        />
      )}
    </Wrapper>
  );
};

export default Works;
