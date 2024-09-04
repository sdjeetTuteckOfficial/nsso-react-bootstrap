import * as yup from 'yup';

export const nonSpaceLengthNameValidator = (name, length) =>
  yup
    .string()
    .required(`${name} is required`)
    .matches(/\S/, `${name} must contain at least one non-space character`)
    .matches(
      /^[a-zA-Z ]+$/,
      `${name} must contain only alphabetic characters and spaces`
    )
    .matches(/^[a-zA-Z\s]*$/, `${name} cannot contain special characters`)
    .max(length, `${name} should not more than ${length} characters`);

export const alphaNumericNonSpaceLengthNameValidator = (name, length) =>
  yup
    .string()
    .required(`${name} is required`)
    .matches(/\S/, `${name} must contain at least one non-space character`)
    .max(length, `${name} should not more than ${length} characters`);

export const passwordValidator = yup
  .string()
  .matches(/\S/, 'Password must contain at least one non-space character')
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    'Password must contain at least one special character'
  )
  .matches(/[A-Z]/, 'Password must contain at least one uppercase character')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .min(8, 'Password must be at least 8 characters long')
  .required('Password is required');

export const nameValidator = yup
  .string()
  .matches(/\S/, `Name must contain at least one non-space character`)
  .matches(
    /^[a-zA-Z ]+$/,
    'Name must contain only alphabetic characters and spaces'
  )
  .matches(/^[a-zA-Z\s]*$/, 'Name cannot contain special characters')
  .max(100, 'Name should not more than 100 characters')
  .required('Name is required');

export const alphaNumeric = (name) =>
  yup
    .string()
    .matches(/\S/, 'Name must contain at least one non-space character')
    .matches(
      /^[A-Za-z0-9 ]*$/,
      'Name must contain only alphanumeric characters and spaces'
    )
    .max(100, 'Name should not be more than 100 characters')
    .required(`${name} is required`);

export const emailValidator = (name) =>
  yup.string().email(`Invalid ${name}`).required(`${name} is required`);

export const contactPersonValidator = yup
  .string()
  .matches(/\S/, `Contact Person must contain at least one non-space character`)
  .matches(
    /^[a-zA-Z ]+$/,
    'Name must contain only alphabetic characters and spaces'
  )
  .min(3, 'Contact person must be at least 3 characters')
  .max(30, 'Contact person cannot be more than 30 characters')
  .required('Contact person is required');

export const contactNumberValidator = yup
  .string()
  .required('Contact number is required')
  .matches(/^[6-9]\d{9}$/, 'Enter a valid contact number')
  .matches(
    /\S/,
    `Contact number must contain at least one non-space character`
  );
export const contactNumberValidatorForCustomer = (str) =>
  yup
    .string()
    .optional()
    .test('is-valid-number', `Enter a valid ${str}`, function (value) {
      if (value && value.trim() !== '') {
        return /^[6-9]\d{9}$/.test(value);
      }
      return true; // Return true if the field is empty
    })
    .test(
      'non-space-character',
      `${str} must contain at least one non-space character`,
      function (value) {
        if (value && value.trim() !== '') {
          return /\S/.test(value);
        }
        return true; // Return true if the field is empty
      }
    );
export const loginInfoValidator = yup
  .mixed()
  .test(
    'isEmailOrPhoneNumber',
    'Please enter a valid email or mobile number',
    (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/; // Adjust this regex based on your mobile number validation rules

      return emailRegex.test(value) || phoneRegex.test(value);
    }
  )
  .required('This field is required');

export const otpValidator = yup
  .string()
  .matches(/^\d{6}$/, 'OTP must be a 6-digit numeric code')
  .required();

export const panNumberValidator = yup
  .string()
  .matches(/\S/, `PAN number must contain at least one non-space character`)
  .matches(/^([A-Za-z]{5}\d{4}[A-Za-z]{1})$/, 'Enter a valid PAN number')
  .required('PAN number is required');

