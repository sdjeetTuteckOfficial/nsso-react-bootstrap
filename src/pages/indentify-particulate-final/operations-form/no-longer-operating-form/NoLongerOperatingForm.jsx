import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';

function NoLongerOperatingForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Row>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>When did this enterprise stop operations?</Form.Label>
        <Controller
          name='stopDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.stopDate}
            />
          )}
        />
        {errors.stopDate && (
          <p className='text-danger'>{errors.stopDate.message}</p>
        )}
      </Form.Group>
      <Form.Group as={Col} lg='12'>
        <Form.Label>Why did this enterprise stop operations?</Form.Label>
        <Controller
          name='stopReason'
          control={control}
          render={({ field }) => (
            <Form.Control
              as='textarea'
              rows={3}
              {...field}
              isInvalid={!!errors.stopReason}
            />
          )}
        />
        {errors.stopReason && (
          <p className='text-danger'>{errors.stopReason.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default NoLongerOperatingForm;
