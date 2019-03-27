import React from 'react';
import {
  generateFormHoc,
} from 'uxi-business';

const SignUp = generateFormHoc('CreateAccountForm', [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    readOnly: true,
    disabled: true,
    helpText: 'The email your entered in the intial step',
  },
  {
    name: 'organizationName',
    label: 'Web Address',
    sufix: 'foobar.com',
    helpText: 'Keep it simple and in one word (only letters and numbers are allowed, max. 30 characters)',
  },
  {
    name: 'username',
    label: 'Username',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    helpText: 'Keep it secret and 8 characters minimum',
  },
], {
  buttonLabel: "Signup"
});

const CreateAccountForm = ({ email, isMutating, onSignup }) => {
  return (
    <SignUp isFetching={isMutating} initialValues={{ email: 'foo@foobar.com', username: 'eokfoefkeofk' }} onClick={onSignup} />
  );
};

export default CreateAccountForm;
