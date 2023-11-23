import { createBrowserRouter } from 'react-router-dom';
import Category from '../Category';
import Main from '../Main';

// BrowserRoute is not allowed in github page deploying
// basename is use for tricky way to use BrowserRoute when deploy to github page
// @see https://create-react-app.dev/docs/deployment/#github-pages
export const MainRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: 'category',
      element: <Category />,
    },
  ],
  {
    basename: '/ingrid-portfolio',
  }
);
