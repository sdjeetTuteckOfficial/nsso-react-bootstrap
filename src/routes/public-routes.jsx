import { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoadingComponent from '../components/loading-component/LoadingComponent';
import PageNotFound from '../components/page-not-found/PageNotFound';
import LoginForm from '../pages/login/Login';
import InfoCards from '../pages/info/Info';
import ProtectedRoutes from './private-routes';
import Test from '../pages/test/Test';
import ForgotPassword from '../pages/forgotPassword/ForgotPassword';
import ResetPassword from '../pages/reset-password/ResetPassword';
import IdentifyParticulateOne from '../pages/identify-particulate/IdentifyParticulateOne';
import IdentifyParticulateTwo from '../pages/identify-particulate/IdentifyParticulateTwo';
import CapitalExpenditureIntention from '../pages/capital-expenditure-intention/CapitalExpenditureIntention';
import CapitalExpenditureOutlook from '../pages/capital-expenditure-outlook/CapitalExpenditureOutlook';
import InvestmentActivityOutlook from '../pages/investment-activity-outlook/InvestmentActivityOutlook';

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
      path: '/reset-password',
      element: <ResetPassword />,
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
        { path: 'capital-expenditure-outlook', element: <CapitalExpenditureOutlook /> },
        { path: 'capital-expenditure-intention', element: <CapitalExpenditureIntention /> },
        { path: 'investment-activity-outlook', element: <InvestmentActivityOutlook /> },
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
