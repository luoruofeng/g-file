import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Typography variant="h6">Login</Typography>
        <div>
          <Field
            as={TextField}
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <Field
            as={TextField}
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <ErrorMessage name="password" component="div" />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
