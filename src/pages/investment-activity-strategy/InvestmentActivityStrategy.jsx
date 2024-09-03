import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function InvestmentActivityStrategy() {
  return (
    <>
      <Form className="siteForm">
        <div className="d-flex mb-2">
          <h3 className="page-title">Investment Activity Strategy</h3>
          <Button variant="light">
            Save & Continue <i class="bi bi-arrow-right-short"></i>
          </Button>
        </div>
        <Card className="questionCard mb-3">
          <Card.Body>
            {/* <Card.Title>
              <span className="Count">1</span>{" "}
              <h5>Provide the Investment Strategy of the enterprise.</h5>
            </Card.Title> */}
            <Card.Text>
              <Row>
                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Preferred Investment Strategy in the current FY (e.g.,
                    2024-25){" "}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Core</option>
                    <option value="2">Value-added</option>
                    <option value="3">Opportunistic</option>
                    <option value="4">
                      Distressed assets and non-performing loans
                    </option>
                    <option value="5">Debt strategies</option>
                    <option value="other">Others</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} sm="6">
                  <Form.Label>Please specify</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Please specify"
                      aria-label="Phone No."
                      aria-describedby="basic-addon1"
                      type="text"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Objective of investment in the current FY (e.g., 2024-25){" "}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Income Generation</option>
                    <option value="2">Diversification</option>
                    <option value="3">Upgradation</option>
                    <option value="other">Others</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} sm="6">
                  <Form.Label>Please specify</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Please specify"
                      aria-label="Phone No."
                      aria-describedby="basic-addon1"
                      type="text"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Most preferred States for investment in the country in the
                    current FY (e.g., 2024-25)?{" "}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Seasonal operations</option>
                    <option value="2">
                      When did this enterprise close for the season?
                    </option>
                    <option value="2">
                      When does this enterprise expect to resume operations?
                    </option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="footerBtnGroup d-flex justify-content-end">
          <div>
            <Button variant="primary" className="ms-2">
              Save & Continue <i class="bi bi-arrow-right-short"></i>
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
}
