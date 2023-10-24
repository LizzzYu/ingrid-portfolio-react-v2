import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/color.css';
import './styles/reset.css';
import './styles/fonts.css';

import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { MainRouter } from './containers/Routes/MainRouter';
import { BREAK_POINT } from './constants/constants';

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  background-color: var(--white);
  height: calc(100vh - 80px);

  @media screen and (max-width: ${BREAK_POINT.tablet}px) {
    width: 100%;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Wrapper>
      <RouterProvider router={MainRouter} />
    </Wrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
