import { useFormContext, Controller } from 'react-hook-form';
import { Row, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import moment from 'moment';

function SeasonalOperationDetails() {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  const closeDate = watch('closeDate');
  const [minResumeDate, setMinResumeDate] = useState(new Date());
  const [selectedCloseDate, setSelectedCloseDate] = useState(null);
  const [selectedResumeDate, setSelectedResumeDate] = useState(null);

  useEffect(() => {
    if (closeDate) {
      const nextDay = moment(closeDate, 'DD-MM-YYYY').add(1, 'days').toDate();
      setMinResumeDate(nextDay);
    }
  }, [closeDate]);

  return (
    <Row>
      {/* Close Date Field */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>When did this enterprise close for the season?</Form.Label>
        <Controller
          name='closeDate'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              selected={selectedCloseDate ? new Date(selectedCloseDate) : null}
              onChange={(date) => {
                const formattedDate = date
                  ? moment(date).format('DD-MM-YYYY')
                  : '';
                setSelectedCloseDate(date);
                onChange(formattedDate);
              }}
              onBlur={onBlur}
              dateFormat='dd-MM-yyyy'
              className={`form-control ${errors.closeDate ? 'is-invalid' : ''}`}
              placeholderText='Select close date'
            />
          )}
        />
        {errors.closeDate && (
          <p className='text-danger'>{errors.closeDate.message}</p>
        )}
      </Form.Group>

      {/* Resume Date Field */}
      <Form.Group as={Col} lg='6' md='6' sm='12'>
        <Form.Label>
          When does this enterprise expect to resume operations?
        </Form.Label>
        <Controller
          name='resumeDate'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              selected={
                selectedResumeDate ? new Date(selectedResumeDate) : null
              }
              onChange={(date) => {
                const formattedDate = date
                  ? moment(date).format('DD-MM-YYYY')
                  : '';
                setSelectedResumeDate(date);
                onChange(formattedDate);
              }}
              onBlur={onBlur}
              dateFormat='dd-MM-yyyy'
              minDate={minResumeDate}
              className={`form-control ${
                errors.resumeDate ? 'is-invalid' : ''
              }`}
              placeholderText='Select resume date'
            />
          )}
        />
        {errors.resumeDate && (
          <p className='text-danger'>{errors.resumeDate.message}</p>
        )}
      </Form.Group>
    </Row>
  );
}

export default SeasonalOperationDetails;
