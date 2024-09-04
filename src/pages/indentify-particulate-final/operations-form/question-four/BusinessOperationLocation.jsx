import Select from 'react-select';
import { Controller, useFormContext } from 'react-hook-form';
import { Form, Row, Col, Card } from 'react-bootstrap';

const indianStates = [
  { value: 'andhra-pradesh', label: 'Andhra Pradesh' },
  { value: 'arunachal-pradesh', label: 'Arunachal Pradesh' },
  { value: 'assam', label: 'Assam' },
  { value: 'bihar', label: 'Bihar' },
  { value: 'chhattisgarh', label: 'Chhattisgarh' },
  { value: 'goa', label: 'Goa' },
  { value: 'gujarat', label: 'Gujarat' },
  { value: 'haryana', label: 'Haryana' },
  { value: 'himachal-pradesh', label: 'Himachal Pradesh' },
  { value: 'jharkhand', label: 'Jharkhand' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'madhya-pradesh', label: 'Madhya Pradesh' },
  { value: 'maharashtra', label: 'Maharashtra' },
  { value: 'manipur', label: 'Manipur' },
  { value: 'meghalaya', label: 'Meghalaya' },
  { value: 'mizoram', label: 'Mizoram' },
  { value: 'nagaland', label: 'Nagaland' },
  { value: 'odisha', label: 'Odisha' },
  { value: 'punjab', label: 'Punjab' },
  { value: 'rajasthan', label: 'Rajasthan' },
  { value: 'sikkim', label: 'Sikkim' },
  { value: 'tamil-nadu', label: 'Tamil Nadu' },
  { value: 'telangana', label: 'Telangana' },
  { value: 'tripura', label: 'Tripura' },
  { value: 'uttar-pradesh', label: 'Uttar Pradesh' },
  { value: 'uttarakhand', label: 'Uttarakhand' },
  { value: 'west-bengal', label: 'West Bengal' },
  { value: 'andaman-nicobar', label: 'Andaman and Nicobar Islands' },
  { value: 'chandigarh', label: 'Chandigarh' },
  { value: 'dadra-nagar-haveli', label: 'Dadra and Nagar Haveli' },
  { value: 'daman-diu', label: 'Daman and Diu' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'lakshadweep', label: 'Lakshadweep' },
  { value: 'puducherry', label: 'Puducherry' },
];

const BusinessOperationLocation = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

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
                  options={indianStates}
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
