import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import loginClass from './css/login.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import loginbg from '../../assets/login-bg.svg';
import Card from 'react-bootstrap/Card';
import { requiredValidator } from '../../components/validator/CommonValidator';
import { showToast } from '../../redux/toast-slice/toastSlice';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: requiredValidator("field"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    authenticateUser(data.email, data.password);
  };

  async function authenticateUser(username, password) {
    const url1 =
      "http://10.48.16.236:83/api/SURVEYUSER/v1/SurveyUser/AuthenticateSurveyUserAsync";
    const url2 =
      "http://10.48.16.236:83/api/SURVEYUSER/v1/SurveyUser/GetSurveyUserDetailsByIdAsync/1";

    const payload = {
      username: username,
      userId: 0,
      password: password,
      userIpAddress: "127.0.0.1", // Example IP address, update as needed
      connectedThrough: "web", // Example value, update as needed
      deviceInfo: "Web Browser", // Example value, update as needed
      isFromWeb: true,
      industrySurveyId: 0,
      id: 0,
      activeUserId: 0,
      isForceValid: true,
      message: "Operation Successful",
      deletionReason: "",
      isValid: true,
    };

    try {
      const response1 = await fetch(url1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response1.ok) {
        throw new Error(`HTTP error! Status: ${response1.status}`);
      }

      const data1 = await response1.json();
      console.log("Authentication Successful:", data1);

      const token = data1.userToken.token;
      sessionStorage.setItem("token", token);

      const response2 = await fetch(url2, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response2.ok) {
        throw new Error(`HTTP error! Status: ${response2.status}`);
      }

      const data2 = await response2.json();
      sessionStorage.setItem("user_id", data2.id);
      sessionStorage.setItem("userName", data2.userName);
      sessionStorage.setItem("industrySurveyId", data2.industrySurveyId);
      console.log("User Details:", data2, data2.isPasswordChanged);
      if (data2?.isPasswordChanged === true) {
        navigate('/nsso-secured/home');
        dispatch(showToast({ show: true, message: 'Login successful' }));
      } else {
        navigate("/reset-password");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  }

  // Example usage:

  return (
    <Container
      fluid
      className={`vh-100 ${loginClass["main-container"]}  login-page`}
    >
      <Row className="h-100 mx-2">
        <Col
          sm={5}
          // md={6}
          className="card border-0 d-flex justify-content-center align-items-center"
        >
          <div className="w-75 h-75 border-box grid gap-5 ">
            <div className="w-100 h-25 d-flex  card border-0 ">
              <img src={logo} alt="Login" className="site-logo" />
            </div>
            <div className="w-100  mt-3">
              <h2>Welcom Back!</h2>
              <h1 className="mb-4 ">Login</h1>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>User ID *</Form.Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type=""
                        placeholder="Enter Your CIN"
                        isInvalid={!!errors.email}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password *</Form.Label>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        isInvalid={!!errors.password}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="mt-3 w-100"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Form>
              <div className="card border-0 d-flex justify-content-center align-items-center mt-3 w-100">
                <p
                  className={loginClass["p-know"]}
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col
          sm={7}
          // md={6}
          className={`d-none d-md-flex justify-content-center align-items-center ${loginClass["image-container"]} p-0`}
        >
          <Card as={"div"} border="0" className="login-bg">
            <img
              src={loginbg}
              alt="Login"
              className={loginClass["img-fluid"]}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
