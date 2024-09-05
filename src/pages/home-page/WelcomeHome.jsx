import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  requiredValidator,
  requiredValidatorOfArrayNew,
} from "../../components/validator/CommonValidator";

export default function WelcomeHome() {
  const [editSection, setEditSection] = useState(false);
  const [editSection2, setEditSection2] = useState(false);

  const schemaBuilder = (editSection, editSection2) => {
    const baseSchema = yup.object().shape({});

    let conditionalSchema = baseSchema; // Initialize with the base schema

    if (editSection) {
      conditionalSchema = conditionalSchema.shape({
        legal_name: requiredValidator("Legal name"),
        operating_name: requiredValidator("Operationg name"),
        cin_number: requiredValidator("CIN number"),
        company_address: requiredValidator("Address"),
        company_gstn: requiredValidator("Company gstn"),
        company_email: requiredValidator("Company email"),
      });
    }

    if (editSection2) {
      conditionalSchema = conditionalSchema.shape({
        first_name: requiredValidator("First name"),
        last_name: requiredValidator("Last name"),
        designation: requiredValidator("Designation"),
        contact_address: requiredValidator("Address"),
        contact_mobile: requiredValidator("Mobile number"),
        contact_telephone: requiredValidator("Telephone number"),
        contact_email: requiredValidator("Email"),
      });
    }

    return conditionalSchema;
  };
  const schema = schemaBuilder(editSection, editSection2);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("schemas...", schema.fields);

  const onSubmit = (data) => {
    console.log(data);
    // navigate("/nsso-secured/test"); // Uncomment if using navigation
  };

  return (
    <>
      <Form className="siteForm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Card className="welcomeCard mb-3 shadow-none">
          <Card.Body>
            <Card.Title>
              <h2 className="mb-3">
                Welcome ! <span>Company Name</span>
              </h2>
              <p className="f-s-16">
                To Start Servey Plesae Verify 1 & 2 Question
              </p>
              <p className="fw-bold f-s-13 text-muted">
                <i className="bi bi-check-circle-fill text-success"></i> 1.
                Identification particulars of the enterprise.
              </p>
              <p className="fw-bold f-s-13 text-muted">
                <i className="bi bi-check-circle-fill text-success"></i> 2. The
                contact information of the designated enterprise contact person
                for this questionnaire
              </p>
            </Card.Title>
            <Row className="mt-4">
              <div href="#" className="col-md-6">
                {" "}
                <Button variant="primary" onClick={() => console.log(fields)}>
                  Start Now<i className="bi bi-arrow-right-short"></i>
                </Button>
              </div>
              <div
                href="#"
                className="col-md-6 d-flex align-items-center justify-content-end link-body-emphasis text-decoration-none "
              >
                <span>
                  <strong className="text-truncate text-muted">
                    Abhishek Ghosh
                  </strong>
                  <p className="mb-0 text-grey text-truncate">
                    abhishek.ghosh@tuteck.com
                  </p>
                </span>
              </div>
            </Row>
          </Card.Body>
        </Card>
        <div className="d-flex mb-2">
          <h3 className="page-title">Identification Particulars</h3>
          {/* <Button onClick={event => _handleSubmit(event)} variant="light">Save & Continue <i className="bi bi-arrow-right-short"></i></Button> */}
        </div>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Title>
              <span className="Count">1</span>
              <h5>Provide the Identification particulars of the enterprise.</h5>
              <div className="action-card ms-auto d-flex">
                {/* <span className="warning-point"></span> */}
                <Button
                  variant="link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setEditSection((prev) => !prev);
                  }}
                >
                  <i
                    className={
                      !!editSection ? `bi bi-x-lg` : `bi bi-pencil-fill`
                    }
                  ></i>
                </Button>
              </div>
            </Card.Title>

            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Corporate Identification Number (CIN)</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="cin_number"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Corporate Identification Number (CIN)"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.cin_number}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.cin_number?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abcde</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Legal name of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="legal_name"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Legal name of the enterprise"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.legal_name}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.legal_name?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Operating name of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="operating_name"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Operating name"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.operating_name}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.operating_name?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Company Address of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="company_address"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          as="textarea"
                          placeholder="Company Address"
                          style={{ height: "100px" }}
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.company_address}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.company_address?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Company Email ID</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="company_email"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Email"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.company_email}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.company_email?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>GSTN of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="company_gstn"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter GSTN"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.company_gstn}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.company_gstn?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        <Card className="questionCard mb-3">
          <Card.Body>
            <Card.Title>
              <span className="Count">2</span>
              <h5>
                Provide the contact information of the designated enterprise
                contact person for this questionnaire
              </h5>
              <div className="action-card ms-auto d-flex">
                {/* <span className="success-point"></span> */}
                <Button
                  variant="link"
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    setEditSection2((prev) => !prev);
                  }}
                >
                  <i
                    className={
                      editSection2 ? `bi bi-x-lg` : `bi bi-pencil-fill`
                    }
                  ></i>
                </Button>
              </div>
            </Card.Title>

            <Row>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>First Name</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="first_name"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.first_name}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.first_name?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Middle Name</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="middle_name"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Middle Name"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.middle_name}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.middle_name?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Last Name</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="last_name"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.last_name}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.last_name?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Designation</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="designation"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Designation"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.designation}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.designation?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Email ID</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_email"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Email"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.contact_email}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contact_email?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Mobile No</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_mobile"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Mobile Number"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.contact_mobile}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contact_mobile?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>TelePhone No</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_telephone"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type="text"
                          placeholder="Enter Telephone Number"
                          className="mb-3"
                          {...field}
                          isInvalid={!!errors.contact_telephone}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contact_telephone?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
              <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Postal Address</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_address"
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          as="textarea"
                          placeholder="Postal Address"
                          style={{ height: "100px" }}
                          {...field}
                          isInvalid={!!errors.contact_address}
                        />
                      )}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contact_address?.message}
                    </Form.Control.Feedback>
                  </>
                ) : (
                  <p>abc</p>
                )}
              </Form.Group>
            </Row>
          </Card.Body>
        </Card>
        {editSection || editSection2 ? (
          <div className="footerBtnGroup d-flex justify-content-end mb-2">
            <div>
              <Button type="submit" variant="primary" className="ms-2">
                <i className="bi bi-save"></i> Save Basic Info
              </Button>
            </div>
          </div>
        ) : (
          <div className="footerBtnGroup d-flex justify-content-end">
            <div>
              <Button
                onClick={(event) => _handleSubmit(event)}
                variant="primary"
                className="ms-2"
              >
                Next <i className="bi bi-arrow-right-short"></i>
              </Button>
            </div>
          </div>
        )}
      </Form>
    </>
  );
}
