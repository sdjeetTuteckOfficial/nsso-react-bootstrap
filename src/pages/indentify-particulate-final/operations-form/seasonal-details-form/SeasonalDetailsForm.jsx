import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';

function SeasonalOperationDetails() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Row>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>When did this enterprise close for the season?</Form.Label>
        <Controller
          name='closeDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.closeDate}
            />
          )}
        />
        {errors.closeDate && (
          <p className='text-danger'>{errors.closeDate.message}</p>
        )}
      </Form.Group>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          When does this enterprise expect to resume operations?
        </Form.Label>
        <Controller
          name='resumeDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.resumeDate}
            />
          )}
        />
        {errors.resumeDate && (
          <p className='text-danger'>{errors.resumeDate.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default SeasonalOperationDetails;
