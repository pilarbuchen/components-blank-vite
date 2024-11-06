import React from 'react';
import { Formik, Form, Field } from 'formik';

const MyFormikComponent = () => (
  <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
    <Form>
      <label>Email:</label>
      <Field type="email" name="email" />
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default MyFormikComponent;
