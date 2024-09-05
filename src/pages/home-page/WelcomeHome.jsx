import { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  requiredValidator,
  requiredValidatorOfArrayNew,
} from "../../components/validator/CommonValidator";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { initializeSection } from "../../redux/form-slice/formSlice";
import { fetchData } from "../../redux/network-slice/slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let baseUrl = "http://10.48.16.236:83/api";

export default function WelcomeHome() {
  const [editSection, setEditSection] = useState(false);
  const [editSection2, setEditSection2] = useState(false);
  const [userData, setUserData] = useState({});
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

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

  const getUserInfo = () => {
    axios
      .get(
        `${baseUrl}/SURVEY/v1/IndustryMaster/GetIndustryBasicInformationAsync`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   let url = "/SURVEY/v1/IndustryMaster/GetIndustryBasicInformationAsync";
  //   dispatch(
  //     fetchData([
  //       {
  //         url: url,
  //         method: "GET",
  //         // key: "state_data",
  //       },
  //     ])
  //   );
  // }, []);
  // const reduxData = useSelector((state) => state.responseSlice.data);
  // console.log("reduxData", reduxData);

  const onSubmit = (data) => {
    console.log(data);
    const payload = {
      legal_name: editSection ? data.legal_name : userData.legal_name,
      operating_name: editSection
        ? data.operating_name
        : userData.operating_name,
      cin_number: editSection ? data.cin_number : userData.cin_number,
      company_address: editSection
        ? data.company_address
        : userData.company_address,
      company_gstn: editSection ? data.company_gstn : userData.company_gstn,
      company_email: editSection ? data.company_email : userData.company_email,
      first_name: editSection2 ? data.first_name : userData.first_name,
      last_name: editSection2 ? data.last_name : userData.last_name,
      designation: editSection2 ? data.designation : userData.designation,
      contact_mobile: editSection2
        ? data.contact_mobile
        : userData.contact_mobile,
      contact_telephone: editSection2
        ? data.contact_telephone
        : userData.contact_telephone,
      contact_email: editSection2 ? data.contact_email : userData.contact_email,
      address_id: userData.addressId,
      lookup_industry_type: userData.lookup_industry_type,
      industry_id: 0,
      middle_name: "",
      contact_address: editSection2 ? data.contact_address : "",
      id: userData.id,
      created_by: userData.created_by,
      created_on: userData.created_on,
      modified_by: 0,
      modified_on: "2024-09-05T16:38:54.125Z",
      isDeleted: false,
      isActive: true,
    };

    axios
      .post(
        `${baseUrl}/SURVEY/v1/IndustryMaster/UpdateIndustryBasicInformationAsync`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setUserData({});
        navigate("/nsso-secured/identify-particulate-1");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Form className="siteForm" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Card className="welcomeCard mb-3 shadow-none">
          <Card.Body>
            <Card.Title>
              <h2 className="mb-3">
                Welcome ! <span>{userData?.legal_name}</span>
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
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate("/nsso-secured/identify-particulate-1")
                  }
                >
                  Start Now<i className="bi bi-arrow-right-short"></i>
                </Button>
              </div>
              <div
                href="#"
                className="col-md-6 d-flex align-items-center justify-content-end link-body-emphasis text-decoration-none "
              >
                <span>
                  <strong className="text-truncate text-muted">
                    {`${userData.first_name} ${userData.last_name}`}
                  </strong>
                  <p className="mb-0 text-grey text-truncate">
                    {userData.contact_email}
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
                      defaultValue={userData.cin_number || ""}
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
                  <p>{userData.cin_number}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Legal name of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="legal_name"
                      control={control}
                      defaultValue={userData.legal_name || ""}
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
                  <p>{userData.legal_name}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Operating name of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="operating_name"
                      control={control}
                      defaultValue={userData.operating_name || ""}
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
                  <p>{userData.operating_name}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Company Address of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="company_address"
                      control={control}
                      defaultValue={userData.company_address || ""}
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
                  <p>{userData.company_address}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Company Email ID</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="company_email"
                      control={control}
                      defaultValue={userData.company_email || ""}
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
                  <p>{userData.company_email}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>GSTN of the enterprise</Form.Label>
                {editSection ? (
                  <>
                    <Controller
                      name="company_gstn"
                      control={control}
                      defaultValue={userData.company_gstn || ""}
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
                  <p>{userData.company_gstn}</p>
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
                      defaultValue={userData.first_name || ""}
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
                  <p>{userData.first_name}</p>
                )}
              </Form.Group>

              {/* <Form.Group as={Col} lg="4" md="6" sm="12">
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
              </Form.Group> */}

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Last Name</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="last_name"
                      control={control}
                      defaultValue={userData.last_name || ""}
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
                  <p>{userData.last_name}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Designation</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="designation"
                      control={control}
                      defaultValue={userData.designation || ""}
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
                  <p>{userData.designation}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Email ID</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_email"
                      control={control}
                      defaultValue={userData.contact_email || ""}
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
                  <p>{userData.contact_email}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>Mobile No</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_mobile"
                      control={control}
                      defaultValue={userData.contact_mobile || ""}
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
                  <p>{userData.contact_mobile}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="4" md="6" sm="12">
                <Form.Label>TelePhone No</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_telephone"
                      control={control}
                      defaultValue={userData.contact_telephone || ""}
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
                  <p>{userData.contact_telephone}</p>
                )}
              </Form.Group>

              <Form.Group as={Col} lg="12" md="12" sm="12">
                <Form.Label>Postal Address</Form.Label>
                {editSection2 ? (
                  <>
                    <Controller
                      name="contact_address"
                      control={control}
                      defaultValue={userData.contact_address || ""}
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
                  <p>{userData.contact_address}</p>
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
                onClick={() => navigate("/nsso-secured/identify-particulate-1")}
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
