'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _UxiBusinessProvider = require('../../provider/UxiBusinessProvider');

var _SessionExpired = require('./composites/SessionExpired');

var _SessionExpired2 = _interopRequireDefault(_SessionExpired);

var _UserFeedbackWrapper = require('./composites/UserFeedbackWrapper');

var _UserFeedbackWrapper2 = _interopRequireDefault(_UserFeedbackWrapper);

var _DefaultUserFeedback = require('./DefaultUserFeedback');

var _DefaultUserFeedback2 = _interopRequireDefault(_DefaultUserFeedback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserFeedbackProvider = function UserFeedbackProvider(_ref) {
  var children = _ref.children,
      sessionExpiredGlobalMessages = _ref.sessionExpiredGlobalMessages;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _UserFeedbackWrapper2.default,
      null,
      _react2.default.createElement(
        _UxiBusinessProvider.AppContext.Consumer,
        null,
        function (_ref2) {
          var onSessionExpired = _ref2.onSessionExpired;
          return _react2.default.createElement(
            'div',
            null,
            sessionExpiredGlobalMessages && sessionExpiredGlobalMessages.length > 0 && _react2.default.createElement(_SessionExpired2.default, { onSessionExpired: onSessionExpired }),
            _react2.default.createElement(_DefaultUserFeedback2.default, null)
          );
        }
      )
    ),
    children
  );
};

var mapStateToProps = function mapStateToProps(_ref3) {
  var sessionExpiredGlobalMessages = _ref3.userMessage.sessionExpiredGlobalMessages;
  return {
    sessionExpiredGlobalMessages: sessionExpiredGlobalMessages
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(UserFeedbackProvider);