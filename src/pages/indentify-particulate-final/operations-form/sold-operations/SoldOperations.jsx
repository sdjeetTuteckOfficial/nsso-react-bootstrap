import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';

function SoldOperationsForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Row>
      {/* Date of Sale */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>When did the enterprise sell?</Form.Label>
        <Controller
          name='soldDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.soldDate}
            />
          )}
        />
        {errors.soldDate && (
          <p className='text-danger'>{errors.soldDate.message}</p>
        )}
      </Form.Group>

      {/* CIN of Buyer */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>What is the CIN of the buyer?</Form.Label>
        <Controller
          name='buyerCIN'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='text'
              {...field}
              isInvalid={!!errors.buyerCIN}
            />
          )}
        />
        {errors.buyerCIN && (
          <p className='text-danger'>{errors.buyerCIN.message}</p>
        )}
      </Form.Group>

      {/* Legal Name of Buyer */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>What is the legal name of the buyer?</Form.Label>
        <Controller
          name='buyerLegalName'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='text'
              {...field}
              isInvalid={!!errors.buyerLegalName}
            />
          )}
        />
        {errors.buyerLegalName && (
          <p className='text-danger'>{errors.buyerLegalName.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default SoldOperationsForm;
