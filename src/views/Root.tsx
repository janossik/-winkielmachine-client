import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MainProvider from '~/providers/Main.provider';
import HomeView from './Home.view';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainProvider>
        <Outlet />
      </MainProvider>
    ),
    children: [
      {
        index: true,
        element: <HomeView />,
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export default Root;
