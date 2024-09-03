import { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from 'react-bootstrap';
import BasicInformationCard from './basic-information/BasicInformationCard';
import { enterpriseData, contactInfoData } from './demo-data/data';
import SeasonalOperationDetails from './operations-form/seasonal-details-form/SeasonalDetailsForm';

const schema = yup.object().shape({
  operationalStatus: yup.string().required('Operational status is required'),
  additionalInfo: yup.string().when('operationalStatus', {
    is: (val) => val === 'non-operational',
    then: () =>
      yup.string().required('Additional info is required when not operational'),
    otherwise: () => yup.string().notRequired(),
  }),
  closeDate: yup.string().when('additionalInfo', {
    is: (val) => val === 'seasonal',
    then: () => yup.date().required('Close date is required'),
    otherwise: () => yup.date().notRequired(),
  }),
  resumeDate: yup.string().when('additionalInfo', {
    is: (val) => val === 'seasonal',
    then: () => yup.date().required('Resume date is required'),
    otherwise: () => yup.date().notRequired(),
  }),
});

export default function IdentifyParticulateEntry() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [whyNotOperational, setWhyNotOperational] = useState('');

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      operationalStatus: '',
      additionalInfo: '',
      closeDate: '',
      resumeDate: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleStatusChange = (value) => {
    if (value === 'operational') {
      //do setValues
      setWhyNotOperational('');
    }
    setShowDropdown(value === 'non-operational');
  };

  return (
    <FormProvider {...methods}>
      <Form className='siteForm' onSubmit={methods.handleSubmit(onSubmit)}>
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
                    control={methods.control}
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
                  {methods.formState.errors.operationalStatus && (
                    <p className='text-danger'>
                      {methods.formState.errors.operationalStatus.message}
                    </p>
                  )}
                </Form.Group>
                {showDropdown && (
                  <Form.Group as={Col} lg='12' md='12' sm='12'>
                    <Form.Label>Additional Information</Form.Label>
                    <Controller
                      name='additionalInfo'
                      control={methods.control}
                      render={({ field }) => (
                        <Form.Select
                          {...field}
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            setWhyNotOperational(e.target.value);
                          }}
                          aria-label='Additional Information'
                          isInvalid={!!methods.formState.errors.additionalInfo}
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
                    {methods.formState.errors.additionalInfo && (
                      <p className='text-danger'>
                        {methods.formState.errors.additionalInfo.message}
                      </p>
                    )}
                  </Form.Group>
                )}
                {whyNotOperational === 'seasonal' && (
                  <SeasonalOperationDetails />
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
    </FormProvider>
  );
}
