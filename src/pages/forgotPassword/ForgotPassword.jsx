import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import authImg from '../../assets/authImg.svg';
import logo from '../../assets/logo.svg';
import forgotPasswordClass from './css/forgotPassword.module.css';
import Card from 'react-bootstrap/Card';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});


const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container fluid className={`vh-100 ${forgotPasswordClass['main-container']}`}>
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
              className={forgotPasswordClass['img-fluid']}
              />
            </div>
            <div className='w-100 h-50 mt-5'>
              <h1 >Forgot Password?</h1>
              <p className='mb-4'>No worries, We will send you reset Instructions</p>
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

                <Button
                  variant='primary'
                  type='submit'
                  className='mt-3 w-100'
                  size="lg"
                  disabled={isSubmitting}
                >
                  Send Password Reset Link
                </Button>
              </Form>
              <div className='card border-0 d-flex justify-content-center align-items-center mt-3 w-100'>
                <p className={forgotPasswordClass['p-know']}>Know your password? Login Now</p>
              </div>
              </div>
          </div>
        </Col>
        <Col
          sm={7}
          // md={6}
          className={`d-none d-md-flex justify-content-center align-items-center ${forgotPasswordClass['image-container']} p-0`}
        >
          <Card as={'div'} border='0' className={`d-md-flex justify-content-center align-items-center ${forgotPasswordClass['imgSubContainer']}`}>
            <img
              src={authImg}
              alt='Login'
              className={forgotPasswordClass['img-fluid']}
              />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPassword