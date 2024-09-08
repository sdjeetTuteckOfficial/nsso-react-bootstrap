import { useState, useEffect } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Card } from 'react-bootstrap';
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
import { fetchData } from '../../redux/network-slice/slice';
import { IdentificationSchema } from './operations-form/schema/schema';

export default function IdentifyParticulateEntry() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [whyNotOperational, setWhyNotOperational] = useState('');
  const [amalgamatedCompanyData, setAmalgamatedCompanyData] = useState([]);
  const dispatch = useDispatch();
  const form_data_section_1 = useSelector((state) => state.form_data.sections);
  console.log('form_data_Section', form_data_section_1);
  useEffect(() => {
    let url = '/SURVEY/v1/UtilityMaster/GetAllStateTypesAsync';
    dispatch(
      fetchData([
        {
          url: url,
          method: 'GET',
          key: 'state_data',
        },
      ])
    );
  }, []);

  const methods = useForm({
    resolver: yupResolver(IdentificationSchema),
    defaultValues: {
      operationalStatus: '1',
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
      hasAmalgamated: '2',
      numberOfEnterprises: null,
      enterpriseDetails: null,
      secondaryActivity: '',
    },
  });

  const {
    setValue,
    getValues,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    const operatingLocations = data.businessOperationLocation
      ? data?.businessOperationLocation?.map((item) => item.value)?.join(',')
      : '';

    console.log('hello', data.closeDate);
    const saved_Data = {
      r_3: data.operationalStatus,
      r_3_1: data.additionalInfo,
      r_3_1_1: data.additionalInfo,
      r_3_1_1_1: new Date(data?.closeDate)?.toISOString()?.split('T')[0],
      r_3_1_1_2: new Date(data?.resumeDate)?.toISOString()?.split('T')[0],
      r_3_1_2: data.additionalInfo,
      r_3_1_2_1: new Date(data?.ceaseDate)?.toISOString()?.split('T')[0],
      r_3_1_2_2: data.ceaseReason,
      r_3_1_3: data.additionalInfo,
      r_3_1_3_1: new Date(data?.soldDate)?.toISOString()?.split('T')[0],
      r_3_1_3_2: data.buyerCIN,
      r_3_1_3_3: data.buyerLegalName,
      r_3_1_4: data.additionalInfo,
      r_3_1_4_1: new Date(data?.amalgamateDate)?.toISOString()?.split('T')[0],
      r_3_1_4_2: data.resultingCIN,
      r_3_1_4_3: data.resultingLegalName,
      r_3_1_4_4: amalgamatedCompanyData,
      r_3_1_5: data.additionalInfo,
      r_3_1_5_1: new Date(data?.inactiveDate)?.toISOString()?.split('T')[0],
      r_3_1_5_2: new Date(data?.resumeDateTemp)?.toISOString()?.split('T')[0],
      r_3_1_5_3: data.inactiveReason,
      r_3_1_6: data.additionalInfo,
      r_3_1_6_1: new Date(data?.stopDate)?.toISOString()?.split('T')[0],
      r_3_1_6_2: data.stopReason,
      r_4: operatingLocations,
      r_5: data.principalActivity,
      r_6: data.turnoverPercentage,
      r_7: data.hasAmalgamated,
      r_7_1: data.numberOfEnterprises,
      r_7_2: '',
    };
    dispatch(
      initializeSection({
        section_id: 'section_2',
        data: { api_data: saved_Data, ui_data: data },
      })
    );

    let url =
      '/SURVEY/v1/IndustrySurveyResponse/UpSertIndustrySurveyResponseAsync';
    dispatch(
      fetchData([
        {
          url: url,
          method: 'POST',
          key: 'firstform_data_response',
          data: {
            is_final_submit: false,
            industry_survey_id: 2,
            ...saved_Data,
          },
        },
      ])
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
      setValue('hasAmalgamated', '2');
      setValue('numberOfEnterprises', null);
      setValue('enterpriseDetails', null);
      setValue('secondaryActivity', '');
    }
    setShowDropdown(value === '2');
  };

  const handleCompanyData = (data) => {
    console.log(data);
    setAmalgamatedCompanyData(data);
  };

  const handleClearForm = (e) => {
    setWhyNotOperational(e.target.value);
    setValue('closeDate', null);
    setValue('resumeDate', null);
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
    setValue('hasAmalgamated', '2');
    setValue('secondaryActivity', '');
  };

  return (
    <FormProvider {...methods}>
      {console.log('get', getValues('additionalInfo'))}
      {console.log('err', errors)}
      <Form className='siteForm' onSubmit={methods.handleSubmit(onSubmit)}>
        <div className='d-flex mb-2'>
          <h3 className='page-title'>Identification Particulars Entry</h3>
          <Button variant='light' type='submit'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
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
                            handleClearForm(e);
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
        {getValues('operationalStatus') === '1' && (
          <BusinessOperationLocation />
        )}
        {(whyNotOperational === '21' && <BusinessOperationLocation />) ||
          (whyNotOperational === '25' && <BusinessOperationLocation />)}
        {getValues('operationalStatus') === '1' && (
          <PrincipalActivityQuestion />
        )}
        {(whyNotOperational === '21' && <PrincipalActivityQuestion />) ||
          (whyNotOperational === '25' && <PrincipalActivityQuestion />)}
        {getValues('operationalStatus') === '1' && (
          <TurnoverPercentageQuestion />
        )}
        {(whyNotOperational === '21' && <TurnoverPercentageQuestion />) ||
          (whyNotOperational === '25' && <TurnoverPercentageQuestion />)}
        {getValues('operationalStatus') === '1' && <QuestionSevenForm />}
        {(whyNotOperational === '21' && <QuestionSevenForm />) ||
          (whyNotOperational === '25' && <QuestionSevenForm />)}
        <div className='footerBtnGroup d-flex justify-content-end'>
          <Button variant='primary' className='ms-2' type='submit'>
            Save & Continue <i className='bi bi-arrow-right-short'></i>
          </Button>
        </div>
      </Form>
    </FormProvider>
  );
}
