import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

function Test() {
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
    <Container className='mt-4'>
      <Row>
        <Col md={6} lg={4} className='mx-auto'>
          <h1 className='mb-4'>Registration Form</h1>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId='formName'>
              <Form.Label>Name</Form.Label>
              <Controller
                name='name'
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    isInvalid={!!errors.name}
                    {...field}
                  />
                )}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Email</Form.Label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type='email'
                    placeholder='Enter your email'
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

            <Button variant='primary' type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Test;
