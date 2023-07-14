import { createBrowserRouter } from 'react-router-dom';
import Category from '../Category';
import Main from '../Main';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: 'category',
    element: <Category />,
  },
]);
