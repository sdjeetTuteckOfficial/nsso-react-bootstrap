import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import loginClass from './css/login.module.css';
import { useNavigate } from 'react-router-dom';
import authImg from '../../assets/authImg.svg';
import logo from '../../assets/logo.svg';
import Card from 'react-bootstrap/Card';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
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

  const onSubmit = (data) => {
    console.log(data);
    navigate('/nsso-secured/test');
  };

 return (
    <Container fluid className={`vh-100 ${loginClass['main-container']}`}>
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
              className={loginClass['img-fluid']}
              />
            </div>
            <div className='w-100 h-50 mt-5'>
              <h2 className='fw-light'>Welcom Back!</h2>
              <h1 className='mb-4 '>Login</h1>
             <Form noValidate onSubmit={handleSubmit(onSubmit)} >
               <Form.Group controlId='formEmail'>
                  <Form.Label>Email address*</Form.Label>
                  <Controller
                    name='email'
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        type='email'
                        placeholder='Enter Your Email Address'
                        isInvalid={!!errors.email}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='formPassword'>
                  <Form.Label>Password *</Form.Label>
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

                <Button
                  variant='primary'
                  type='submit'
                  className='mt-3 w-100'
                  size="lg"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Form>
              <div className='card border-0 d-flex justify-content-center align-items-center mt-3 w-100'>
                <p className={loginClass['p-know']}>Forgot Password</p>
              </div>
              </div>
          </div>
        </Col>
        <Col
          sm={7}
          // md={6}
          className={`d-none d-md-flex justify-content-center align-items-center ${loginClass['image-container']} p-0`}
        >
          <Card as={'div'} border='0' className={`d-md-flex justify-content-center align-items-center ${loginClass['imgSubContainer']}`}>
            <img
              src={authImg}
              alt='Login'
              className={loginClass['img-fluid']}
              />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
