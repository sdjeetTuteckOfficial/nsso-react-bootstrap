import { useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form, Button } from 'react-bootstrap';
import MultiCompanyCin from './multiple-company-cin/MultiCompanyCin';

function AmalgamatedForm({ handleCompanyData }) {
  const [showMultiCompanyCin, setShowMultiCompanyCin] = useState(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // Function to handle MultiCompanyCin form submission
  const handleMultiCompanyCinSubmit = (companyData) => {
    console.log('com', companyData);
    handleCompanyData(companyData);
  };

  return (
    <Row>
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>When did this enterprise amalgamate?</Form.Label>
        <Controller
          name='amalgamateDate'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='date'
              {...field}
              isInvalid={!!errors.amalgamateDate}
            />
          )}
        />
        {errors.amalgamateDate && (
          <p className='text-danger'>{errors.amalgamateDate.message}</p>
        )}
      </Form.Group>

      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          What is the CIN of the resulting or continuing enterprise?
        </Form.Label>
        <Controller
          name='resultingCIN'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='text'
              {...field}
              isInvalid={!!errors.resultingCIN}
            />
          )}
        />
        {errors.resultingCIN && (
          <p className='text-danger'>{errors.resultingCIN.message}</p>
        )}
      </Form.Group>

      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          What is the Legal name of the resulting or continuing enterprise?
        </Form.Label>
        <Controller
          name='resultingLegalName'
          control={control}
          render={({ field }) => (
            <Form.Control
              type='text'
              {...field}
              isInvalid={!!errors.resultingLegalName}
            />
          )}
        />
        {errors.resultingLegalName && (
          <p className='text-danger'>{errors.resultingLegalName.message}</p>
        )}
      </Form.Group>

      {/* <Col lg='12' className='text-start mt-4'>
        <Button
          variant='primary'
          size='sm'
          onClick={() => setShowMultiCompanyCin(true)}
        >
          Add previous company legal name and CIN
        </Button>
      </Col> */}

      {/* {showMultiCompanyCin && ( */}
      <Col lg='12' className='mt-4'>
        <MultiCompanyCin
          label='Provide company legal and cin name (upto 5)'
          countNumber={5}
          onSubmit={handleMultiCompanyCinSubmit}
        />
      </Col>
      {/* )} */}
    </Row>
  );
}

export default AmalgamatedForm;
