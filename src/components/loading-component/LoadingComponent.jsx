import Spinner from 'react-bootstrap/Spinner';

function LoadingComponent() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg-dark bg-opacity-10'>
      <Spinner animation='border' variant='primary'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingComponent;