export const tanValidator = yup
  .string()
  .matches(/\S/, `Tan number must contain at least one non-space character`)
  .min(2, 'Enter TAN and remove this later')
  .matches(/^([A-Za-z]{4}\d{5}[A-Za-z]{1})$/, 'Enter a valid TAN number');
// .required("TAN number is required");

export const gstValidator = yup.string().when({
  is: (val) => val.length >= 0,
  then: () =>
    yup
      .string()
      .matches(/\S/, `GST number must contain at least one non-space character`)
      .matches(
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Za-z]{1}Z[0-9A-Za-z]{1}$/,
        'Enter a valid GST number'
      )
      .required('GST number is required'),

  // .min(2, 'Please provide valid GST number!'),
});

export const gstinValidator = (name) =>
  yup
    .string()
    .required(`${name} is required!`)
    .test('is-gstin', `${name} is not a valid GSTIN`, (value) => {
      const gstinRegex =
        /^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[1-9A-Za-z]{3}$/;

      if (gstinRegex.test(value)) {
        // Checksum validation
        const gstinValue = value.toUpperCase();
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const values = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27,
        ];
        const weights = [1, 10, 19, 3, 4, 5, 9, 7, 6, 8, 10, 1, 2, 0, 8];
        let sum = 0;
        for (let i = 0; i < 15; i++) {
          sum += values[chars.indexOf(gstinValue[i])] * weights[i];
        }
        const checkDigit = (36 - (sum % 36)) % 36;
        return chars[checkDigit] === gstinValue[15];
      }
      return false;
    });

export const incorporateCertificateNumber = yup
  .string()
  .nullable()
  .when({
    is: (val) => val?.length > 0,
    then: () =>
      yup
        .string()

        .matches(
          /\S/,
          `Incorporation Certificate
          must contain at least one non-space character`
        ),
    // .min(2, "Please provide valid trade license number"),
  });

export const incorporateCertificateValidator = yup.string().when({
  is: (val) => val.length > 0,
  then: () =>
    yup
      .string()
      .matches(
        /\S/,
        `Incorporate Certificate must contain at least one non-space character`
      )
      .min(2, 'Please provide valid incorporate number'),
});

export const cinNumberValidator = yup
  .string()
  .matches(/\S/, `CIN number must contain at least one non-space character`)
  .matches(
    /^[L|U]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/,
    'Enter a valid CIN number'
  )
  .required('CIN is required');

// .when({
//   is: (val) => val.length > 0,
//   then: () =>
//     yup
//       .string()
//       .matches(
//         /\S/,
//         `CIN number must contain at least one non-space character`
//       ),
// .min(2, "Please provide valid CIN number"),
// .matches(
//   /^[L|U]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/,
//   "Enter a valid CIN number"
// ),
// });

export const tradeLicenseValidator = yup
  .string()
  .nullable()
  .when({
    is: (val) => val?.length > 0,
    then: () =>
      yup
        .string()

        .matches(
          /\S/,
          `Trade license must contain at least one non-space character`
        )
        .min(2, 'Please provide valid trade license number'),
  });

export const addressLine1Validator = yup
  .string()
  .matches(/\S/, `Address line 1 must contain at least one non-space character`)
  .max(50, 'Address line 1 should not contain more than 50 characters')
  .required('Address line 1 is required');

export const addressLine1ValidatorBranch = yup
  .string()
  .matches(/\S/, `Address line 1 must contain at least one non-space character`)
  .max(200, 'Address line 1 should not contain more than 200 characters')
  .required('Address line 1 is required');

export const addressLine2ValidatorBranch = yup.string().when({
  is: (val) => val?.length > 0,
  then: () =>
    yup
      .string()
      .matches(
        /\S/,
        `Address line 2 must contain at least one non-space character`
      )
      .max(200, 'Address line 2 should not contain more than 200 characters'),
});

export const addressLine2Validator = yup.string().when({
  is: (val) => val?.length > 0,
  then: () =>
    yup
      .string()
      .matches(
        /\S/,
        `Address line 2 must contain at least one non-space character`
      )
      .max(50, 'Address line 2 should not contain more than 50 characters'),
});
// .matches(/\S/, `Address line 2 must contain at least one non-space character`)
// .required('Address line 2 is required');

