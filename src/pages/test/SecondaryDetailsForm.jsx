import { Controller, useFormContext } from 'react-hook-form';
import { Form } from 'react-bootstrap';

const SecondaryDetailsForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Form.Group controlId='education'>
        <Form.Label>Education</Form.Label>
        <Controller
          name='education'
          control={control}
          render={({ field }) => (
            <Form.Control
              {...field}
              isInvalid={!!errors.education}
              placeholder='Enter your education details'
            />
          )}
        />
        <Form.Control.Feedback type='invalid'>
          {errors.education?.message}
        </Form.Control.Feedback>
      </Form.Group>
      {/* Add more education-related fields as needed */}
    </>
  );
};

export default SecondaryDetailsForm;
