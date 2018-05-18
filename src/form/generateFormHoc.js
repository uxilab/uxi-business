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
} from 'uxi/Input';
import {
  Loader
} from 'uxi/Indicator';
import Button from 'uxi/Button';
import FormDecoratorHoc from './FormDecoratorHoc';

const genreateFields = (fields = []) => {
  return fields.map(
    (field) => (
      { name: field.name, field: FormDecoratorHoc(field.Input || TextField, field) }
    )
  );
};

const generateFormHoc = (formName, fields = []) => {
  const generatedFields = genreateFields(fields) || [];
  
  const GeneratedForm = ({
    isFetching,
    buttonLabel,
    onClick,
    handleSubmit,
    pristine,
    submitting,
  }) => (
    <div style={{ padding:'16px' }}>
      {
        generatedFields.map((field) => {
          return (
            <Field
              name={field.name}
              type={field.type || 'text'}
              autoFocus={field.autoFocus || false}
              component={field.field}
              validate={field.validate || []}
            />
          );
        })
      }
      <div style={{ display: 'flex', justifyContent:'flex-end' }}>
        <Button
          disabled={pristine || submitting || isFetching}
          icon={ isFetching ? <Loader /> : null }
          type="primary"
          onClick={handleSubmit(onClick)}
          message={buttonLabel || 'Submit'}
        />
      </div>
    </div>
  );

  return reduxForm({ form: formName })(GeneratedForm);
};

export default generateFormHoc;
