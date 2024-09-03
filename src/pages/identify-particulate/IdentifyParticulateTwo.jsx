import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function IdentifyParticulateTwo() {
  return (
    <>
    
    <Form className='siteForm'>
      <div className='d-flex mb-2'>
        <h3 className='page-title'>Identification Particulars</h3>
        <Button variant="light">Save & Continue <i class="bi bi-arrow-right-short"></i></Button>
      </div>
      <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title><span className='Count'>1</span> <h5>Provide the Identification particulars of the enterprise.</h5></Card.Title>
        
          <Row>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Corporate Identification Number (CIN)</Form.Label>
                <p>AZS78541345</p>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Legal name of the enterprise</Form.Label>
                <p>Example Enterprise</p>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Operating name of the enterprise</Form.Label>
              <p>Operating name</p>
              </Form.Group>
              <Form.Group as={Col}  lg="12" md="12" sm="12">
                <Form.Label>Company Address of the enterprise
                </Form.Label>
                <p>142 Netaji Subhash Road, Panihati, Kolkata, Pin code - 700114, West Bengal, India</p>
                </Form.Group>
                <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Company Email ID
                </Form.Label>
                <p>example@gmail.com</p>
                </Form.Group>
                <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>GSTN of the enterprise
                </Form.Label>
                <p>GSTNO87764346</p>
                </Form.Group>
            </Row>
        
      </Card.Body>
    </Card>
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title><span className='Count'>2</span> <h5>Provide the contact information of the designated enterprise contact person for this questionnaire</h5></Card.Title>
      
          <Row>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>First Name</Form.Label>
                <p>Abhishek</p>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Last Name</Form.Label>
                <p>Ghosh</p>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Designation</Form.Label>
              <p>UI UX Laead</p>
              </Form.Group>  
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Email ID
                </Form.Label>
                <p>example@gmail.com</p>
                </Form.Group>
                <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Mobile Mo
                </Form.Label>
                <p>8296855114</p>
                </Form.Group>
                <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>TelePhone No
                </Form.Label>
                <p>033 8296855114</p>
                </Form.Group>
              <Form.Group as={Col}  lg="12" md="12" sm="12">
                <Form.Label>Postal Address
                </Form.Label>
                <p>142 Netaji Subhash Road, Panihati, Kolkata, Pin code - 700114, West Bengal, India</p>
                </Form.Group>
              
            </Row>
           
          
         
      </Card.Body>
    </Card>
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title><span className='Count'>3</span> <h5>Provide the current operational status of the enterprise identified by the legal and operating name
        above (as on the date of the survey).</h5></Card.Title>
         
            {/* <Row>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue="Mark"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue="Mark"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                
              <Form.Label>Phone No.</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
                <Form.Control
                  placeholder="Phone No"
                  aria-label="Phone No."
                  aria-describedby="basic-addon1"
               
                />
              </InputGroup>
              </Form.Group>
            </Row> */}
            <Row>
                {['radio'].map((type) => (
                <div key={`inline-${type}`} className="mt-3">
                  <Form.Check
                    inline
                    label="Operational"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    className="mb-3"
                  />
                  <Form.Check
                    inline
                    label="Not currently operational"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    className="mb-3"
                  />
                </div>
                  ))}
            </Row>
            <Row>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Why is this enterprise not currently operational? </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">Seasonal operations</option>
                  <option value="2">Ceased / Strike off operations</option>
                  <option value="2">Sold operation</option>
                  <option value="2">Amalgamated with other enterprises</option>
                  <option value="2">Temporarily inactive but will re-open</option>
                  <option value="2">No longer operating due to other reasons</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>When did this enterprise close for the season? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                   defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>When does this enterprise expect to resume operations? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>When did this enterprise cease operations? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Why did this enterprise cease operations?</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">Bankruptcy </option>
                  <option value="2">Liquidation </option>
                  <option value="2">Dissolution </option>
                  <option value="2">Other </option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}  lg="12" md="12" sm="12">
                <Form.Label>Specify the other reasons why the operations ceased? </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className='mb-3'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              <Row>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label> When was this enterprise sold? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>  What is the CIN of’the buyer? </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter CIN"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label> What is the Legal name of the buyer?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Name"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label> What is the Legal name of the buyer?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Name"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>When did this enterprise amalgamate?  </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>What is the CIN of’the resulting or continuing enterprise?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter CIN"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label> What is the Legal name ot’the resulting or continuing enterprise?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label> What are the CINs of the other enterprises amalgamated with the resulting or continuing enterprise?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>What are the Legal names of’the other enterprises amalgamated with the resulting or continuing enterprise?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter"
                  defaultValue=""
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>  When did this enterprise become temporarily inactive?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>  When does this enterprise expect to resume operations?</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Select Date"
                  defaultValue="20/03/2024"
                  className="mb-3"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
              <Row>
              <Form.Group as={Col}  lg="12" md="12" sm="12">
                <Form.Label>Why is this enterprise temporarily inactive? </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className='mb-3'
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
      </Card.Body>
    </Card>
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title><span className='Count'>4</span> <h5>Provide the place of Business Operation of the Enterprise</h5></Card.Title>
       
          <Row>
          <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Select State </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>West Bengal</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
      </Card.Body>
    </Card>
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title><span className='Count'>5</span> <h5>Provide the current Principal / Main activity of the enterprise</h5></Card.Title>
          <Row>
          <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Select from dropdown of principal activity.  </Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Agriculture, forestry. and fishing </option>
                  <option>Mining and quarrying </option>
                  <option>Manufacturing  </option>
                  <option>Electricity, gas, steam, air conditioning supply </option>
                  <option>Water supply, sewerage, waste management and rediation activities </option>
                  <option>Construction  </option>
                  <option>Wholesale and retail trade and repair of motor vchicles and motorcycles </option>
                  <option>Transportation and storage </option>
                  <option>Accomodation and food service activities </option>
                  <option>Information and communication</option>
                  <option>Real estate activities</option>
                  <option>Professional, Scientific and technical activities  </option>
                  <option>Electricity, gas, steam, air conditioning supply </option>
                  <option>Administrative and support service activities, public administration and defense, compulsory social security </option>
                  <option>Education   </option>
                  <option>Human health, and social work aclivities </option>
                  <option>Arts, entertainment and recreation. otlier service activities n.e.c </option>
                  <option>Others</option>
                </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
               <Form.Group as={Col}  lg="4" md="6" sm="12">
                <Form.Label>Selection of Detail List</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Open this select menu</option>
                  </Form.Select>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              </Row>
      </Card.Body>
    </Card>
    <div className='footerBtnGroup d-flex justify-content-end'>
      <div>
       <Button variant="primary" className='ms-2'>Save & Continue <i class="bi bi-arrow-right-short"></i></Button></div>
    </div>
    </Form>
      </>
  );
}
