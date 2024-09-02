import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import login_image from '../../assets/img.jpg';
import loginClass from './css/login.module.css';
import { useNavigate } from 'react-router-dom';

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
    <Container fluid className='vh-100'>
      <Row className='h-100'>
        <Col
          md={6}
          className={`d-none d-md-flex justify-content-center align-items-center ${loginClass['image-container']} p-0`}
        >
          <img
            src={login_image}
            alt='Login'
            className={loginClass['img-fluid']}
          />
        </Col>
        <Col
          md={6}
          className='d-flex justify-content-center align-items-center'
        >
          <div className='w-75'>
            <h1 className='mb-4'>Login</h1>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      type='email'
                      placeholder='Enter email'
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
                <Form.Label>Password</Form.Label>
                <Controller
                  name='password'
                  control={control}
                  render={({ field }) => (
                    <Form.Control
                      type='password'
                      placeholder='Password'
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
                className='mt-3'
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
