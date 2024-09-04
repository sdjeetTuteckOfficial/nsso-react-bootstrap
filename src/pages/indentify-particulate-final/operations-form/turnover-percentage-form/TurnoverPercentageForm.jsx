import { Form, Col, Card } from 'react-bootstrap';
import { useFormContext, Controller } from 'react-hook-form';

const TurnoverPercentageQuestion = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title>
          <span className='Count'>6</span>
          <h5>
            Percentage of Total Turnover contributed by the Principal / Main
            activity
          </h5>
        </Card.Title>
        <Form.Group as={Col} lg='6' md='12' sm='12'>
          <Form.Label>Enter the percentage</Form.Label>
          <Controller
            name='turnoverPercentage'
            control={control}
            render={({ field }) => (
              <>
                <Form.Control
                  type='number'
                  {...field}
                  isInvalid={!!errors.turnoverPercentage}
                  placeholder='Enter percentage'
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.turnoverPercentage?.message}
                </Form.Control.Feedback>
              </>
            )}
          />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default TurnoverPercentageQuestion;