export const cityValidator = yup
  .string()
  .matches(/\S/, `City must contain at least one non-space character`)
  .required('City is required');

export const pinCodeValidator = (name) =>
  yup
    .string()
    .matches(
      /\S/,
      `${name} required and must contain at least one non-space character`
    )
    .matches(/^\d{6}$/, 'Must be exactly 6 digits')
    .required(`${name} is required`);

export const countryValidator = yup
  .string()
  .matches(/\S/, `Country must contain at least one non-space character`)
  .required('Country is required');

export const stateValidator = yup
  .string()
  .matches(/\S/, `State must contain at least one non-space character`)
  .required('State is required');

export const roleNameValidator = (fieldName) =>
  yup.string().required(`${fieldName} is required`);

export const roleContactNumberValidator = (contactNo) =>
  yup
    .string()
    .required(`${contactNo} number is required`)
    .matches(
      /\S/,
      `${contactNo} number must contain at least one non-space character`
    )
    .matches(/^[6-9]\d{9}$/, 'Enter a valid contact number');

export const emailValidatorNonRequired = (str) =>
  yup.string().when({
    is: (val) => val.length > 0,
    then: () => yup.string().email(`Invalid ${str}`),
  });

export const clusterNameValidator = yup
  .string()
  .min(3, 'Name should be min 3')
  .required('Cluster Name is required');

export const clusterDetailsValidator = yup
  .string()
  .min(3, 'Cluster Details should not be less 3')
  .required('cluster Details is required');

export const regionValidator = yup.string().required('Region Name is Required');

// export const regionValidator = yup.string().required('Region Name is Required');

export const requiredNonZeroPositiveValidator = (name) =>
  yup
    .number()
    .typeError(`${name} is required and must be a number`)
    .required(`${name} is required!`)
    .positive(`${name} must be a positive number and cannot be zero`)
    .min(0, `${name} must be greater and equal to 0`)
    .test(
      'valid-number-range',
      `${name} must be greater and equal to 0 and less than or equal to 100`,
      (value) => !isNaN(value)  && value <= 100  // Updated test function
    )

export const requiredPositiveValidator = (name) =>
  yup
    .number()
    .typeError(`${name} is required and must be a number`)
    .required(`${name} is required!`)
    .test(
      'is-not-zero',
      `${name} cannot be zero`,
      (value) => value >= 0 && !isNaN(value)
    );

export const requiredValidator = (name) =>
  yup
    .string()
    .required(`${name} is required!`)
    .matches(/\S/, `${name} must contain at least one non-space character`);

export const requiredValidatorOfArray = (name) =>
  yup.string().when({
    is: (val) => val?.length > -1,
    then: () => yup.array().min(0, `${name} is required!`),
  });

export const requiredValidatorOfArrayNew = (name) =>
  yup
    .array()
    .min(1, `${name} is required!`)
    .max(5, `${name} should not have more than 5 items!`);


export const kamNameValidator = yup.string().required('Name is required');

export const kamEmailValidator = yup
  .string()
  .email('Invalid email')
  .required('Email is required');

export const kamMobileNoValidator = yup
  .string()
  .matches(/^[6-9]\d{9}$/, 'Enter a valid contact number')
  .required('Contact number is required');

export const fieldWithNoValidation = yup.mixed();

export const fieldWithNoValidationLogo = yup.mixed().nullable();

export const selectBranchValidator = yup
  .array()
  .min(1, 'minimum 1 branch is needed');

export const pricingValidator = (name) =>
  yup
    .number()
    .when({
      is: (val) => val.length === 0,
      then: () => yup.string().required(`${name} is Required!`),
    })
    .positive()
    .nullable(true)
    .required(`${name} is Required!`);

export const nonRequiredValidator = (name) =>
  yup.string().when({
    is: (val) => val?.length > 0,
    then: () =>
      yup
        .string()
        .matches(/\S/, `${name} must contain at least one non-space character`),
  });

