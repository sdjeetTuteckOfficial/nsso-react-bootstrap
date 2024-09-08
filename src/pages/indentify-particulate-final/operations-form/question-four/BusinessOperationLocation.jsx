import Select from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';
import { Form, Row, Col, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BusinessOperationLocation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const reduxData = useSelector((state) => state.responseSlice.data);

  const dropdownData =
    reduxData?.state_data?.map((item) => {
      return {
        label: item.state_name,
        value: item.id,
      };
    }) || [];

  console.log('hohoho', dropdownData, reduxData);

  return (
    <Card className='questionCard mb-3'>
      <Card.Body>
        <Card.Title>
          <span className='Count'>4</span>
          <h5>Provide the place of Business Operation of the Enterprise</h5>
        </Card.Title>
        <Form.Group as={Row}>
          <Form.Label as={Col} sm='12' md='12' lg='12'>
            Provide the list of states and Union territories
          </Form.Label>
          <Col sm='12' md='12' lg='6'>
            <Controller
              name='businessOperationLocation'
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={dropdownData}
                  classNamePrefix='react-select'
                  placeholder='Select states...'
                  isInvalid={!!errors.businessOperationLocation}
                />
              )}
            />
            {errors.businessOperationLocation && (
              <p className='text-danger'>
                {errors.businessOperationLocation.message}
              </p>
            )}
          </Col>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default BusinessOperationLocation;
