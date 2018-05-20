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
});

const PasswordInput = FormDecoratorHoc(TextField, {
  type: 'password',
  label: (
    <FormattedMessage
      id="uxi-business-password"
      defaultMessage="Password"
    />
  ),
});

const SignInForm = ({
    isFetching,
    forgotUrl,
    forgotLink,
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
          name="email"
          type="email"
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
      <div style={{display: 'flex', padding: '0 0 16px 0', alignItems:"center"}}>
        <div style={{flex:1}}>
          <Checkbox
            label={
              <FormattedMessage
                id="uxi-business-rememberMe"
                defaultMessage="Remember me"
              />
            }
          />
        </div>
        <div>
          {
              !forgotLink && 
              (
                <a href={ forgotUrl ? forgotUrl : '/forgot' }>
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
      <div style={{ display: 'flex', justifyContent:'flex-end'}}>
        <Button
          disabled={pristine || submitting || isFetching}
          icon={ isFetching ? <Loader /> : null }
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
  </div>
);

export default reduxForm({ form: 'uxi-business-signin' })(SignInForm);
