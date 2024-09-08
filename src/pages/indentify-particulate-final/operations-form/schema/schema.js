import * as yup from 'yup';
export const IdentificationSchema = yup.object().shape({
  operationalStatus: yup.string().required('Operational status is required'),
  additionalInfo: yup.string().when('operationalStatus', {
    is: (val) => val === '2',
    then: () => yup.string().required('Please select why not operational'),
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
      then: () =>
        yup
          .date()
          .nullable()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
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
      then: () =>
        yup
          .date()
          .nullable()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
      otherwise: () => yup.date().nullable().notRequired(),
    }),
  ceaseDate: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '22',
      then: () =>
        yup
          .date()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
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
      then: () =>
        yup
          .date()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
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
        yup
          .date()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
      otherwise: () => yup.date().notRequired(),
    }),
  resumeDateTemp: yup
    .date()
    .nullable()
    .when('additionalInfo', {
      is: (val) => val === '25',
      then: () =>
        yup
          .date()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
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
        yup
          .date()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
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
      then: () =>
        yup
          .date()
          .required(
            'Provide an approximate date whenever exact date is not available'
          ),
      otherwise: () => yup.date().notRequired(),
    }),
  resultingCIN: yup.string().when('additionalInfo', {
    is: (val) => val === '24',
    then: () =>
      yup
        .string()
        .matches(
          /\S/,
          `CIN number must contain at least one non-space character`
        )
        .matches(
          /^[L|U]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/,
          'Enter a valid CIN number'
        )
        .required('CIN is required'),
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

  secondaryActivity: yup.string().when('principalActivity', {
    is: (val) => val !== '118',
    then: () => yup.string().required('Please specify secondary the activity'),
    otherwise: () => yup.string().notRequired(),
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
        .nullable()
        .min(0, 'Percentage must be at least 0')
        .max(100, 'Percentage must be at most 100'),
    otherwise: () =>
      yup.array().when('additionalInfo', {
        is: (value) => value === '21',
        then: () =>
          yup
            .number()
            .nullable()
            .min(0, 'Percentage must be at least 0')
            .max(100, 'Percentage must be at most 100'),
        otherwise: () =>
          yup.number().when('additionalInfo', {
            is: (value) => value === '25',
            then: () =>
              yup
                .number()
                .nullable()
                .min(0, 'Percentage must be at least 0')
                .max(100, 'Percentage must be at most 100'),
            otherwise: () => yup.number().notRequired(),
          }),
      }),
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
        .min(1, 'Mandatory selection of at least one state or UT')
        .required('Mandatory selection of at least one state or UT'),
    otherwise: () =>
      yup.array().when('additionalInfo', {
        is: (value) => value === '21',
        then: () =>
          yup
            .array()
            .min(1, 'Mandatory selection of at least one state or UT')
            .required('Mandatory selection of at least one state or UT'),
        otherwise: () =>
          yup.array().when('additionalInfo', {
            is: (value) => value === '25',
            then: () =>
              yup
                .array()
                .min(1, 'Mandatory selection of at least one state or UT')
                .required('Mandatory selection of at least one state or UT'),
            otherwise: () => yup.array().notRequired(),
          }),
      }),
  }),
});
