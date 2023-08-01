import React from 'react';
import HomePageDesktop from '../../components/HomePage/HomepageDesktop';
import MobileHomepage from '../../components/Mobile/MobileHomepage/MobileHomepage';
import { isTablet } from '../../hooks/useDevice';

const HomePage = () => {
  return isTablet() ? <MobileHomepage /> : <HomePageDesktop />;
};

export default HomePage;
