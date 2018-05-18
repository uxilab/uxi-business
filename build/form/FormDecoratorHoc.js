'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('uxi/Text');

var _Text2 = _interopRequireDefault(_Text);

var _RequiredField = require('./RequiredField');

var _RequiredField2 = _interopRequireDefault(_RequiredField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormDecorator = function FormDecorator(Input, props) {
  return function (field) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        props.label && _react2.default.createElement(
          'label',
          null,
          props.label,
          props && props.isRequired && _react2.default.createElement(_RequiredField2.default, null)
        )
      ),
      props.helpText && _react2.default.createElement(
        'div',
        { style: { marginBottom: '12px' } },
        _react2.default.createElement(
          _Text2.default,
          { type: 'caption' },
          props.helpText
        )
      ),
      _react2.default.createElement(
        'div',
        { style: { marginBottom: '16px' } },
        _react2.default.createElement(Input, _extends({}, props, field, field.input, {
          success: field.meta.touched && !field.meta.error,
          error: field.meta.touched && field.meta.error
        }))
      )
    );
  };
};

exports.default = FormDecorator;