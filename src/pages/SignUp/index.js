import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password length should be at least 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your E-mail" />
        <Input name="password" type="password" placeholder="Your Password" />
        <button type="submit">Create Account</button>
        <Link to="/register">I already have login</Link>
      </Form>
    </>
  );
}
