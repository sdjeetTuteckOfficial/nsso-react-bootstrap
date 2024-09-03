// validationSchema.js
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  age: Yup.number()
    .nullable()
    .transform((value, originalValue) => (originalValue === '' ? null : value))
    .required('Age is required')
    .test('is-soft-warning', function (value) {
      if (value && value < 18) {
        return this.createError({
          message: 'Age is below 18 (soft check)',
          type: 'soft-check',
        });
      }
      return true;
    }),
  education: Yup.string().required('Education details are required'), // Hard check
});
