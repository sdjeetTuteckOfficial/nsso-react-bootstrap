import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import {
  FormControl,
  Button,
  Container,
  FormGroup,
  FormLabel,
  Row,
  Col,
  ListGroup,
  Alert,
} from 'react-bootstrap';

// Define Yup validation schema
const schema = yup.object().shape({
  legalName: yup.string().required('Legal name is required'),
  cin: yup.string().required('CIN is required'),
});

const MultiCompanyCin = ({ handleMultiCompanyCinSubmit }) => {
  const [companyList, setCompanyList] = useState([]);
  const [error, setError] = useState(null); // State to handle the error when exceeding the limit

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      legalName: '',
      cin: '',
    },
  });

  const handleFormSubmit = (data) => {
    if (companyList.length >= 5) {
      setError('You can only add up to 5 companies.'); // Show error message if limit reached
      return;
    }
    const companyData = { id: uuidv4(), ...data };
    setCompanyList((prevList) => [...prevList, companyData]);
    handleClear();
    // handleMultiCompanyCinSubmit();
  };

  // Handle form clear
  const handleClear = () => {
    reset({
      legalName: '',
      cin: '',
    });
    handleMultiCompanyCinSubmit();
    setError(null); // Clear error message
  };

  // Handle company deletion from the list
  const handleDelete = (id) => {
    const updatedList = companyList.filter((company) => company.id !== id);
    setCompanyList(updatedList); // Remove company from list
    setError(null); // Clear error if a company is deleted
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
            +
          </Button>
          <Button variant='secondary' onClick={handleClear}>
            Clear
          </Button>
        </Col>
      </Row>

      {error && (
        <Row className='mt-3'>
          <Col>
            <Alert variant='danger'>{error}</Alert>{' '}
            {/* Display error message */}
          </Col>
        </Row>
      )}

      <Row className='mt-4'>
        <Col>
          <h5>Company List</h5>
          <ListGroup>
            {companyList.length === 0 ? (
              <div>No companies added yet.</div>
            ) : (
              companyList.map((company, index) => (
                <ListGroup.Item key={company.id}>
                  <Row>
                    <Col>
                      <strong>Legal Name:</strong> {company.legalName}
                    </Col>
                    <Col>
                      <strong>CIN:</strong> {company.cin}
                    </Col>
                    <Col className='d-flex justify-content-end'>
                      <Button
                        variant='danger'
                        size='sm'
                        onClick={() => handleDelete(company.id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MultiCompanyCin;
