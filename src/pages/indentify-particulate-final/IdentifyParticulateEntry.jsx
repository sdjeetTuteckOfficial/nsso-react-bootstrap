import { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from 'react-bootstrap';
// import BasicInformationCard from './basic-information/BasicInformationCard';
// import { enterpriseData, contactInfoData } from './demo-data/data';
import SeasonalOperationDetails from './operations-form/seasonal-details-form/SeasonalDetailsForm';
import CeasedOperationDetails from './operations-form/ceased-operation-form/CeasedOperationsForm';
import SoldOperationsForm from './operations-form/sold-operations/SoldOperations';
import TemporarilyInactiveForm from './operations-form/temporarily-inactive-form/TemporarilyInactiveForm';
import NoLongerOperatingForm from './operations-form/no-longer-operating-form/NoLongerOperatingForm';
import AmalgamatedForm from './operations-form/amalgamated-form/AmalgamatedForm';
import PrincipalActivityQuestion from './operations-form/question-five-form/PrincipalActivityQuestion';
import TurnoverPercentageQuestion from './operations-form/turnover-percentage-form/TurnoverPercentageForm';
import QuestionSevenForm from './operations-form/question-seven-form/QuestionSevenForm';
import BusinessOperationLocation from './operations-form/question-four/BusinessOperationLocation';
import { useDispatch, useSelector } from 'react-redux';
import { initializeSection } from '../../redux/form-slice/formSlice';

const schema = yup.object().shape({
  operationalStatus: yup.string().required('Operational status is required'),
  additionalInfo: yup.string().when('operationalStatus', {
    is: (val) => val === '2',
    then: () =>
      yup.string().required('Additional info is required when not operational'),
    otherwise: () => yup.string().notRequired(),
  }),
  closeDate: yup
    .date()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === '' ? null : new Date(originalValue)
    )
    .when('additionalInfo', {
      is: (val) => val === '21',
      then: () => yup.date().nullable().required('Close date is required'),
      otherwise: () => yup.date().nullable().notRequired(),
    }),
  resumeDate: yup
    .date()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === '' ? null : new Date(originalValue)
    )
    .when('additionalInfo', {
      is: (val) => val === '21',
      then: () => yup.date().nullable().required('Resume date is required'),
      otherwise: () => yup.date().nullable().notRequired(),
    }),
  ceaseDate: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '22',
      then: () => yup.date().required('Cease date is required'),
      otherwise: () => yup.date().notRequired(),
    }),
  ceaseReason: yup.string().when('additionalInfo', {
    is: (val) => val === '22',
    then: () => yup.string().required('Cease reason is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  ceaseComment: yup.string().when('additionalInfo', {
    is: (val) => val === '22',
    then: () =>
      yup
        .string()
        .max(250, 'Comment must be at most 250 characters')
        .notRequired(),
    otherwise: () => yup.string().notRequired(),
  }),
  soldDate: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '23',
      then: () => yup.date().required('Cease date is required'),
      otherwise: () => yup.date().notRequired(),
    }),
  buyerCIN: yup.string().when('additionalInfo', {
    is: (val) => val === '23',
    then: () => yup.string().required('Buyer CIN is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  buyerLegalName: yup.string().when('additionalInfo', {
    is: (val) => val === '23',
    then: () => yup.string().required('Buyer legal name is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  inactiveDate: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '25',
      then: () =>
        yup.date().required('Date of temporary inactivity is required'),
      otherwise: () => yup.date().notRequired(),
    }),
  resumeDateTemp: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '25',
      then: () => yup.date().required('Expected resume date is required'),
      otherwise: () => yup.date().notRequired(),
    }),
  inactiveReason: yup.string().when('additionalInfo', {
    is: (val) => val === '25',
    then: () =>
      yup
        .string()
        .max(250, 'Comment must be at most 250 characters')
        .notRequired(),
    otherwise: () => yup.string().notRequired(),
  }),
  stopDate: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '29',
      then: () =>
        yup.date().required('Date of stopping operations is required'),
      otherwise: () => yup.date().notRequired(),
    }),
  stopReason: yup.string().when('additionalInfo', {
    is: (val) => val === '29',
    then: () =>
      yup.string().required('Reason for stopping operations is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  amalgamateDate: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '24',
      then: () => yup.date().required('Amalgamation date is required'),
      otherwise: () => yup.date().notRequired(),
    }),
  resultingCIN: yup.string().when('additionalInfo', {
    is: (val) => val === '24',
    then: () =>
      yup.string().required('CIN of the resulting enterprise is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  resultingLegalName: yup.string().when('additionalInfo', {
    is: (val) => val === '24',
    then: () =>
      yup
        .string()
        .required('Legal name of the resulting enterprise is required'),
    otherwise: () => yup.string().notRequired(),
  }),
  principalActivity: yup.string().when('operationalStatus', {
    is: (value) => value === '1',
    then: () => yup.string().required('This is required field'),
    otherwise: () =>
      yup.string().when('additionalInfo', {
        is: (value) => value === '21',
        then: () => yup.string().required('This is required field'),
        otherwise: () =>
          yup.string().when('additionalInfo', {
            is: (value) => value === '25',
            then: () => yup.string().required('This is required field'),
            otherwise: () => yup.string().notRequired(),
          }),
      }),
  }),
  otherActivity: yup.string().when('principalActivity', {
    is: (val) => val === '118',
    then: () => yup.string().required('Please specify the activity'),
    otherwise: () => yup.string().notRequired(),
  }),
  turnoverPercentage: yup.number().when('operationalStatus', {
    is: (val) => val === '1',
    then: () =>
      yup
        .number()
        .required('Percentage is required')
        .min(0, 'Percentage must be at least 0')
        .max(100, 'Percentage must be at most 100'),
    otherwise: () => yup.number().notRequired(),
  }),
  hasAmalgamated: yup.string().required('Please select an option'),
  numberOfEnterprises: yup
    .number()
    .nullable()
    .when('hasAmalgamated', {
      is: (value) => value === '1',
      then: () =>
        yup
          .number()
          .required('Number of enterprises is required')
          .min(1, 'Must be at least 1'),
      otherwise: () => yup.number().notRequired(),
    }),

  enterpriseDetails: yup.array().of(
    yup.object().shape({
      name: yup.string().when('numberOfEnterprises', {
        is: (val) => val > 0,
        then: () => yup.string().required('Enterprise name is required'),
        otherwise: () => yup.string().notRequired(),
      }),
      cin: yup.string().when('numberOfEnterprises', {
        is: (val) => val > 0,
        then: () => yup.string().required('CIN is required'),
        otherwise: () => yup.string().notRequired(),
      }),
    })
  ),
  businessOperationLocation: yup.array().when('operationalStatus', {
    is: (value) => value === '1',
    then: () =>
      yup
        .array()
        .min(1, 'At least one state is required')
        .required('Place of business operation is required'),
    otherwise: () =>
      yup.array().when('additionalInfo', {
        is: (value) => value === '21',
        then: () =>
          yup
            .array()
            .min(1, 'At least one state is required during seasonal operation')
            .required(
              'Place of business operation during seasonal status is required'
            ),
        otherwise: () =>
          yup.array().when('additionalInfo', {
            is: (value) => value === '25',
            then: () =>
              yup
                .array()
                .min(1, 'At least one state is required for inactive status')
                .required(
                  'Place of business operation for inactive status is required'
                ),
            otherwise: () => yup.array().notRequired(),
          }),
      }),
  }),
});

