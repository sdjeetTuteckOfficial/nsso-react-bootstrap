import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  requiredValidator,
  requiredNonZeroPositiveValidator,
} from '../../components/validator/CommonValidator';
const tableField = [
  '101',
  '102',
  '103',
  '104',
  '105',
  '106',
  '107',
  '108',
  '109',
  '110',
  '111',
  '112',
  '113',
  '114',
  '115',
  '116',
  '117',
];

const capitalExpenditureColumns = [
  ['A013', 'A014', 'A015', 'A016'],
  ['A023', 'A024', 'A025', 'A026'],
  ['A033', 'A034', 'A035', 'A036'],
  ['A043', 'A044', 'A045', 'A046'],
  ['A053', 'A054', 'A055', 'A056'],
  ['A063', 'A064', 'A065', 'A066'],
  ['A073', 'A074', 'A075', 'A076'],
  ['A083', 'A084', 'A085', 'A086'],
];

const operationalColumns = [
  ['F013', 'F014', 'F015'],
  ['F023', 'F024', 'F025'],
  ['F033', 'F034', 'F035'],
];

const CapitalExpenditureOutlook = () => {
  const schemaBuilder = () => {
    const baseSchema = yup.object().shape({
      operationalStatus: requiredValidator(
        'Whether the enterprise was operational before the financial year 2021-22'
      ),
    });

    let conditionalSchema = baseSchema; // Initialize with the base schema

    tableField.forEach((alertOption) => {
      conditionalSchema = conditionalSchema.shape({
        [`A${alertOption}`]: requiredNonZeroPositiveValidator('field'), // Use computed property name
      });
    });

    operationalColumns.forEach((row) => {
      row.forEach((field) => {
        conditionalSchema = conditionalSchema.shape({
          [field]: requiredNonZeroPositiveValidator('field'), // Use computed property name
        });
      });
    });

    capitalExpenditureColumns.forEach((row) => {
      row.forEach((field) => {
        if (
          field !== 'A014' &&
          field !== 'A044' &&
          field !== 'A054' &&
          field !== 'A055' &&
          field !== 'A064' &&
          field !== 'A065' &&
          field !== 'A074' &&
          field !== 'A084'
        ) {
          conditionalSchema = conditionalSchema.shape({
            [field]: requiredNonZeroPositiveValidator('field'), // Use computed property name
          });
        }
      });
    });

    return conditionalSchema;
  };

  const schema = schemaBuilder();

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log('Schema', schema.fields, errors);

  const val_A01 = watch(['A013', 'A015']);
  const sumRow_A01 = () => {
    return val_A01.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A02 = watch(['A023', 'A024', 'A025']);
  const sumRow_A02 = () => {
    return val_A02.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A03 = watch(['A033', 'A034', 'A035']);
  const sumRow_A03 = () => {
    return val_A03.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A04 = watch(['A043', 'A045']);
  const sumRow_A04 = () => {
    return val_A04.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A05 = watch(['A053']);
  const sumRow_A05 = () => {
    return val_A05.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A06 = watch(['A063']);
  const sumRow_A06 = () => {
    return val_A06.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A07 = watch(['A073', 'A075']);
  const sumRow_A07 = () => {
    return val_A07.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };
  const val_A08 = watch(['A083', 'A085']);
  const sumRow_A08 = () => {
    return val_A08.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };

  let finalSum =
    sumRow_A01() +
    sumRow_A02() +
    sumRow_A03() +
    sumRow_A04() +
    sumRow_A05() +
    sumRow_A06() +
    sumRow_A07() +
    sumRow_A08();

  const values = watch([
    'A101',
    'A102',
    'A103',
    'A104',
    'A105',
    'A106',
    'A107',
    'A108',
    'A109',
    'A110',
    'A111',
    'A112',
    'A113',
    'A114',
    'A115',
    'A116',
    'A117',
  ]);
  const sumRow = () => {
    return values.reduce((acc, curr) => {
      const numValue = Number(curr);
      const validNumber = isNaN(numValue) || numValue < 0 ? 0 : numValue;
      return acc + validNumber;
    }, 0);
  };

  const onSubmit = (data) => {
    console.log('form submited...', data);
    // navigate("/nsso-secured/test"); // Uncomment if using navigation
  };

  return (
    <div>
      <Form className='siteForm' noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex mb-2'>
          <h3 className='page-title'>Capital Expenditure (CAPEX) Outlook:</h3>
          <Button variant='light'>
            Save & Continue <i class='bi bi-arrow-right-short'></i>
          </Button>
        </div>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Row>
              <Form.Group as={Col} lg='12' md='12' sm='12'>
                <Form.Label>
                  <h5>
                    Whether the enterprise was operational before the financial
                    year 2021-22
                  </h5>
                </Form.Label>
                <br />
                <Controller
                  name='operationalStatus'
                  control={control}
                  render={({ field: { onChange, value, ref, onBlur } }) => (
                    <>
                      <Form.Check
                        inline
                        label='Yes'
                        type='radio'
                        value='yes'
                        id='operational'
                        onChange={onChange}
                        checked={value === 'yes'}
                        onBlur={onBlur}
                        ref={ref}
                        className='me-3'
                      />
                      <Form.Check
                        inline
                        label='No'
                        type='radio'
                        value='no'
                        id='not-operational'
                        onChange={onChange}
                        checked={value === 'no'}
                        onBlur={onBlur}
                        ref={ref}
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
            </Row>
            <Row>
              <Col lg={12} sm={12} md={12}>
                <Form.Label style={{ marginTop: '2%' }}>
                  Details, of actual and proposed annual "Capital Expenditure"
                  incurred by the enterprise in last 3 financial years{' '}
                </Form.Label>
                <Table
                  bordered
                  hover
                  responsive
                  size='sm'
                  className='table-default-nsso'
                >
                  <thead>
                    <tr>
                      <th>Financial / Accounting Year</th>
                      <th>FY Code</th>
                      <th>Net Total Fixed assets as on first date of FY</th>
                      <th>
                        "Capital Expenditure" proposed at the begining of the
                        FY/AY
                      </th>
                      <th>Actual "Capital Expenditure" incurred</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ textAlign: 'center' }}>
                      <td>(1)</td>
                      <td>(2)</td>
                      <td>(3)</td>
                      <td>(4)</td>
                      <td>(5)</td>
                    </tr>
                    <tr>
                      <td>2021-22</td>
                      <td>F01</td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F013'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F013}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F013?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F014'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F014}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F014?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F015'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F015}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F015?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-23</td>
                      <td>F02</td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F023'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F023}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F023?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F024'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F024}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F024?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F025'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F025}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F025?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>2023-24</td>
                      <td>F03</td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F033'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F033}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F033?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F034'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F034}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F034?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group controlId='formEmail'>
                          <Controller
                            name='F035'
                            control={control}
                            defaultValue={0}
                            render={({ field }) => (
                              <Form.Control
                                type='text'
                                isInvalid={!!errors.F035}
                                {...field}
                              />
                            )}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.F035?.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>9</span>{' '}
              <h5>
                Details of asset wise Provisional "Capital Expenditure" to be
                incurred by the enterprise in Current Financial Year i.e.,
                2024-25 (as on the date of survey).
              </h5>
            </Card.Title>
            <Row>
              <p className='fs-6 text-success'>
                (Note: Please report financial Information in thousand (000) of
                Indian Rupees)
              </p>
              <Table
                bordered
                hover
                responsive
                size='sm'
                className='table-default-nsso'
              >
                <thead style={{ textAlign: 'center' }}>
                  <tr>
                    <th rowspan='2'>Asset Groups*</th>
                    <th rowspan='2'>Asset Code</th>
                    <th colspan='3'>
                      Expenditure intended to be incurred during current FY on
                    </th>
                    <th rowspan='2'>
                      Intended sale of fixed assets during current FY
                    </th>
                    <th rowspan='2'>
                      Total Expenditure = col.3 + col.4 + col.5
                    </th>
                  </tr>
                  <tr>
                    <th>
                      Purchase Of new new Assets including financial leases
                    </th>
                    <th>Purchase of second hand assets</th>
                    <th>Major improvement of existing assets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: 'center' }}>
                    <td>(1)</td>
                    <td>(2)</td>
                    <td>(3)</td>
                    <td>(4)</td>
                    <td>(5)</td>
                    <td>(6)</td>
                    <td>(7)</td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Dwellings, Other Buildings, and Structures,
                    </td>
                    <td>A01</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A013'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A013}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A013?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A015'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A015}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A015?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A016'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A016}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A016?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A01()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Machinery and Equipment
                    </td>
                    <td>A02</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A023'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A023}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A023?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A024'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A024}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A024?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A025'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A025}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A025?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A026'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A026}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A026?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A02()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Cultivated Biological Resources
                    </td>
                    <td>A03</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A033'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A033}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A033?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A034'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A034}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A034?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A035'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A035}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A035?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A036'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A036}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A036?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A03()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>Land</td>
                    <td>A04</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A043'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A043}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A043?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A045'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A045}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A045?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A046'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A046}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A046?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A04()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Computer Software and Databases
                    </td>
                    <td>A05</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A053'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A053}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A053?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A056'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A056}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A056?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A05()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Research and development
                    </td>
                    <td>A06</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A063'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A063}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A063?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A066'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A066}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A066?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A06()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Other Intangible Assets / Intellectual Property Products
                    </td>
                    <td>A07</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A073'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A073}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A073?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A075'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A075}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A075?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A076'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A076}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A076?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A07()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Non-Produced Assets (other than land)
                    </td>
                    <td>A08</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A083'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A083}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A083?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}></td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A085'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A085}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A085?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A086'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A086}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A086?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                    <td style={{ backgroundColor: '#2471dd' }}>
                      {sumRow_A08()}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Capital work in progress
                    </td>
                    <td>A09</td>
                    <td colSpan={4}></td>
                    <td>{finalSum}</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
        <Card className='questionCard mb-3'>
          <Card.Body>
            <Card.Title>
              <span className='Count'>9.1</span>{' '}
              <h5>
                Sector/Industry-Wise details of Provisional "Capital
                Expenditure" to be incurred by the enterprise in current
                financial year i.e., 2024-25 (as on the date of the survey)
              </h5>
            </Card.Title>
            <Row>
              <Table
                bordered
                hover
                responsive
                size='sm'
                className='table-default-nsso'
              >
                <thead style={{ textAlign: 'center' }}>
                  <tr>
                    <th>Sector/Industry</th>
                    <th>Industry Code</th>
                    <th>
                      Percentage (In whole number) of capital expenditure to be
                      incurred during 2024-25
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: 'center' }}>
                    <td>(1)</td>
                    <td>(2)</td>
                    <td>(3)</td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Agriculture, Forestry, and fishing
                    </td>
                    <td>101</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A101'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A101}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A101?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>Mining And Quarrying</td>
                    <td>102</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A102'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A102}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A102?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>Manufaturing</td>
                    <td>103</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A103'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A103}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A103?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Electricity, Gas, Steam, Air Conditioning Supply
                    </td>
                    <td>104</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A104'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A104}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A104?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Water Supply, Sewerage, Waste management and remediation
                      activities
                    </td>
                    <td>105</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A105'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A105}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A105?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>Construction</td>
                    <td>106</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A106'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A106}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A106?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Whole Sale and retail trade and repair of motor vehicles
                      and motorcycles
                    </td>
                    <td>107</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A107'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A107}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A107?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Transportation and storage
                    </td>
                    <td>108</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A108'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A108}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A108?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Accomodation and food service activities
                    </td>
                    <td>109</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A109'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A109}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A109?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Information and communication
                    </td>
                    <td>110</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A110'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A110}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A110?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Financial and insurance activities
                    </td>
                    <td>111</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A111'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A111}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A111?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Real Estate Activites
                    </td>
                    <td>112</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A112'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A112}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A112?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Professional , scientific , and technical activities
                    </td>
                    <td>113</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A113'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A113}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A113?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Administrative and support service activities, public
                      administration and defense, compulsory social security
                    </td>
                    <td>114</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A114'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A114}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A114?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>Education</td>
                    <td>115</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A115'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A115}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A115?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Human Health , and social work activities
                    </td>
                    <td>116</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A116'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A116}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A116?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textWrap: 'nowrap' }}>
                      Arts, entertainment, and recreation, other service
                      activities n.e.c
                    </td>
                    <td>117</td>
                    <td>
                      <Form.Group controlId='formEmail'>
                        <Controller
                          name='A117'
                          control={control}
                          defaultValue={0}
                          render={({ field }) => (
                            <Form.Control
                              type='text'
                              isInvalid={!!errors.A117}
                              {...field}
                            />
                          )}
                        />
                        <Form.Control.Feedback type='invalid'>
                          {errors.A117?.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </td>
                  </tr>
                  <tr style={{ textAlign: 'center' }}>
                    <th colSpan={2}>Total</th>
                    <th>
                      {sumRow()}
                      {sumRow() > 100 && (
                        <p className='text-danger'>
                          Value should not be more than 100
                        </p>
                      )}
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
        <div className='footerBtnGroup d-flex justify-content-end'>
          <div>
            <Button variant='primary' type='submit' className='ms-2'>
              Save & Continue <i class='bi bi-arrow-right-short'></i>
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CapitalExpenditureOutlook;
