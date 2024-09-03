import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Modal } from 'react-bootstrap';
import { validationSchema } from './validationSchema';
import PrimaryDetailsForm from './PrimaryDetailsForm';
import SecondaryDetailsForm from './SecondaryDetailsForm';

const ParentForm = () => {
  const [softWarnings, setSoftWarnings] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      age: '',
      education: '', // Add other default values as needed
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    getValues,
  } = methods;

  useEffect(() => {
    const warnings = Object.values(errors).filter(
      (error) => error.type === 'soft-check'
    );

    if (Object.keys(errors).length > 0 && warnings.length > 0) {
      setSoftWarnings(warnings.map((warning) => warning.message));
      setShowModal(true);
    }
  }, [errors]);

  const onSubmit = (data) => {
    console.log('Form submitted successfully:', data);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalSubmit = async () => {
    const data = getValues();
    setShowModal(false);
    console.log('Form data on Submit Anyway:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PrimaryDetailsForm />
        <SecondaryDetailsForm />

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {softWarnings.map((warning, index) => (
            <p key={index}>{warning}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleModalClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleModalSubmit}>
            Submit Anyway
          </Button>
        </Modal.Footer>
      </Modal>
    </FormProvider>
  );
};

export default ParentForm;
