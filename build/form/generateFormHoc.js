'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _reduxForm = require('redux-form');

var _Input = require('uxi/Input');

var _Indicator = require('uxi/Indicator');

var _Button = require('uxi/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormDecoratorHoc = require('./FormDecoratorHoc');

var _FormDecoratorHoc2 = _interopRequireDefault(_FormDecoratorHoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var genreateFields = function genreateFields() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return fields.map(function (field) {
    return {
      name: field.name,
      type: field.type,
      autoFocus: field.autoFocus,
      validate: field.validate || [],
      component: (0, _FormDecoratorHoc2.default)(field.Input || _Input.TextField, field)
    };
  });
};

var generateFormHoc = function generateFormHoc(formName) {
  var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var generatedFields = genreateFields(fields) || [];

  var GeneratedForm = function GeneratedForm(_ref) {
    var isFetching = _ref.isFetching,
        buttonLabel = _ref.buttonLabel,
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
      generatedFields.map(function (field) {
        return _react2.default.createElement(_reduxForm.Field, {
          key: field.name,
          name: field.name,
          type: field.type || 'text',
          autoFocus: field.autoFocus || false,
          component: field.component,
          validate: field.validate || []
        });
      }),
      _react2.default.createElement(
        'div',
        { style: { display: 'flex', justifyContent: 'flex-end' } },
        _react2.default.createElement(_Button2.default, {
          disabled: pristine || submitting || isFetching,
          icon: isFetching ? _react2.default.createElement(_Indicator.Loader, null) : null,
          type: 'primary',
          onClick: handleSubmit(onClick),
          message: buttonLabel || 'Submit'
        })
      )
    );
  };

  return (0, _reduxForm.reduxForm)(_extends({ form: formName }, options))(GeneratedForm);
};

exports.default = generateFormHoc;