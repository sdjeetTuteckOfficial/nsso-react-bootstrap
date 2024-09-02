import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoadingComponent from '../components/loading-component/LoadingComponent';
import PageNotFound from '../components/page-not-found/PageNotFound';
import LoginForm from '../pages/login/Login';
import InfoCards from '../pages/info/Info';
import ProtectedRoutes from './private-routes';
import Test from '../pages/test/Test';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import IdentifyParticulateOne from '../pages/identify-particulate/IdentifyParticulateOne';
import IdentifyParticulateTwo from '../pages/identify-particulate/IdentifyParticulateTwo';

function PublicRoutes() {
  const router = createBrowserRouter([
    { path: '/', element: <LoginForm />, errorElement: <PageNotFound /> },
    { path: '/info', element: <InfoCards />, errorElement: <PageNotFound /> },
    {
      path: '/forgot-password',
      element: <ForgotPassword />,
      errorElement: <PageNotFound />,
    },
    {
      path: '/nsso-secured/',
      element: <ProtectedRoutes />,
      errorElement: <PageNotFound />,
      children: [
        { path: 'test', element: <Test /> },
        { path: 'identify-particulate-1', element: <IdentifyParticulateOne /> },
        { path: 'identify-particulate-2', element: <IdentifyParticulateTwo /> },
      ],
    },
  ]);
  return (
    <Suspense fallback={<LoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default PublicRoutes;
