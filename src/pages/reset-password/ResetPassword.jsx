import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import authImg from '../../assets/authImg.svg';
import logo from '../../assets/logo.svg';
import resetPasswordClass from './css/resetPassword.module.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Confirm password is required')
    .test(
      'passwords-match',
      'New password cannot be the same as the old password',
      function (value) {
        return value !== this.parent.password;
      }
    ),
});

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    callResetPassword(data);
  };

  async function callResetPassword(data) {
    const url =
      'http://10.48.16.236:83/api/SURVEYUSER/v1/SurveyUser/ChangePasswordSurveyUserAsync';
    const payload = {
      userId: 0,
      surveyId: 0,
      industryId: 0,
      // "surveyUserName": "string",
      oldPassword: data.password,
      newPassword: data.confirmPassword,
      id: 0,
      activeUserId: 0,
      isForceValid: true,
      message: 'Operation Successful',
      // deletionReason: 'string',
      isValid: true,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data; // Return the response data if needed
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  }

  return (
    <Container
      fluid
      className={`vh-100 ${resetPasswordClass['main-container']}`}
    >
      <Row className='h-100 mx-2'>
        <Col
          sm={5}
          // md={6}
          className='card border-0 d-flex justify-content-center align-items-center'
        >
          <div className='w-75 h-75 border-box grid gap-5 '>
            <div className='w-100 h-25 d-flex  card border-0 '>
              <img
                src={logo}
                alt='Login'
                className={resetPasswordClass['img-fluid']}
              />
            </div>
            <div className='w-100 h-50 mt-5'>
              <h1>Reset Password </h1>
              <p className='mb-4'>
                After reset password you redirect to login page
              </p>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Old Password *</Form.Label>
                  <Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type='password'
                        placeholder='********'
                        isInvalid={!!errors.password}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Confirm New Password *</Form.Label>
                  <Controller
                    name='confirmPassword'
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type='password'
                        placeholder='********'
                        isInvalid={!!errors.confirmPassword}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.confirmPassword?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant='primary'
                  type='submit'
                  className='mt-3 w-100'
                  size='lg'
                  disabled={isSubmitting}
                >
                  Reset Password
                </Button>
              </Form>
              <div className='card border-0 d-flex justify-content-center align-items-center mt-3 w-100'>
                <p
                  className={resetPasswordClass['p-know']}
                  onClick={() => navigate('/')}
                >
                  Know your password? Login Now
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col
          sm={7}
          // md={6}
          className={`d-none d-md-flex justify-content-center align-items-center ${resetPasswordClass['image-container']} p-0`}
        >
          <Card
            as={'div'}
            border='0'
            className={`d-md-flex justify-content-center align-items-center ${resetPasswordClass['imgSubContainer']}`}
          >
            <img
              src={authImg}
              alt='Login'
              className={resetPasswordClass['img-fluid']}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
