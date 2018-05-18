import React from 'react';
import { render } from 'react-dom';
import {
  SignInForm,
  ForgotPasswordForm,
  generateFormHoc,
} from 'uxi-business';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

const store = createStore(rootReducer)

const MyForm = generateFormHoc('example', [
  {
    name: 'test',
    label: 'Test Label'
  },
  {
    name: 'test2',
    label: 'Test Label2'
  },
]);

const App = () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <ThemeProvider>
      <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <SignInForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
        </div>
        <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <ForgotPasswordForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
        </div>
        <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <MyForm
            onClick={(values) => { alert(JSON.stringify(values)); }}
          />
        </div>
      </ThemeProvider>
    </IntlProvider>
  </Provider>
);

render(<App />, document.getElementById('root'));
