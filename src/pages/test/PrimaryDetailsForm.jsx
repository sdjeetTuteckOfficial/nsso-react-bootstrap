import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'react-bootstrap';

const PrimaryDetailsForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              isInvalid={!!errors.name}
              placeholder='Enter your name'
            />
          )}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.name?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email</Form.Label>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              isInvalid={!!errors.email}
              placeholder='Enter your email'
            />
          )}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId='age'>
        <Form.Label>Age</Form.Label>
        <Controller
          name='age'
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              isInvalid={errors.age && errors.age.type !== 'soft-check'}
              placeholder='Enter your age'
            />
          )}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.age?.message && errors.age.type !== 'soft-check'
            ? errors.age.message
            : ''}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};

export default PrimaryDetailsForm;
