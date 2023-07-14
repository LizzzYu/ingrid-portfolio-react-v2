import { css } from 'styled-components';
import { HEADER_HEIGHT } from '../constants/constants';

export const sectionStyle = css`
  margin-top: ${HEADER_HEIGHT}px;
  height: calc(100vh - ${HEADER_HEIGHT}px);
`;
