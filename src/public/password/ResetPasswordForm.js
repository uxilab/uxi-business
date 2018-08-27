import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import {
  reduxForm,
  Field,
} from 'redux-form';
import {
  TextField,
  Checkbox,
} from 'uxi/Input';
import {
  Loader
} from 'uxi/Indicator';
import Button from 'uxi/Button';
import FormDecoratorHoc from '../../form/FormDecoratorHoc';
import { required, email, validPassword } from '../../form/validation';

const validatePassword = (values) => {
  const errors = {};

  if(
    values.password &&
    values.confirmPassword &&
    values.password !== values.confirmPassword
  ) {
    errors.confirmPassword = 'Use same value as the password';
  }

  return errors;
};

const PasswordInput = FormDecoratorHoc(TextField, {
  type: 'password',
  label: (
    <FormattedMessage
      id="uxi-business-password"
      defaultMessage="Password"
    />
  ),
});

const ConfirmPasswordInput = FormDecoratorHoc(TextField, {
    type: 'password',
    label: (
      <FormattedMessage
        id="uxi-business-password"
        defaultMessage="Confirm your password"
      />
    ),
});

const ResetPasswordForm = ({
    isFetching,
    onClick,
    handleSubmit,
    pristine,
    submitting,
  }) => (
  <div
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        handleSubmit(onClick)();
      }
    }}
    style={{ padding:'16px' }}
  >
    <div>
        <Field
          name="password"
          component={PasswordInput}
          validate={[required, validPassword]}
        />
        <Field
          name="confirmPassword"
          component={ConfirmPasswordInput}
          validate={[required, validPassword]}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent:'flex-end' }}>
        <Button
          disabled={pristine || submitting || isFetching}
          icon={ isFetching ? <Loader /> : null }
          type="primary"
          onClick={handleSubmit(onClick)}
          message={
            <FormattedMessage
              id="uxi-business-resetPasswordAction"
              defaultMessage="Change Password"
            />
          }
        />
      </div>
  </div>
);

export default reduxForm({
    form: 'uxi-business-resetPassword',
    validate: validatePassword,
})(ResetPasswordForm);
