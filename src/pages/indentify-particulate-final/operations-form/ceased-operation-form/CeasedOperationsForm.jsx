import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';

function CeasedOperationDetails() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Row>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>When did this enterprise cease operations?</Form.Label>
        <Controller
          name='ceaseDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.ceaseDate}
            />
          )}
        />
        {errors.ceaseDate && (
          <p className='text-danger'>{errors.ceaseDate.message}</p>
        )}
      </Form.Group>

      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>Why did this enterprise cease operations?</Form.Label>
        <Controller
          name='ceaseReason'
          control={control}
          render={({ field }) => (
            <Form.Select
              {...field}
              isInvalid={!!errors.ceaseReason}
              aria-label='Why did this enterprise cease operations?'
            >
              <option value=''>Select a reason</option>
              <option value='221'>Bankruptcy</option>
              <option value='222'>Liquidation</option>
              <option value='223'>Dissolution</option>
              <option value='229'>Other</option>
            </Form.Select>
          )}
        />
        {errors.ceaseReason && (
          <p className='text-danger'>{errors.ceaseReason.message}</p>
        )}
      </Form.Group>
      <Form.Group as={Col} lg='12' md='12' sm='12'>
        <Form.Label>Specify the operation: Why ceased?</Form.Label>
        <Controller
          name='ceaseComment'
          control={control}
          render={({ field }) => (
            <Form.Control
              as='textarea'
              rows={3}
              {...field}
              isInvalid={!!errors.ceaseComment}
              placeholder='Provide additional details'
            />
          )}
        />
        {errors.ceaseComment && (
          <p className='text-danger'>{errors.ceaseComment.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default CeasedOperationDetails;
