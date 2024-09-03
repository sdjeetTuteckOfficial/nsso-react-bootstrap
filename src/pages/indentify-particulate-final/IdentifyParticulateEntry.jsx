import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import BasicInformationCard from './basic-information/BasicInformationCard';
import { enterpriseData, contactInfoData } from './demo-data/data';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup.object().shape({
  operationalStatus: yup.string().required('Operational status is required'),
  additionalInfo: yup.string().when('operationalStatus', {
    is: 'non-operational',
    then: yup
      .string()
      .required('Additional info is required when not operational'),
    otherwise: yup.string().notRequired(),
  }),
});

export default function IdentifyParticulateEntry() {
  const [showDropdown, setShowDropdown] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      operationalStatus: '',
      additionalInfo: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleStatusChange = (value) => {
    setShowDropdown(value === 'non-operational');
  };

  return (
    <>
      <Form className='siteForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex mb-2'>
          <h3 className='page-title'>Identification Particulars Entry</h3>
          <Button variant='light' type='button'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
        <BasicInformationCard
          items={enterpriseData.items}
          title={enterpriseData.title}
          count={1}
        />
        <BasicInformationCard
          items={contactInfoData.items}
          title={contactInfoData.title}
          count={2}
        />
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>3</span>{' '}
              <h5>
                Provide the current operational status of the enterprise
                identified by the legal and operating name above
              </h5>
            </Card.Title>
            <Card.Text>
              <Row>
                <Form.Group as={Col} lg='12' md='12' sm='12'>
                  <Form.Label>Operational Status</Form.Label>
                  <br />
                  <Controller
                    name='operationalStatus'
                    control={control}
                    render={({ field }) => (
                      <>
                        <Form.Check
                          inline
                          label='Operational'
                          type='radio'
                          value='operational'
                          id='operational'
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            handleStatusChange(e.target.value);
                          }}
                          checked={field.value === 'operational'}
                          className='me-3'
                        />
                        <Form.Check
                          inline
                          label='Not currently operational'
                          type='radio'
                          value='non-operational'
                          id='not-operational'
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            handleStatusChange(e.target.value);
                          }}
                          checked={field.value === 'non-operational'}
                          className='me-3'
                        />
                      </>
                    )}
                  />
                  {errors.operationalStatus && (
                    <p className='text-danger'>
                      {errors.operationalStatus.message}
                    </p>
                  )}
                </Form.Group>
                {showDropdown && (
                  <Form.Group as={Col} lg='12' md='12' sm='12'>
                    <Form.Label>Additional Information</Form.Label>
                    <Controller
                      name='additionalInfo'
                      control={control}
                      render={({ field }) => (
                        <Form.Select
                          {...field}
                          aria-label='Additional Information'
                          isInvalid={!!errors.additionalInfo}
                        >
                          <option value='seasonal'>Seasonal operations</option>
                          <option value='ceased'>Ceased operations</option>
                          <option value='sold'>Sold operations</option>
                          <option value='amalgamated'>Amalgamated</option>
                          <option value='inactive'>Temporarily inactive</option>
                          <option value='other'>Other</option>
                        </Form.Select>
                      )}
                    />
                    {errors.additionalInfo && (
                      <p className='text-danger'>
                        {errors.additionalInfo.message}
                      </p>
                    )}
                  </Form.Group>
                )}
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className='footerBtnGroup d-flex justify-content-end'>
          <Button variant='primary' className='ms-2' type='submit'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
      </Form>
    </>
  );
}
