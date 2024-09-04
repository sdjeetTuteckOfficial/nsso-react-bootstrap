import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { requiredValidator } from "../../components/validator/CommonValidator";

// Function to generate dynamic schema based on `purchaseActivityOption`

export default function InvestmentActivityOutlook() {
  const [purchaseActivityOption, setPurchaseActivityOption] = useState("");

  const schemaBuilder = (purchaseActivityOption) => {
    const baseSchema = yup.object().shape({
      purchaseActivity: requiredValidator("Purchase Activity"),
      sellLessActivity: requiredValidator("Sell less activity"),
    });

    let conditionalSchema = baseSchema; // Initialize with the base schema

    if (purchaseActivityOption === "1") {
      conditionalSchema = conditionalSchema.shape({
        buyMoreActivity: requiredValidator("Buy more activity"),
      });
    }

    if (purchaseActivityOption === "3") {
      conditionalSchema = conditionalSchema.shape({
        buyLessActivity: requiredValidator("Buy less activity"),
      });
    }

    return conditionalSchema;
  };
  const schema = schemaBuilder(purchaseActivityOption);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // navigate("/nsso-secured/test"); // Uncomment if using navigation
  };

  return (
    <>
      <Form className="siteForm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex mb-2">
          <h3 className="page-title">Investment Activity Outlook</h3>
          <Button variant="light" onClick={() => {}}>
            Save & Continue <i className="bi bi-arrow-right-short"></i>
          </Button>
        </div>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Text>
              <Row>
                {/* Purchase Activity Select */}
                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Assets Purchasing Activity Expectations in the next FY
                    (e.g., 2025-26)
                  </Form.Label>
                  <Controller
                    name="purchaseActivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Select
                        aria-label="Assets Purchasing Activity"
                        {...field}
                        isInvalid={!!errors.purchaseActivity}
                        onChange={(e) => {
                          field.onChange(e);
                          setPurchaseActivityOption(e.target.value); // Set selected value
                        }}
                      >
                        <option value="">Open this select menu</option>
                        <option value="1">Buy more</option>
                        <option value="2">About the same</option>
                        <option value="3">Buy less</option>
                        <option value="4">No intention to buy</option>
                      </Form.Select>
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.purchaseActivity?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                {/* Conditionally Render Buy More Activity Select */}
                {purchaseActivityOption === "1" && (
                  <Form.Group as={Col} sm="6">
                    <Form.Label>For Buy More: </Form.Label>
                    <Controller
                      name="buyMoreActivity"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Form.Select
                          aria-label="Buy More Activity"
                          {...field}
                          isInvalid={!!errors.buyMoreActivity}
                        >
                          <option value="">Open this select menu</option>
                          <option value="11">More Than 10% higher</option>
                          <option value="12">Upto 10% higher</option>
                        </Form.Select>
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.buyMoreActivity?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                {/* Conditionally Render Buy Less Activity Select */}
                {purchaseActivityOption === "3" && (
                  <Form.Group as={Col} sm="6">
                    <Form.Label>For Buy Less: </Form.Label>
                    <Controller
                      name="buyLessActivity"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Form.Select
                          aria-label="Buy Less Activity"
                          {...field}
                          isInvalid={!!errors.buyLessActivity}
                        >
                          <option value="">Open this select menu</option>
                          <option value="31">Upto 10% lower</option>
                          <option value="32">More than 10% lower</option>
                        </Form.Select>
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.buyLessActivity?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                {/* Assets Selling Activity */}
                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Assets Selling Activity Expectations in the next FY (e.g.,
                    2025-26)
                  </Form.Label>
                  <Controller
                    name="sellLessActivity"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Select
                        aria-label="Assets Selling Activity"
                        {...field}
                        isInvalid={!!errors.sellLessActivity}
                      >
                        <option value="">Open this select menu</option>
                        <option value="1">Sell more</option>
                        <option value="2">Sell less</option>
                        <option value="3">No intention to sell</option>
                      </Form.Select>
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sellLessActivity?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <div className="footerBtnGroup d-flex justify-content-end">
          <Button variant="primary" type="submit" className="ms-2">
            Save & Continue <i className="bi bi-arrow-right-short"></i>
          </Button>
        </div>
      </Form>
    </>
  );
}
