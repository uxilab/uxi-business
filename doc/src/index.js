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
import thunkMiddleware from 'redux-thunk';
import ThemeProvider from 'uxi/Theme/ThemeProvider';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import FormWithCusomtInput from './examples/FormWithCusomtInput';
import FormWithFieldAsyncValidation from './examples/FormWithFieldAsyncValidation';
import { connect } from 'react-redux';
import { createAction } from 'redux-actions';
import { showSuccess, showWarning, showError, showInfo, withContainedUserFeedback } from 'uxi-business/userMessage/actions';
import { withDefaultErrorHandlingActions } from 'uxi-business/errorHandling';

const rootReducer = combineReducers({
  form: formReducer,
  userMessage,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

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

const shouldFetch = (test) => (dispatch) => {
  dispatch(createAction('test'));
  return new Promise((accept, reject) => {
    setTimeout(() => {
      reject(new Error('Woulalal'));
    }, 2000);
  });
};

const shouldFetchWithErrorHandling = withDefaultErrorHandlingActions(shouldFetch);


const ContextualMessage = ({
  success,
  warning,
  error,
  info,
  dispatch,
  withContext,
}) => {
  return (
    <div>
      <button onClick={() => {success({ message:'Yo!!' })}} >Show Success in context</button>
      <button onClick={() => {warning({ message:'Dooh!'})}} >Show Warning in context</button>
      <button onClick={() => {error({ message:'Dooh Error!'})}} >Show Error in context</button>
      <button onClick={() => {info({ message:'Just so you know!'})}} >Show Info in context</button>

      <button onClick={() => dispatch(shouldFetchWithErrorHandling(withContext({})))}>Show from promise</button>
    </div>
  );
};

const ConnectedContextualMessage = connect()(ContextualMessage);

const ComponentWithContext = withContainedUserFeedback(ConnectedContextualMessage);

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
            <div style={{padding:'150px'}}>
              <ComponentWithContext />
            </div>
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
