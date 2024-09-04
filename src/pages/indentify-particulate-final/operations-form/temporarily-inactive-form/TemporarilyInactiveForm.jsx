import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';

function TemporarilyInactiveForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Row>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          When did this enterprise become temporarily inactive?
        </Form.Label>
        <Controller
          name='inactiveDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.inactiveDate}
            />
          )}
        />
        {errors.inactiveDate && (
          <p className='text-danger'>{errors.inactiveDate.message}</p>
        )}
      </Form.Group>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          When does this enterprise expect to resume operations?
        </Form.Label>
        <Controller
          name='resumeDateTemp'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.resumeDateTemp}
            />
          )}
        />
        {errors.resumeDateTemp && (
          <p className='text-danger'>{errors.resumeDateTemp.message}</p>
        )}
      </Form.Group>
      <Form.Group as={Col} lg='12'>
        <Form.Label>Why is this enterprise temporarily inactive?</Form.Label>
        <Controller
          name='inactiveReason'
          control={control}
          render={({ field }) => (
            <Form.Control
              as='textarea'
              rows={3}
              {...field}
              isInvalid={!!errors.inactiveReason}
            />
          )}
        />
        {errors.inactiveReason && (
          <p className='text-danger'>{errors.inactiveReason.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default TemporarilyInactiveForm;
