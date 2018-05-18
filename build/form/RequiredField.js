'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-weight: bold;\n  color: red;\n'], ['\n  font-weight: bold;\n  color: red;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RequiredFieldWrapper = _styledComponents2.default.span(_templateObject);

var RequiredField = function RequiredField() {
  return _react2.default.createElement(
    RequiredFieldWrapper,
    null,
    '*'
  );
};

exports.default = RequiredField;