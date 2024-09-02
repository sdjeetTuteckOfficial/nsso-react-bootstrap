import { Container, Row, Col, Button } from 'react-bootstrap';

function PageNotFound() {
  return (
    <Container className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <Row className='text-center'>
        <Col>
          <h1 className='display-1'>404</h1>
          <p className='lead'>
            Oops! The page you are looking for does not exist.
          </p>
          <Button variant='primary' href='/'>
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
