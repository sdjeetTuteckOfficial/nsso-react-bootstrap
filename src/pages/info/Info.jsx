import { Row, Col, Button, Container } from 'react-bootstrap';

function InfoCards() {
  return (
    <Container className='mt-4'>
      <Row>
        <Col xs={12} md={8} lg={6} xl={6} className='p-1'>
          <div className='p-3 border bg-light'>
            <h1>Main Heading</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              debitis iste exercitationem quos tenetur ab voluptatum est
              laudantium aut quae perferendis neque velit dicta, magni
              accusantium totam amet expedita perspiciatis!
            </p>
            <Button variant='primary'>Primary Button</Button>
          </div>
        </Col>
        <Col xs={12} md={4} lg={3} xl={3} className='p-1'>
          <div className='p-3 border bg-light'>
            <h2>Subheading TEST</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              dolores voluptas nisi omnis ratione quia provident molestias
              mollitia, doloremque fugit porro, aut dolor eveniet magni quas id
              quaerat et veritatis?
            </p>
            <Button variant='secondary'>Secondary Button</Button>
          </div>
        </Col>
        <Col xs={12} md={12} lg={3} xl={3} className='p-1'>
          <div className='p-3 border bg-light'>
            <h2>Another Subheading</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              rem quae nobis hic vel quis? Ea necessitatibus dignissimos iure
              non corporis minus ratione saepe ipsam soluta harum dicta, totam
              at.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default InfoCards;
