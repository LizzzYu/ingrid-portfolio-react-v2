import { BREAK_POINT } from '../constants/constants';

export const isTablet = (): boolean => window.screen.width < BREAK_POINT.tablet;
export const isMobile = (): boolean => window.screen.width < BREAK_POINT.mobile;
