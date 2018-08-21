import React from 'react';
import { render } from 'react-dom';
import {
  SignInForm,
  ForgotPasswordForm,
  ResetPasswordForm,
  UxiBusinessProvider,
} from 'uxi-business';
import {
  reducer as userMessage,
  UserMessageProvider,
} from 'uxi-business/userMessage';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import FormWithCusomtInput from './examples/FormWithCusomtInput';
import FormWithFieldAsyncValidation from './examples/FormWithFieldAsyncValidation';
import { connect } from 'react-redux';
import { showSuccess, showWarning, showError, showInfo } from 'uxi-business/userMessage/actions';

const rootReducer = combineReducers({
  form: formReducer,
  userMessage,
});

const store = createStore(rootReducer)

const DispatchButtons = ({ dispatch }) => {
  return (
    <div>
      <button onClick={() => {dispatch(showSuccess({ message:'Yo!!' }))}} >Show Success</button>
      <button onClick={() => {dispatch(showWarning({ message:'Dooh!'}))}} >Show Warning</button>
      <button onClick={() => {dispatch(showError({ message:'Dooh Error!'}))}} >Show Error</button>
      <button onClick={() => {dispatch(showInfo({ message:'Just so you know!'}))}} >Show Info</button>
    </div>
  )
}
const DispatchButtonsContainer = connect()(DispatchButtons);

const App = () => (
  <Provider store={store}>
    <IntlProvider locale="en">
      <ThemeProvider>
        <UxiBusinessProvider
          onSessionExpired={()=> {alert('logout ')}}
        >
          <UserMessageProvider>
            <h1>Title</h1>
            <DispatchButtonsContainer />
          </UserMessageProvider>
        </UxiBusinessProvider>
      {/* <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <SignInForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
        </div> */}
         {/* <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <ForgotPasswordForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
        </div> */}
       {/* <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <FormWithCusomtInput />
      </div>*/}
       {/* <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
          <ResetPasswordForm
            onClick={(value) => {alert(JSON.stringify(value))}}
          />
      </div>*/}
      {/* <div style={{ maxWidth:'500px', paddingTop: '64px', margin: '0 auto' }}>
        <FormWithFieldAsyncValidation
          onClick={(value) => {alert(JSON.stringify(value))}}
          />
      </div> */}
      </ThemeProvider>
    </IntlProvider>
  </Provider>
);

render(<App />, document.getElementById('root'));
