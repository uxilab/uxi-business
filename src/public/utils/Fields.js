import React from 'react';
import {
  FormattedMessage
} from 'react-intl';
import {
  TextField,
} from 'uxi/Input';
import FormDecoratorHoc from '../../form/FormDecoratorHoc';
import PublicFormLabel from '../../form/PublicFormLabel';

export const EmailInput = FormDecoratorHoc(TextField, {
  label: (
    <PublicFormLabel>
      <FormattedMessage
        id="uxi-business-Email"
        defaultMessage="Email"
      />
    </PublicFormLabel>
  ),
});

export const PasswordInput = FormDecoratorHoc(TextField, {
  type: 'password',
  label: (
    <PublicFormLabel>
      <FormattedMessage
        id="uxi-business-password"
        defaultMessage="Password"
      />
    </PublicFormLabel>
  ),
});

export default {
  EmailInput,
  PasswordInput,
};
