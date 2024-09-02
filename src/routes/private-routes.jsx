import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = 1234; //get from localstorage
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
