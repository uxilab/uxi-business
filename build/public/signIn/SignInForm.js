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
  })
});

var PasswordInput = (0, _FormDecoratorHoc2.default)(_Input.TextField, {
  type: 'password',
  label: _react2.default.createElement(_reactIntl.FormattedMessage, {
    id: 'uxi-business-password',
    defaultMessage: 'Password'
  })
});

var SignInForm = function SignInForm(_ref) {
  var isFetching = _ref.isFetching,
      forgotUrl = _ref.forgotUrl,
      forgotLink = _ref.forgotLink,
      onClick = _ref.onClick,
      handleSubmit = _ref.handleSubmit,
      pristine = _ref.pristine,
      submitting = _ref.submitting;
  return _react2.default.createElement(
    'div',
    {
      onKeyPress: function onKeyPress(e) {
        if (e.key === 'Enter') {
          handleSubmit(onClick)();
        }
      },
      style: { padding: '16px' }
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reduxForm.Field, {
        name: 'email',
        type: 'email',
        autoFocus: true,
        component: EmailInput,
        validate: [_validation.required, _validation.email]
      }),
      _react2.default.createElement(_reduxForm.Field, {
        name: 'password',
        component: PasswordInput,
        validate: [_validation.required]
      })
    ),
    _react2.default.createElement(
      'div',
      { style: { display: 'flex', padding: '0 0 16px 0', alignItems: "center" } },
      _react2.default.createElement(
        'div',
        { style: { flex: 1 } },
        _react2.default.createElement(_Input.Checkbox, {
          label: _react2.default.createElement(_reactIntl.FormattedMessage, {
            id: 'uxi-business-rememberMe',
            defaultMessage: 'Remember me'
          })
        })
      ),
      _react2.default.createElement(
        'div',
        null,
        !forgotLink && _react2.default.createElement(
          'a',
          { href: forgotUrl ? forgotUrl : '/forgot' },
          _react2.default.createElement(_reactIntl.FormattedMessage, {
            id: 'uxi-business-forgotPassword',
            defaultMessage: 'I forgot my password'
          })
        ),
        forgotLink && forgotLink
      )
    ),
    _react2.default.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'flex-end' } },
      _react2.default.createElement(_Button2.default, {
        disabled: submitting || isFetching,
        icon: isFetching ? _react2.default.createElement(_Indicator.Loader, null) : null,
        type: 'primary',
        onClick: handleSubmit(onClick),
        message: _react2.default.createElement(_reactIntl.FormattedMessage, {
          id: 'uxi-business-signin',
          defaultMessage: 'Sign in'
        })
      })
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({ form: 'uxi-business-signin' })(SignInForm);