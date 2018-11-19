'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _reduxForm = require('redux-form');

var _Input = require('uxi/Input');

var _Indicator = require('uxi/Indicator');

var _Button = require('uxi/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormDecoratorHoc = require('../../form/FormDecoratorHoc');

var _FormDecoratorHoc2 = _interopRequireDefault(_FormDecoratorHoc);

var _validation = require('../../form/validation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailInput = (0, _FormDecoratorHoc2.default)(_Input.TextField, {
  label: _react2.default.createElement(_reactIntl.FormattedMessage, {
    id: 'uxi-business-Email',
    defaultMessage: 'Email'
  }),
  helpText: _react2.default.createElement(_reactIntl.FormattedMessage, {
    id: 'uxi-business-forgotPasswordExplanation',
    defaultMessage: 'We will email you a reset link.'
  })
});

var ForgotPasswordForm = function ForgotPasswordForm(_ref) {
  var isFetching = _ref.isFetching,
      onClick = _ref.onClick,
      handleSubmit = _ref.handleSubmit,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      loginLink = _ref.loginLink,
      loginUrl = _ref.loginUrl;
  return _react2.default.createElement(
    'div',
    {
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') {
          handleSubmit(onClick)();
        }
      }
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, {
        name: 'email',
        type: 'text',
        autoFocus: true,
        component: EmailInput,
        validate: [_validation.required, _validation.email]
      })
    ),
    _react2.default.createElement(
      'div',
      { style: { paddingTop: '16px' } },
      _react2.default.createElement(_Button2.default, {
        disabled: pristine || submitting || isFetching,
        isFullWidth: true,
        icon: isFetching ? _react2.default.createElement(_Indicator.Loader, null) : null,
        type: 'primary',
        onClick: handleSubmit(onClick),
        message: _react2.default.createElement(_reactIntl.FormattedMessage, {
          id: 'uxi-business-sendMagicLink',
          defaultMessage: 'Send magic email'
        })
      })
    ),
    _react2.default.createElement(
      'div',
      { style: { paddingTop: '16px' } },
      !loginLink && _react2.default.createElement(
        'a',
        { href: loginUrl ? loginUrl : '/signin' },
        _react2.default.createElement(_reactIntl.FormattedMessage, {
          id: 'uxi-business-backtoLogin',
          defaultMessage: 'Return to sign in'
        })
      ),
      loginLink && loginLink
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({ form: 'uxi-business-forgot' })(ForgotPasswordForm);