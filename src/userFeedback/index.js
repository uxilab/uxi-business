export reducer from './reducer';
export withDefaultErrorHandlingActions from './actions';
export withUserFeedback from './components/hocs/withUserFeedback';
export UserFeedbackProvider from './components/UserFeedbackProvider';

class DefaultErrorRequest extends Error {
  constructor(requestError = {}, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, DefaultErrorRequest);
    }

    // Custom debugging information
    this.requestError = requestError;
    this.date = new Date();
  }
}

export const defaultCatch = (response) => {
  if (!response.ok) {
    return response.text().then((text) => {
      throw new DefaultErrorRequest({
        isError: true,
        status: response.status,
        message: text,
        original: response,
      });
    });
  }

  return response;
};

export const withDefaultCatch = (promise) => (promise.then(handleErrorAndCreateErrorResp));
