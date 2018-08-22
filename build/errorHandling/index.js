'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withDefaultErrorHandlingActions = exports.defaultErrorHandling = exports.withDefaultCatch = exports.defaultCatch = exports.withDefaultErrorHandler = undefined;

var _actions = require('../userMessage/actions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultErrorRequest = function (_Error) {
  _inherits(DefaultErrorRequest, _Error);

  function DefaultErrorRequest() {
    var _ref;

    var requestError = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DefaultErrorRequest);

    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    var _this = _possibleConstructorReturn(this, (_ref = DefaultErrorRequest.__proto__ || Object.getPrototypeOf(DefaultErrorRequest)).call.apply(_ref, [this].concat(params)));
    // Pass remaining arguments (including vendor specific ones) to parent constructor


    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, DefaultErrorRequest);
    }

    // Custom debugging information
    _this.requestError = requestError;
    _this.date = new Date();
    return _this;
  }

  return DefaultErrorRequest;
}(Error);

var withDefaultErrorHandler = exports.withDefaultErrorHandler = function withDefaultErrorHandler(Comp) {
  return function (props) {
    return React.createElement(
      AppContext.Consumer,
      null,
      function (_ref2) {
        var log = _ref2.log;
        return React.createElement(
          SwallowComponet,
          { log: log },
          React.createElement(Comp, props)
        );
      }
    );
  };
};

var defaultCatch = exports.defaultCatch = function defaultCatch(response) {
  if (!response.ok) {
    return response.text().then(function (text) {
      throw new DefaultErrorRequest({
        isError: true,
        status: response.status,
        message: text,
        original: response
      });
    });
  }

  return response;
};

var withDefaultCatch = exports.withDefaultCatch = function withDefaultCatch(promise) {
  return promise.then(handleErrorAndCreateErrorResp);
};

var defaultMutationHandling = function defaultMutationHandling(dispatch) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (resp) {
    var successMessage = options.successMessage;
    var id = uuid();
    if (resp.ok) {
      dispatch(options.success ? options.success({ id: id, message: successMessage }) : (0, _actions.showSuccess)({ id: id, message: successMessage }));

      setTimeout(function () {
        dispatch((0, _actions.clearError)(id));
      }, 10000);
    }
  };
};

var defaultErrorHandling = exports.defaultErrorHandling = function defaultErrorHandling(dispatch, params) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (e) {
    var response = e.requestError || {};
    var errorMessage = response.message || e.message;
    var requestURL = response && response.original ? response.original.url : '';
    var id = uuid();

    setTimeout(function () {
      dispatch((0, _actions.clearError)(id));
    }, 10000);

    if (options.onErrorAction) {
      dispatch(options.onErrorAction());
    }

    if (response.original && response.original.status === 401) {
      options.log && options.log('Error 401 - unauthorized - for ' + response.original.url);

      var unauthorizedMessage = {
        id: id,
        params: params,
        errorMessage: errorMessage,
        url: requestURL,
        status: 401
      };

      return dispatch(options.sessionExpired ? options.sessionExpired(unauthorizedMessage) : (0, _actions.generalSessionExpired)(unauthorizedMessage));
    }

    if (response.original && response.original.status === 403) {
      options.log && options.log('Error 403 - access denied - for ' + response.original.url);

      var accessDeniedMessage = {
        id: id,
        params: params,
        errorMessage: errorMessage,
        url: requestURL,
        status: 403
      };

      return dispatch(options.accessDenied ? options.accessDenied(accessDeniedMessage) : (0, _actions.generalAccessDenied)(accessDeniedMessage));
    }

    if (response.original && response.original.status === 404) {
      options.log && options.log('Error 404 - Not Found - for ' + response.original.url);

      var notFoundMessage = {
        id: id,
        params: params,
        errorMessage: errorMessage,
        url: requestURL,
        status: 404
      };

      return dispatch(options.notFound ? options.notFound(notFoundMessage) : (0, _actions.generalEntityNotFound)(notFoundMessage));
    }

    if (response.original && response.original.status === 202) {
      options.log && options.log('Error 202 - Queued - for ' + response.original.url);

      var queuedMessage = {
        id: id,
        params: params,
        errorMessage: errorMessage,
        url: requestURL,
        status: 202
      };

      return dispatch(options.queued ? options.queued(queuedMessage) : (0, _actions.generalQueued)(queuedMessage));
    }

    if (response.original && response.original.status && response.original.status >= 400 && response.original.status <= 599) {
      options.log && options.log('Error ' + response.original.status + ' - Unknown - for ' + response.original.url);

      var unknownErrorMessage = {
        id: id,
        params: params,
        errorMessage: errorMessage,
        url: requestURL,
        status: response.original.status
      };

      return dispatch(options.networkError ? options.networkError(unknownErrorMessage) : (0, _actions.generalNetworkError)(unknownErrorMessage));
    }

    if (response.isError) {
      options.log && options.log('Uknow Error - Unknown status - for ' + response.original.url);

      var _unknownErrorMessage = {
        id: id,
        params: params,
        errorMessage: errorMessage,
        url: requestURL
      };

      if (response.original.status === 409) {
        return dispatch(options.conflictedEntity ? options.conflictedEntity(_unknownErrorMessage) : (0, _actions.generalConflictedEntity)(_unknownErrorMessage));
      }

      return dispatch(options.networkError ? options.networkError(_unknownErrorMessage) : (0, _actions.generalNetworkError)(_unknownErrorMessage));
    }

    if (errorMessage) {
      return dispatch(options.unknownError ? options.unknownError({
        id: id,
        params: params,
        errorMessage: errorMessage
      }) : (0, _actions.generalUnknownError)({
        id: id,
        params: params,
        errorMessage: errorMessage
      }));
    }

    return null;
  };
};
/**
 * Decorate an action that fetch Data and ensure there is a default actions handler.
 * errorActions {
 *    sessionExpired,
 *    accessDenied,
 *    notFound,
 *    unknownError,
 *    queued,
 * }
 */
var withDefaultErrorHandlingActions = exports.withDefaultErrorHandlingActions = function withDefaultErrorHandlingActions(promise) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (params) {
    return function (dispatch) {
      if (options.withMutation) {
        return promise(params)(dispatch).then(defaultMutationHandling).catch(defaultErrorHandling(dispatch, params, options));
      }

      return promise(params)(dispatch).catch(defaultErrorHandling(dispatch, params, options));
    };
  };
};