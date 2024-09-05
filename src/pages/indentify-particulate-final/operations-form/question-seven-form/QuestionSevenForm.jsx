import { Form, Col, Card } from 'react-bootstrap';
import { useFormContext, Controller, useFieldArray } from 'react-hook-form';

const QuestionSevenForm = () => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const hasAmalgamated = watch('hasAmalgamated');
  const numberOfEnterprises = watch('numberOfEnterprises');

  const { fields, append, remove } = useFieldArray({
    name: 'enterpriseDetails',
    control,
  });

  // Handle changes in the number of enterprises
  const handleNumberChange = (event) => {
    const num = parseInt(event.target.value, 10);
    setValue('numberOfEnterprises', num);

    // Add or remove fields based on the new number
    if (num > fields.length) {
      for (let i = fields.length; i < num; i++) {
        append({ name: '', cin: '' });
      }
    } else if (num < fields.length) {
      for (let i = fields.length; i > num; i--) {
        remove(i - 1); // Remove the last field first
      }
    }
  };

  return (
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title>
          <span className='Count'>7</span>
          <h5>
            Whether any enterprise is amalgamated, merged, or acquired by this
            enterprise in the current financial year (i.e., after 31.03.2024)
          </h5>
        </Card.Title>

        <Form.Group as={Col} lg='12' md='12' sm='12'>
          <Form.Label>
            Has the enterprise been amalgamated, merged, or acquired?
          </Form.Label>
          <Controller
            name='hasAmalgamated'
            control={control}
            render={({ field }) => (
              <>
                <Form.Check
                  type='radio'
                  label='Yes'
                  value='1'
                  checked={field.value === '1'}
                  onChange={field.onChange}
                />
                <Form.Check
                  type='radio'
                  label='No'
                  value='2'
                  checked={field.value === '2'}
                  onChange={field.onChange}
                />
              </>
            )}
          />
        </Form.Group>

        {hasAmalgamated === '1' && (
          <>
            <Form.Group as={Col} lg='12' md='12' sm='12'>
              <Form.Label>
                Number of enterprises amalgamated, merged, or acquired
              </Form.Label>
              <Controller
                name='numberOfEnterprises'
                control={control}
                render={({ field }) => (
                  <Form.Control
                    type='number'
                    {...field}
                    onChange={(e) => {
                      handleNumberChange(e);
                      field.onChange(e);
                    }}
                    isInvalid={!!errors.numberOfEnterprises}
                  />
                )}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.numberOfEnterprises?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div className='row'>
              {fields.map((item, index) => (
                <div key={item.id} className='col-lg-6 col-md-12 mb-3'>
                  <Form.Group as={Col} lg='6' md='6' sm='12'>
                    <Form.Label>Enterprise Name {index + 1}</Form.Label>
                    <Controller
                      name={`enterpriseDetails.${index}.name`}
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type='text'
                          {...field}
                          isInvalid={!!errors.enterpriseDetails?.[index]?.name}
                        />
                      )}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.enterpriseDetails?.[index]?.name?.message}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} lg='6' md='6' sm='12'>
                    <Form.Label>CIN {index + 1}</Form.Label>
                    <Controller
                      name={`enterpriseDetails.${index}.cin`}
                      control={control}
                      render={({ field }) => (
                        <Form.Control
                          type='text'
                          {...field}
                          isInvalid={!!errors.enterpriseDetails?.[index]?.cin}
                        />
                      )}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.enterpriseDetails?.[index]?.cin?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
              ))}
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuestionSevenForm;
