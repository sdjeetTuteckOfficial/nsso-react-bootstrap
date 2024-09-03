import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function IdentifyParticulateEntry() {
  return (
    <>
      <Form className='siteForm'>
        <div className='d-flex mb-2'>
          <h3 className='page-title'>Identification Particulars Entry</h3>
          <Button variant='light'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>1</span>{' '}
              <h5>Provide the Identification particulars of the enterprise.</h5>
            </Card.Title>
            <Card.Text>
              <Row>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Corporate Identification Number (CIN)</Form.Label>
                  <p>AZS78541345</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Legal name of the enterprise</Form.Label>
                  <p>Example Enterprise</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Operating name of the enterprise</Form.Label>
                  <p>Operating name</p>
                </Form.Group>
                <Form.Group as={Col} lg='12' md='12' sm='12'>
                  <Form.Label>Company Address of the enterprise</Form.Label>
                  <p>
                    142 Netaji Subhash Road, Panihati, Kolkata, Pin code -
                    700114, West Bengal, India
                  </p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Company Email ID</Form.Label>
                  <p>example@gmail.com</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>GSTN of the enterprise</Form.Label>
                  <p>GSTNO87764346</p>
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>2</span>{' '}
              <h5>
                Provide the contact information of the designated enterprise
                contact person for this questionnaire
              </h5>
            </Card.Title>
            <Card.Text>
              <Row>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>First Name</Form.Label>
                  <p>Abhishek</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Last Name</Form.Label>
                  <p>Ghosh</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Designation</Form.Label>
                  <p>UI UX Laead</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Email ID</Form.Label>
                  <p>example@gmail.com</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Mobile Mo</Form.Label>
                  <p>8296855114</p>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>TelePhone No</Form.Label>
                  <p>033 8296855114</p>
                </Form.Group>
                <Form.Group as={Col} lg='12' md='12' sm='12'>
                  <Form.Label>Postal Address</Form.Label>
                  <p>
                    142 Netaji Subhash Road, Panihati, Kolkata, Pin code -
                    700114, West Bengal, India
                  </p>
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>3</span>{' '}
              <h5>
                Provide the current operational status of the enterprise
                identified by the legal and operating name above
              </h5>
            </Card.Title>
            <Card.Text>
              <Row>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='First name'
                    defaultValue='Mark'
                    className='mb-3'
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Last name'
                    defaultValue='Mark'
                    className='mb-3'
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} lg='4' md='6' sm='12'>
                  <Form.Label>Phone No.</Form.Label>
                  <InputGroup className='mb-3'>
                    <InputGroup.Text id='basic-addon1'>+91</InputGroup.Text>
                    <Form.Control
                      placeholder='Phone No'
                      aria-label='Phone No.'
                      aria-describedby='basic-addon1'
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className='mb-3'>
                    <Form.Check
                      inline
                      label='Operational'
                      name='group1'
                      type={type}
                      id={`inline-${type}-1`}
                      className='mb-3'
                    />
                    <Form.Check
                      inline
                      label='Not currently operational'
                      name='group1'
                      type={type}
                      id={`inline-${type}-2`}
                      className='mb-3'
                    />
                  </div>
                ))}
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className='footerBtnGroup d-flex justify-content-end'>
          <div>
            <Button variant='primary' className='ms-2'>
              Save & Continue <i className='bi bi-arrow-right-short'></i>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