export const conditionalValidationTan = yup
  .mixed()
  .test('is-tan-format', 'Please enter a valid TAN number', function (value) {
    if (value) {
      const tanRegex = /^[A-Za-z]{4}[0-9]{5}[A-Za-z]$/;
      return (
        tanRegex.test(value) ||
        this.createError({ message: 'Please enter a valid TAN number' })
      );
    }
    return true;
  });

export const positiveNumberValidation = yup
  .mixed()
  .test(
    'is-positive-number',
    'Please enter a number greater than zero',
    function (value) {
      if (value !== undefined && value !== null && value !== '') {
        return (
          value > 0 ||
          this.createError({
            message: 'Please enter a number greater than zero',
          })
        );
      }
      return true;
    }
  );

// export const capacityMtValidator = () =>
//   yup.string().required("Capacity (MT) is required");

// export const totalLoadValidator = () =>
//   yup.string().required("Total Load is required");
// export const noOfVehicleValidator = () =>
//   yup.string().required("No of Vehicle is required");
// export const basePriceValidator = () =>
//   yup.string().required("Base price is required");
export const commentValidator = () =>
  yup.string().required('Comment is required');
export const vehicleNumberValidator = yup
  .string()

  .matches(/^\d+$/, 'Vehicle number must contain only numbers')
  .required('Vehicle Number is required')
  .matches(/^\d+$/, 'Vehicle number must contain only numbers')
  .required('Vehicle Number is required');

export const commentValidatorRebid = () =>
  yup.string().required('Rebid Reason is required');

export const moduleValidator = (name) =>
  yup
    .array()
    .required(`${name} is Required!`)
    .min(1, 'Select atleast one option');

//for number validation
export const capacityMtValidator = yup
  .number()
  .required('Capacity(MT) is required')
  .typeError('Capacity(MT) must be a number')
  .positive('Capacity(MT) must be a positive number');

export const quantityValidator = yup
  .number()
  .required('Quantity is required')
  .typeError('Quantity must be a number')
  .positive('Quantity must be a positive number');
export const totalWeight = yup
  .number()
  .required('Total weight is required')
  .typeError('Total weight must be a number')
  .positive('Total weight must be a positive number');

export const amountvalidator = yup
  .number()
  .required('Amount is required')
  .typeError('Amount must be a number')
  .positive('Amount must be a positive number');

export const noOfVehicleValidator = yup
  .number()
  .required('No of vehicle is required')
  .typeError('No of vehicle must be a number')
  .positive('No of vehicle must be a positive number');

export const finalPriceValidator = yup
  .number()
  .required('Final Price is required')
  .typeError('Final Price must be a number')
  .positive('Final Price  must be a positive number');

export const basePriceValidator = yup
  .number()
  .required('Base Price is required')
  .typeError('Base Price must be a number')
  .positive('Base Price must be a positive number');

export const totalLoadValidator = yup
  .number()
  .required('Total load is required')
  .typeError('Total load must be a number')
  .positive('Total load must be a positive number');

export const nonSpecialCharacterValidator = (name) =>
  yup
    .string()
    .required(`${name} is required!`)
    .matches(/^[aA-zZ\s]+$/, 'Insert only normal character')
    .matches(/\S/, `${name} must contain at least one non-space character`);

export const nameValidatorNonRequired = (name, min, max) =>
  yup
    .string()
    .matches(/^[aA-zZ\s]*$/, 'Insert only normal characters') // Allows only alphabetic characters and spaces
    .matches(/\S/, `${name} must contain at least one non-space character`)
    .min(min, `${name} must be at least ${min} characters long`)
    .max(max, `${name} must be at most ${max} characters long`);

export const ewayBillValidator = yup
  .number()
  .required('eWay Bill is required')
  .typeError('eWay Bill must be a number')
  .positive('eWay Bill must be a positive number');