export default function IdentifyParticulateEntry() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [whyNotOperational, setWhyNotOperational] = useState('');
  const [amalgamatedCompanyData, setAmalgamatedCompanyData] = useState([]);
  const dispatch = useDispatch();
  const form_data_section_1 = useSelector((state) => state.form_data.sections);
  console.log('form_data_Section', form_data_section_1);

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      operationalStatus: '',
      additionalInfo: '',
      closeDate: null,
      resumeDate: null,
      ceaseDate: null,
      ceaseReason: '',
      ceaseComment: '',
      soldDate: null,
      buyerCIN: '',
      buyerLegalName: '',
      inactiveDate: null,
      resumeDateTemp: null,
      inactiveReason: '',
      stopDate: null,
      stopReason: '',
      principalActivity: '',
      otherActivity: '',
      turnoverPercentage: null,
      hasAmalgamated: '',
      numberOfEnterprises: null,
      enterpriseDetails: null,
    },
  });

  const {
    setValue,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    const saved_Data = {
      r_3: data.operationalStatus,
      r_3_1: data.additionalInfo,
      r_3_1_1: {
        r_3_1_1_1: data.closeDate,
        r_3_1_1_2: data.resumeDate,
      },
      r_3_1_2: {
        r_3_1_2_1: data.ceaseDate,
        r_3_1_2_2: data.ceaseReason,
      },
      r_3_1_3: {
        r_3_1_3_1: data.soldDate,
        r_3_1_3_2: data.buyerCIN,
        r_3_1_3_3: data.buyerLegalName,
      },
      r_3_1_4: {
        r_3_1_4_1: data.amalgamateDate,
        r_3_1_4_2: data.resultingCIN,
        r_3_1_4_3: data.resultingLegalName,
        r_3_1_4_4: amalgamatedCompanyData,
      },
      r_3_1_5: {
        r_3_1_5_1: data.inactiveDate,
        r_3_1_5_2: data.resumeDateTemp,
        r_3_1_5_3: data.inactiveReason,
      },
      r_3_1_6: {
        r_3_1_6_1: data.stopDate,
        r_3_1_6_2: data.stopReason,
      },
      r_4: data.businessOperationLocation,
      r_5: data.principalActivity,
      r_6: data.turnoverPercentage,
      r_7: data.hasAmalgamated,
      r_7_1: data.numberOfEnterprises,
      r_7_2: '',
    };
    dispatch(
      initializeSection({
        section_id: 'section_1',
        data: { api_data: saved_Data, ui_data: data },
      })
    );
    console.log('saved response', saved_Data);
  };

  const handleStatusChange = (value) => {
    if (value === '1') {
      setWhyNotOperational('');
      setValue('closeDate', null);
      setValue('resumeDate', null);
      setValue('additionalInfo', '');
      setValue('ceaseDate', null);
      setValue('ceaseComment', '');
      setValue('ceaseReason', '');
      setValue('soldDate', null);
      setValue('buyerCIN', '');
      setValue('buyerLegalName', '');
      setValue('inactiveDate', null);
      setValue('resumeDateTemp', null);
      setValue('inactiveReason', '');
      setValue('stopDate', null);
      setValue('stopReason', '');
      setValue('principalActivity', '');
      setValue('otherActivity', '');
      setValue('turnoverPercentage', null);
      setValue('hasAmalgamated', '');
      setValue('numberOfEnterprises', null);
      setValue('enterpriseDetails', null);
    }
    setShowDropdown(value === '2');
  };

  const handleCompanyData = (data) => {
    console.log(data);
    setAmalgamatedCompanyData(data);
  };

  return (
    <FormProvider {...methods}>
      {console.log('err', errors)}
      <Form className='siteForm' onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='d-flex mb-2'>
          <h3 className='page-title'>Identification Particulars Entry</h3>
          <Button variant='light' type='submit'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
        {/* <BasicInformationCard
          items={enterpriseData.items}
          title={enterpriseData.title}
          count={1}
        />
        <BasicInformationCard
          items={contactInfoData.items}
          title={contactInfoData.title}
          count={2}
        /> */}
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
                          value='1'
                          id='operational'
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            handleStatusChange(e.target.value);
                          }}
                          checked={field.value === '1'}
                          className='me-3'
                        />
                        <Form.Check
                          inline
                          label='Not currently operational'
                          type='radio'
                          value='2'
                          id='not-operational'
                          onChange={(e) => {
                            field.onChange(e.target.value);
                            handleStatusChange(e.target.value);
                          }}
                          checked={field.value === '2'}
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
                    <Form.Label>
                      Why is this enterprise not currently operational?
                    </Form.Label>
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
                          <option value='' disabled>
                            Select an option
                          </option>
                          <option value='21'>Seasonal operations</option>
                          <option value='22'>Ceased operations</option>
                          <option value='23'>Sold operations</option>
                          <option value='24'>Amalgamated</option>
                          <option value='25'>
                            Temporarily inactive but re-open
                          </option>
                          <option value='29'>Other</option>
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
                {whyNotOperational === '21' && <SeasonalOperationDetails />}
                {whyNotOperational === '22' && <CeasedOperationDetails />}
                {whyNotOperational === '23' && <SoldOperationsForm />}
                {whyNotOperational === '24' && (
                  <AmalgamatedForm handleCompanyData={handleCompanyData} />
                )}
                {whyNotOperational === '25' && <TemporarilyInactiveForm />}
                {whyNotOperational === '29' && <NoLongerOperatingForm />}
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <BusinessOperationLocation />
        <PrincipalActivityQuestion />
        <TurnoverPercentageQuestion />
        <QuestionSevenForm />
        <div className='footerBtnGroup d-flex justify-content-end'>
          <Button variant='primary' className='ms-2' type='submit'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
}
