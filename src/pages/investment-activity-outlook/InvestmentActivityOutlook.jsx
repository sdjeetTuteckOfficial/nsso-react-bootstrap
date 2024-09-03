import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export default function InvestmentActivityOutlook() {
  return (
    <>
      <Form className="siteForm">
        <div className="d-flex mb-2">
          <h3 className="page-title">Investment Activity Outlook</h3>
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
                    Assets Purchasing Activity Expectations in the next FY
                    (e.g., 2025-26){" "}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Buy more</option>
                    <option value="2">About the same</option>
                    <option value="3">Buy less</option>
                    <option value="4">No intention to buy</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} sm="6">
                  <Form.Label>For Buy More : </Form.Label>
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
                  <Form.Label>For Buy Less : </Form.Label>
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
                  <Form.Label>
                    Assets Selling Activity Expectations in the next FY (e.g.,
                    2025-26){" "}
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Sell more</option>
                    <option value="2">Sell less</option>
                    <option value="2">No intension to sell</option>
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
