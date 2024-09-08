import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect, useState } from 'react';
import moment from 'moment';

function TemporarilyInactiveForm() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const inactiveDate = watch('inactiveDate');
  const [minResumeDate, setMinResumeDate] = useState(new Date());

  useEffect(() => {
    if (inactiveDate) {
      const nextDay = moment(inactiveDate, 'YYYY-MM-DD')
        .add(1, 'days')
        .toDate();
      setMinResumeDate(nextDay);
    }
  }, [inactiveDate]);

  return (
    <Row>
      {/* Inactive Date Field */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          When did this enterprise become temporarily inactive?
        </Form.Label>
        <Controller
          name='inactiveDate'
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value ? new Date(value) : null}
              onChange={(date) =>
                onChange(date ? moment(date).format('YYYY-MM-DD') : '')
              }
              dateFormat='dd/MM/yyyy'
              className={`form-control ${
                errors.inactiveDate ? 'is-invalid' : ''
              }`}
              placeholderText='Select inactive date'
            />
          )}
        />
        {errors.inactiveDate && (
          <p className='text-danger'>{errors.inactiveDate.message}</p>
        )}
      </Form.Group>

      {/* Resume Date Field */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          When does this enterprise expect to resume operations?
        </Form.Label>
        <Controller
          name='resumeDateTemp'
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              selected={value ? new Date(value) : null}
              onChange={(date) =>
                onChange(date ? moment(date).format('YYYY-MM-DD') : '')
              }
              dateFormat='dd/MM/yyyy'
              minDate={minResumeDate}
              className={`form-control ${
                errors.resumeDateTemp ? 'is-invalid' : ''
              }`}
              placeholderText='Select resume date'
            />
          )}
        />
        {errors.resumeDateTemp && (
          <p className='text-danger'>{errors.resumeDateTemp.message}</p>
        )}
      </Form.Group>

      {/* Inactive Reason Field */}
      <Form.Group as={Col} lg='12'>
        <Form.Label>Why is this enterprise temporarily inactive?</Form.Label>
        <Controller
          name='inactiveReason'
          control={control}
          render={({ field }) => (
            <Form.Control
              as='textarea'
              rows={3}
              {...field}
              isInvalid={!!errors.inactiveReason}
            />
          )}
        />
        {errors.inactiveReason && (
          <p className='text-danger'>{errors.inactiveReason.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default TemporarilyInactiveForm;
