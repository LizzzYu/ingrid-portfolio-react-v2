import { css } from 'styled-components';
import { BREAK_POINT } from '../constants/constants';

export const contentTextStyle = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const sectionTitleStyle = css`
  font-family: 'Roboto';
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 47px;
  padding: 30px 0 0 30px;
  margin: 0;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    font-size: 20px;
    line-height: 20px;
    padding: 0 0 0 20px;
  }
`;

export const secondaryTitleStyle = css`
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;

  @media screen and (max-width: ${BREAK_POINT.mobile}px) {
    font-size: 18px;
  }
`;
