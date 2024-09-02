import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoadingComponent from '../components/loading-component/LoadingComponent';
import PageNotFound from '../components/page-not-found/PageNotFound';
import LoginForm from '../pages/login/Login';
import InfoCards from '../pages/info/Info';
import ProtectedRoutes from './private-routes';
import Test from '../pages/test/Test';

function PublicRoutes() {
  const router = createBrowserRouter([
    { path: '/', element: <LoginForm />, errorElement: <PageNotFound /> },
    { path: '/info', element: <InfoCards />, errorElement: <PageNotFound /> },
    {
      path: '/nsso-secured/',
      element: <ProtectedRoutes />,
      errorElement: <PageNotFound />,
      children: [{ path: 'test', element: <Test /> }],
    },
  ]);
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default PublicRoutes;
