import { useState } from 'react';
import { Form, Col, Card } from 'react-bootstrap';
import { useFormContext, Controller } from 'react-hook-form';
import { principalActivities } from './activity-json/activity-json';
import { aggricultureData } from './activity-json/activity-json';

const PrincipalActivityQuestion = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const principalActivity = watch('principalActivity');
  const secondaryActivity = watch('secondaryActivity');
  const [dependantDropdownValue, setDependantDropdownValue] = useState([]);
  const handlePrincipalActivityDropdownChange = (value) => {
    console.log('hambaaa', value);
    if (value === '101') {
      setDependantDropdownValue(() => aggricultureData);
    }
  };

  return (
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title>
          <span className='Count'>5</span>
          <h5>
            Provide the current Principal / Main activity of the enterprise
          </h5>
        </Card.Title>
        <Form.Group as={Col} lg='6' md='12' sm='12'>
          <Form.Label>Select the main activity</Form.Label>
          <Controller
            name='principalActivity'
            control={control}
            render={({ field }) => (
              <>
                <Form.Select
                  {...field}
                  isInvalid={!!errors.principalActivity}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    handlePrincipalActivityDropdownChange(e.target.value);
                  }}
                >
                  {principalActivities.map((activity) => (
                    <option
                      key={activity.value}
                      value={activity.value}
                      disabled={activity.disabled}
                    >
                      {activity.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type='invalid'>
                  {errors.principalActivity?.message}
                </Form.Control.Feedback>
              </>
            )}
          />
        </Form.Group>
        <Form.Group as={Col} lg='6' md='12' sm='12'>
          <Form.Label>Select the secondary activity</Form.Label>
          <Controller
            name='secondaryActivity'
            control={control}
            render={({ field }) => (
              <>
                <Form.Select {...field} isInvalid={!!errors.principalActivity}>
                  <option value='' disabled>
                    Select an option
                  </option>
                  {dependantDropdownValue.map((activity) => (
                    <option
                      key={activity.value}
                      value={activity.value}
                      disabled={activity.disabled}
                    >
                      {activity.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type='invalid'>
                  {errors.secondaryActivity?.message}
                </Form.Control.Feedback>
              </>
            )}
          />
        </Form.Group>
        {principalActivity === '118' && (
          <Form.Group as={Col} lg='12' md='12' sm='12'>
            <Form.Label>If others, please specify</Form.Label>
            <Controller
              name='otherActivity'
              control={control}
              render={({ field }) => (
                <>
                  <Form.Control
                    type='text'
                    as='textarea'
                    {...field}
                    isInvalid={!!errors.otherActivity}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.otherActivity?.message}
                  </Form.Control.Feedback>
                </>
              )}
            />
          </Form.Group>
        )}
      </Card.Body>
    </Card>
  );
};

export default PrincipalActivityQuestion;
