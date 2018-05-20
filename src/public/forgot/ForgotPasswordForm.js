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
import { required, email } from '../../form/validation';

const EmailInput = FormDecoratorHoc(TextField, {
  label: (
    <FormattedMessage
      id="uxi-business-Email"
      defaultMessage="Email"
    />
  ),
  helpText: (
    <FormattedMessage
      id="uxi-business-forgotPasswordExplanation"
      defaultMessage="We will email you a reset link."
    />
  ),
});


const ForgotPasswordForm = ({
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
    style={{ padding:'16px' }}
    >
    <div>
      <Field
          name="email"
          type="email"
          autoFocus
          component={EmailInput}
          validate={[required, email]}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
            <Button
              disabled={pristine || submitting || isFetching}
              icon={ isFetching ? <Loader /> : null }
              type="primary"
              onClick={handleSubmit(onClick)}
              message={
                <FormattedMessage
                  id="uxi-business-resetPassword"
                  defaultMessage="Reset Password"
                />
              }
            />
          </div>
        <div style={{flex:1, paddingLeft:'32px'}}>
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
  </div>
);

export default reduxForm({ form: 'uxi-business-forgot' })(ForgotPasswordForm);
