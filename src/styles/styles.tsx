import { css } from 'styled-components';
import { HEADER_HEIGHT } from '../constants/constants';

export const sectionStyle = css`
  margin-top: ${HEADER_HEIGHT}px;
  height: calc(100svh - ${HEADER_HEIGHT}px);
  min-height: 800px;
  margin-bottom: 100px !important;

  @media screen and (max-width: 1024px) {
    min-height: unset;
    height: auto;
    padding-bottom: unset;
  }
`;
