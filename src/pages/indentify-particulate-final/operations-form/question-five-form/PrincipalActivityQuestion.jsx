import { Form, Col, Card } from 'react-bootstrap';
import { useFormContext, Controller } from 'react-hook-form';

const PrincipalActivityQuestion = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const principalActivity = watch('principalActivity');

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
                  //   as='select'
                  {...field}
                  isInvalid={!!errors.principalActivity}
                >
                  <option value='' disabled>
                    Select an activity
                  </option>
                  <option value='101'>
                    Agriculture, forestry, and fishing
                  </option>
                  <option value='102'>Mining and quarrying</option>
                  <option value='103'>Manufacturing</option>
                  <option value='104'>
                    Electricity, gas, steam, air conditioning supply
                  </option>
                  <option value='105'>
                    Water supply, sewerage, waste management and radiation
                    activities
                  </option>
                  <option value='106'>Construction</option>
                  <option value='107'>
                    Wholesale and retail trade and repair of motor vehicles and
                    motorcycles
                  </option>
                  <option value='108'>Transportation and storage</option>
                  <option value='109'>
                    Accommodation and food service activities
                  </option>
                  <option value='110'>Information and communication</option>
                  <option value='111'>
                    Financial and Insurance activities
                  </option>
                  <option value='112'>Real estate activities</option>
                  <option value='113'>
                    Professional, Scientific and technical activities
                  </option>
                  <option value='114'>
                    Administrative and support service activities, public
                    administration and defense, compulsory social security
                  </option>
                  <option value='115'>Education</option>
                  <option value='116'>
                    Human health, and social work activities
                  </option>
                  <option value='117'>
                    Arts, entertainment and recreation, other service activities
                    n.e.c.
                  </option>
                  <option value='118'>Others</option>
                </Form.Select>
                <Form.Control.Feedback type='invalid'>
                  {errors.principalActivity?.message}
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
