import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControl,
  Button,
  Container,
  FormGroup,
  FormLabel,
  Row,
  Col,
} from 'react-bootstrap';

// Define Yup validation schema
const schema = yup.object().shape({
  legalName: yup.string().required('Legal name is required'),
  cin: yup.string().required('CIN is required'),
});

const MultiCompanyCin = ({ handleMultiCompanyCinSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Handle form submission
  const handleFormSubmit = (data) => {
    console.log(data);

    handleMultiCompanyCinSubmit();
  };

  // Handle form clear
  const handleClear = () => {
    reset(); // Clear form fields
    handleMultiCompanyCinSubmit();
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col lg={4} md={6} sm={12}>
          <FormGroup controlId='formLegalName'>
            <FormLabel>Legal Name</FormLabel>
            <FormControl
              type='text'
              placeholder='Enter legal name'
              {...register('legalName')}
            />
            {errors.legalName && (
              <div className='text-danger'>{errors.legalName.message}</div>
            )}
          </FormGroup>
        </Col>

        <Col lg={4} md={6} sm={12}>
          <FormGroup controlId='formCIN'>
            <FormLabel>CIN</FormLabel>
            <FormControl
              type='text'
              placeholder='Enter CIN'
              {...register('cin')}
            />
            {errors.cin && (
              <div className='text-danger'>{errors.cin.message}</div>
            )}
          </FormGroup>
        </Col>

        <Col lg={4} md={6} sm={12} className='d-flex align-items-end'>
          <Button
            variant='primary'
            onClick={handleSubmit(handleFormSubmit)}
            className='me-2'
          >
            Submit
          </Button>
          <Button variant='secondary' onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MultiCompanyCin;
