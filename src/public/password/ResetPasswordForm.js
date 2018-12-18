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
import PublicFormLabel from '../../form/PublicFormLabel';
import { PasswordInput } from '../utils/Fields';
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

const EmailInput = FormDecoratorHoc(TextField, {
  label: (
    <FormattedMessage
      id="uxi-business-Email"
      defaultMessage="Email"
    />
  ),
  helpText: (
    <FormattedMessage
      id="uxi-business-resetPasswordEmailHelp"
      defaultMessage="For security reason, we ask you to re-enter the email address linked to your account."
    />
  ),
});

const ConfirmPasswordInput = FormDecoratorHoc(TextField, {
    type: 'password',
    label: (
      <PublicFormLabel>
        <FormattedMessage
          id="uxi-business-password"
          defaultMessage="Confirm your password"
        />
      </PublicFormLabel>
    ),
});

const ResetPasswordForm = ({
    isFetching,
    onClick,
    handleSubmit,
    pristine,
    submitting,
    loginLink,
    loginUrl,
  }) => (
  <div
    onKeyPress={(e) => {
      if (e.key === 'Enter') {
        handleSubmit(onClick)();
      }
    }}
  >
    <div>
        <Field
          name="email"
          component={EmailInput}
          validate={[required, email]}
        />
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
      <div style={{ paddingTop: '16px' }}>
        <Button
          isFullWidth
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
      <div style={{ paddingTop: '16px' }}>
            {
                !loginLink &&
                (
                  <a href={ loginUrl ? loginUrl : '/signin' }>
                    <FormattedMessage
                      id="uxi-business-backtoLogin"
                      defaultMessage="Return to sign in"
                    />
                  </a>
                )
            }
            {loginLink && loginLink}
        </div>
  </div>
);

ResetPasswordForm.displayName = 'ResetPasswordForm'

export default reduxForm({
    form: 'uxi-business-resetPassword',
    validate: validatePassword,
})(ResetPasswordForm);
