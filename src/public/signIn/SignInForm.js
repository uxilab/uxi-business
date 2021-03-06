import React from 'react';
import {
  FormattedMessage,
} from 'react-intl';
import {
  reduxForm,
  Field,
} from 'redux-form';
import {
  Checkbox,
} from 'uxi/Input';
import {
  Loader,
} from 'uxi/Indicator';
import Button from 'uxi/Button';
import { required, email } from '../../form/validation';
import { EmailInput, PasswordInput } from '../utils/Fields';

const SignInForm = ({
  isFetching,
  forgotUrl,
  forgotLink,
  onClick,
  handleSubmit,
  submitting,
  showRememberMe,
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
        type="text"
        autoFocus
        component={EmailInput}
        validate={[required, email]}
      />
      <Field
        name="password"
        component={PasswordInput}
        validate={[required]}
      />
    </div>
    {
      showRememberMe === true
        ? (
          <div style={{ display: 'flex', padding: '0 0 16px 0', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <Checkbox
                label={
                  <FormattedMessage
                    id="uxi-business-rememberMe"
                    defaultMessage="Remember me"
                  />
                }
              />
            </div>
          </div>
        )
        : null
    }
    <div style={{ paddingTop: '16px' }}>
      <Button
        disabled={submitting || isFetching}
        icon={isFetching ? <Loader /> : null}
        isFullWidth
        type="primary"
        onClick={handleSubmit(onClick)}
        message={
          <FormattedMessage
            id="uxi-business-signin"
            defaultMessage="Sign in"
          />
        }
      />
    </div>
    <div style={{ paddingTop: '16px' }}>
      {
        !forgotLink &&
              (
                <a href={forgotUrl || '/forgot'}>
                  <FormattedMessage
                    id="uxi-business-forgotPassword"
                    defaultMessage="I forgot my password"
                  />
                </a>
              )
      }
      {forgotLink && forgotLink}
    </div>
  </div>
);

SignInForm.displayName = 'SignInForm';

export default reduxForm({ form: 'uxi-business-signin' })(SignInForm);
