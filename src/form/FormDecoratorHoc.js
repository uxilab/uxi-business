import React from 'react';
import Text from 'uxi/Text';
import RequiredField from './RequiredField';
import InputFieldGroup from './InputFieldGroup';

const FormDecorator = (Input, option) => props => (
  <div>
    <div>
      {
        !option.noLabel && option.label &&
        ( // eslint-disable-next-line jsx-a11y/label-has-for
          <label>
            {option.label}
            {option && option.isRequired && <RequiredField />}
          </label>
        )
      }
    </div>
    {option.helpText &&
      <div style={{ marginBottom: '12px' }}>
        <Text type="caption">
          {option.helpText}
        </Text>
      </div>
    }
    {
      props.meta.asyncValidating && 'Loadingg!!!'
    }
    <div style={{ marginBottom: '16px' }}>
      {
        (option.prefix || option.sufix) && (
          <InputFieldGroup prefix={option.prefix} sufix={option.sufix}>
            <Input
              {...option}
              {...props}
              {...props.input}
              success={props.meta.touched && !props.meta.error}
              error={props.meta.touched && props.meta.error}
            />
          </InputFieldGroup>
        )
      }
      {
        (!option.prefix && !option.sufix) && (
          <Input
            {...option}
            {...props}
            {...props.input}
            success={props.meta.touched && !props.meta.error}
            error={props.meta.touched && props.meta.error}
          />
        )
      }
    </div>
  </div>
);

export default FormDecorator;
