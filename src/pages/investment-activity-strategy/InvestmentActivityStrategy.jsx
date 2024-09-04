import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Button, Dropdown } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  requiredValidator,
  requiredValidatorOfArrayNew,
} from "../../components/validator/CommonValidator";
import Select from "react-select";

export default function InvestmentActivityStrategy() {
  const [preferredInvestmentOthers, setPreferredInvestmentOthers] =
    useState("");
  const [objectiveInvestmentOthers, setObjectiveInvestmentOthers] =
    useState("");
  const statesAndUTs = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Odisha", label: "Odisha" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Telangana", label: "Telangana" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
    {
      value: "Andaman and Nicobar Islands",
      label: "Andaman and Nicobar Islands",
    },
    { value: "Chandigarh", label: "Chandigarh" },
    {
      value: "Dadra and Nagar Haveli and Daman and Diu",
      label: "Dadra and Nagar Haveli and Daman and Diu",
    },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Delhi", label: "Delhi" },
    { value: "Puducherry", label: "Puducherry" },
    { value: "Ladakh", label: "Ladakh" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
  ];

  const schemaBuilder = (
    preferredInvestmentOthers,
    objectiveInvestmentOthers
  ) => {
    const baseSchema = yup.object().shape({
      investmentStrategy: requiredValidator(
        "Preferred Investment Strategy in the current FY"
      ),
      objectiveOfInvestment: requiredValidator(
        "Objective of investment in the current FY"
      ),
      preferredStates: requiredValidatorOfArrayNew(
        "Most preferred States for investment in the country in the current FY"
      ),
    });

    let conditionalSchema = baseSchema; // Initialize with the base schema

    if (preferredInvestmentOthers === "investmentOther") {
      conditionalSchema = conditionalSchema.shape({
        investmentOtherValue: requiredValidator(
          "Other option of the preferred investment Strategy in the current"
        ),
      });
    }

    if (objectiveInvestmentOthers === "objectiveOther") {
      conditionalSchema = conditionalSchema.shape({
        objectiveOtherValue: requiredValidator(
          "Other option of the Objective of investment in the current FY"
        ),
      });
    }

    return conditionalSchema;
  };
  const schema = schemaBuilder(
    preferredInvestmentOthers,
    objectiveInvestmentOthers
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("error object", errors);

  const onSubmit = (data) => {
    console.log(data);
    // navigate("/nsso-secured/test"); // Uncomment if using navigation
  };

  return (
    <>
      <Form className="siteForm" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                  <Controller
                    name="investmentStrategy"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Select
                        aria-label="Default select example"
                        {...field}
                        isInvalid={!!errors.investmentStrategy}
                        onChange={(e) => {
                          field.onChange(e);
                          setPreferredInvestmentOthers(e.target.value); // Set selected value
                        }}
                      >
                        <option value="">Open this select menu</option>
                        <option value="1">Core</option>
                        <option value="2">Value-added</option>
                        <option value="3">Opportunistic</option>
                        <option value="4">
                          Distressed assets and non-performing loans
                        </option>
                        <option value="5">Debt strategies</option>
                        <option value="investmentOther">Others</option>
                      </Form.Select>
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.investmentStrategy?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                {preferredInvestmentOthers === "investmentOther" && (
                  <Form.Group as={Col} sm="6">
                    <Form.Label>Please specify</Form.Label>
                    <Controller
                      name="investmentOtherValue"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Form.Control
                          placeholder="Please specify"
                          aria-label="Phone No."
                          aria-describedby="basic-addon1"
                          type="text"
                          {...field}
                          isInvalid={!!errors.investmentOtherValue}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.investmentOtherValue?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Objective of investment in the current FY (e.g., 2024-25){" "}
                  </Form.Label>
                  <Controller
                    name="objectiveOfInvestment"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Select
                        aria-label="Default select example"
                        {...field}
                        isInvalid={!!errors.objectiveOfInvestment}
                        onChange={(e) => {
                          field.onChange(e);
                          setObjectiveInvestmentOthers(e.target.value); // Set selected value
                        }}
                      >
                        <option value="">Open this select menu</option>
                        <option value="1">Income Generation</option>
                        <option value="2">Diversification</option>
                        <option value="3">Upgradation</option>
                        <option value="objectiveOther">Others</option>
                      </Form.Select>
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.objectiveOfInvestment?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                {objectiveInvestmentOthers === "objectiveOther" && (
                  <Form.Group as={Col} sm="6">
                    <Form.Label>Please specify</Form.Label>
                    <Controller
                      name="objectiveOtherValue"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Form.Control
                          placeholder="Please specify"
                          aria-label="Phone No."
                          aria-describedby="basic-addon1"
                          type="text"
                          {...field}
                          isInvalid={!!errors.objectiveOtherValue}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.objectiveOtherValue?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}

                <Form.Group as={Col} sm="6">
                  <Form.Label>
                    Most preferred States for investment in the country in the
                    current FY (e.g., 2024-25)?{" "}
                  </Form.Label>
                  <Controller
                    name="preferredStates"
                    control={control}
                    defaultValue={[]}
                    render={({ field }) => (
                      <Select options={statesAndUTs} isMulti {...field} />
                    )}
                  />
                  {errors.preferredStates && (
                    <p className="text-danger">
                      {errors.preferredStates.message}
                    </p>
                  )}
                </Form.Group>
              </Row>
            </Card.Text>
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
    </>
  );
}
