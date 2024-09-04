import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  requiredValidator,
  requiredNonZeroPositiveValidator,
} from "../../components/validator/CommonValidator";
const tableField = [
  "101",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "115",
  "116",
  "117",
];

const CapitalExpenditureIntention = () => {
  const schemaBuilder = () => {
    const baseSchema = yup.object().shape({
      notReportedCapitalExpenditure: requiredValidator("reason"),
    });

    let conditionalSchema = baseSchema; // Initialize with the base schema

    tableField.forEach((alertOption) => {
      conditionalSchema = conditionalSchema.shape({
        [`a${alertOption}field`]: requiredNonZeroPositiveValidator("field"), // Use computed property name
      });
    });
    return conditionalSchema;
  };

  const schema = schemaBuilder();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("Schema", schema.fields, errors);

  const onSubmit = (data) => {
    console.log(data);
    // navigate("/nsso-secured/test"); // Uncomment if using navigation
  };

  return (
    <div>
      <Form className="siteForm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex mb-2">
          <h3 className="page-title">Capital Expenditure (CAPEX) Intention:</h3>
          <Button variant="light">
            Save & Continue <i class="bi bi-arrow-right-short"></i>
          </Button>
        </div>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Title>
              <span className="Count">10</span>{" "}
              <h5>
                Assets-Wise details of "Capital Expenditure" intended to be
                incurred by the enterprise in next financial year i.e., 2025-26
                (as on the date of the survey).
              </h5>
            </Card.Title>
            <Row>
              <Table
                bordered
                hover
                responsive
                size="sm"
                className="table-default-nsso"
              >
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th rowspan="2">Asset Groups*</th>
                    <th rowspan="2">Asset Code</th>
                    <th colspan="3">
                      Expenditure intended to be incurred during current FY on
                    </th>
                    <th rowspan="2">
                      Intended sale of fixed assets during current FY
                    </th>
                    <th rowspan="2">
                      Total Expenditure = col.3 + col.4 + col.5
                    </th>
                  </tr>
                  <tr>
                    <th>
                      Purchase Of new new Assets including financial leases
                    </th>
                    <th>Purchase of second hand assets</th>
                    <th>Major improvement of existing assets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <td>(1)</td>
                    <td>(2)</td>
                    <td>(3)</td>
                    <td>(4)</td>
                    <td>(5)</td>
                    <td>(6)</td>
                    <td>(7)</td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Dwellings, Other Buildings, and Structures,
                    </td>
                    <td>A01</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Machinery and Equipment
                    </td>
                    <td>A02</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Cultivated Biological Resources
                    </td>
                    <td>A03</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>Land</td>
                    <td>A04</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}>
                      <div></div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Computer Software and Databases
                    </td>
                    <td>A05</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Research and development
                    </td>
                    <td>A06</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Other Intangible Assets / Intellectual Property Products
                    </td>
                    <td>A07</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Non-Produced Assets (other than land)
                    </td>
                    <td>A08</td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td>
                      <Form.Control type="text" />
                    </td>
                    <td style={{ backgroundColor: "#2471dd" }}></td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Capital work in progress
                    </td>
                    <td>A09</td>
                    <td colSpan={4}></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Title>
              <span className="Count">10.1</span>{" "}
              <h5>
                Sector/Industry-Wise details of Provisional "Capital
                Expenditure" to be incurred by the enterprise in next financial
                year i.e., 2025-26 (as on the date of the survey)
              </h5>
            </Card.Title>
            <Row>
              <Table
                bordered
                hover
                responsive
                size="sm"
                className="table-default-nsso"
              >
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th>Sector/Industry</th>
                    <th>Industry Code</th>
                    <th>
                      Percentage (In whole number) of capital expenditure to be
                      incurred during 2025-26
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <td>(1)</td>
                    <td>(2)</td>
                    <td>(3)</td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Agriculture, Forestry, and fishing
                    </td>
                    <td>101</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a101field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a101field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a101field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>Mining And Quarrying</td>
                    <td>102</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a102field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a102field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a102field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>Manufaturing</td>
                    <td>103</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a103field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a103field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a103field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Electricity, Gas, Steam, Air Conditioning Supply
                    </td>
                    <td>104</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a104field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a104field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a104field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Water Supply, Sewerage, Waste management and remediation
                      activities
                    </td>
                    <td>105</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a105field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a105field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a105field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>Construction</td>
                    <td>106</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a106field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a106field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a106field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Whole Sale and retail trade and repair of motor vehicles
                      and motorcycles
                    </td>
                    <td>107</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a107field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a107field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a107field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Transportation and storage
                    </td>
                    <td>108</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a108field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a108field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a108field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Accomodation and food service activities
                    </td>
                    <td>109</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a109field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a109field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a109field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Information and communication
                    </td>
                    <td>110</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a110field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a110field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a110field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Financial and insurance activities
                    </td>
                    <td>111</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a111field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a111field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a111field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Real Estate Activites
                    </td>
                    <td>112</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a112field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a112field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a112field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Professional , scientific , and technical activities
                    </td>
                    <td>113</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a113field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a113field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a113field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Administrative and support service activities, public
                      administration and defense, compulsory social security
                    </td>
                    <td>114</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a114field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a114field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a114field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>Education</td>
                    <td>115</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a115field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a115field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a115field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Human Health , and social work activities
                    </td>
                    <td>116</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a116field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a116field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a116field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: "nowrap" }}>
                      Arts, entertainment, and recreation, other service
                      activities n.e.c
                    </td>
                    <td>117</td>
                    <td>
                      <Form.Group controlId="formEmail">
                        <Controller
                          name="a117field"
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type="text"
                              isInvalid={!!errors.a117field}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.a117field?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr style={{ textAlign: "center" }}>
                    <th colSpan={2}>Total</th>
                    <th>100</th>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Title>
              <span className="Count">10.2</span>{" "}
              <h5>
                You have not reported any capital expenditure intentions for the
                next financial year i.e., 2025-26.
              </h5>
            </Card.Title>
            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Please Indicate the reason.</Form.Label>
                <Controller
                  name="notReportedCapitalExpenditure"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Select
                      aria-label="Default select example"
                      {...field}
                      isInvalid={!!errors.notReportedCapitalExpenditure}
                    >
                      <option value="">Open this select menu</option>
                      <option value="1">
                        Zero Capital expenditure intentions for FY 2025-26
                      </option>
                      <option value="2">
                        Figures not available but plans are for no change in
                        capital expenditures for FY 2025-26
                      </option>
                      <option value="3">
                        Figures not available but plans are for an increase in
                        capital expenditures for FY 2025-26
                      </option>
                      <option value="4">
                        Figures not available but plans are for an decrease in
                        capital expenditures for FY 2025-26
                      </option>
                    </Form.Select>
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.notReportedCapitalExpenditure?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <div className="footerBtnGroup d-flex justify-content-end">
          <div>
            <Button variant="primary" type="submit" className="ms-2">
              Save & Continue <i class="bi bi-arrow-right-short"></i>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CapitalExpenditureIntention;
