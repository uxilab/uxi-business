import React from 'react';
import Text from 'uxi/Text';
import RequiredField from './RequiredField';

const FormDecorator = (Input, props) => field => (
  <div>
    <div>
      {
        props.label &&
        (
          <label>
            {props.label}
            {props && props.isRequired && <RequiredField />}
          </label>
        )
      }
    </div>
    {props.helpText &&
      <div style={{ marginBottom: '12px' }}>
        <Text type="caption">
          {props.helpText}
        </Text>
      </div>
    }
    <div style={{ marginBottom: '16px' }}>
      <Input
        {...props}
        {...field}
        {...field.input}
        success={field.meta.touched && !field.meta.error}
        error={field.meta.touched && field.meta.error}
      />
    </div>
  </div>
);

export default FormDecorator;