const atLeastOneElementRequired = (array) => {
  return array && array.length > 0;
};
export const materialValidator = yup
  .array()
  .test(
    'at-least-one-element',
    'At least one element is required',
    atLeastOneElementRequired
  )
  .of(yup.string());

export const requiredValidatorForNameRequired = (name) =>
  yup
    .string()
    .required(`${name} is required!`)
    .matches(
      /^[a-zA-Z ]+$/,
      `${name} must contain only alphabetic characters and spaces`
    )
    .min(3, `${name} must be at least 3 characters`)
    .max(30, `${name} cannot be more than 30 characters`)
    .matches(/\S/, `${name} must contain at least one non-space character`);

export const requiredValidatorForNameNonRequired = (name) =>
  yup
    .string()
    .matches(
      /^[a-zA-Z ]+$/,
      `${name} must contain only alphabetic characters and spaces`
    )
    .min(3, `${name} must be at least 3 characters`)
    .max(30, `${name} cannot be more than 30 characters`)
    .matches(/\S/, `${name} must contain at least one non-space character`);

export const conditionalIbaNumberValidator = yup
  .mixed()
  .test(
    'is-length-valid',
    'Input must be between 3 and 30 characters',
    function (value) {
      if (value) {
        const minLength = 3;
        const maxLength = 30;

        return (
          (value.length >= minLength && value.length <= maxLength) ||
          this.createError({
            message: 'IBA number must be between 3 and 30 characters',
          })
        );
      }
      return true;
    }
  );

export const rocNumberValidator = yup
  .string()
  .test('is-tan-format', 'Please enter a valid ROC number', function (value) {
    if (value) {
      const rocRegex = /^[L|U]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/;
      return (
        rocRegex.test(value) ||
        this.createError({ message: 'Please enter a valid ROC number' })
      );
    }
    return true;
  });

// export const ibaNumberValidator = () =>
//   yup
//     .string()
//     .min(3, `IBA number must be at least 3 characters`)
//     .max(30, `IBA number cannot be more than 30 characters`)
//     .required();

export const vehicleNumberValid = yup
  .mixed()
  .test('isVehicleNo', 'Please enter a valid Vehicle Number', (value) => {
    const format1 = /^[A-Z]{2}\d[A-Z]\d{4}$/;
    const format2 = /^[A-Z]{2}\d{2}[A-Z]\d{4}$/;
    const format3 = /^[A-Z]{2}\d{4}$/;
    const format4 = /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    const format5 = /^[A-Z]{2}\d{5}$/;
    const format6 = /^[A-Z]{2}\d{6}$/;
    return (
      format1.test(value) ||
      format2.test(value) ||
      format3.test(value) ||
      format4.test(value) ||
      format5.test(value) ||
      format6.test(value)
    );
  })
  .required('This field is required');

export const eWayBillVAlid = yup
  .mixed()
  .test('isVehicleNo', 'Please enter a valid e-Way bill number', (value) => {
    const format1 = /^\d{12}$/;
    return format1.test(value);
  })
  .required('This field is required');

export const eWayBillValidOptional = yup
  .mixed()
  .test(
    'isVehicleNoOptional',
    'Please enter a valid e-Way bill number',
    function (value) {
      // Check if the value is provided
      if (value !== undefined && value !== null && value !== '') {
        const format1 = /^\d{12}$/;
        // Check if the value matches the format
        return format1.test(value);
      }
      // If the value is not provided, no error
      return true;
    }
  )
  .nullable()
  .default(null);

export const nonSpaceValidator = () =>
  yup
    .string()
    .optional() // Field is optional
    .test(
      'is-valid',
      'Middle Name must be between 2 and 20 characters and contain only letters',
      function (value) {
        if (!value || value.trim().length === 0) {
          // If the value is empty or only spaces, skip validation
          return true;
        }

        // Perform validation only if value is provided
        const isValidLength = value.length >= 2 && value.length <= 20;
        const hasOnlyLetters = /^[a-zA-Z]+$/.test(value.trim());

        return isValidLength && hasOnlyLetters;
      }
    );