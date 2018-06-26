'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  flex:1;\n'], ['\n  flex:1;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    line-height: 32px;\n    padding-right: 6px;\n'], ['\n    line-height: 32px;\n    padding-right: 6px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    line-height: 32px;\n    padding-left: 6px;\n'], ['\n    line-height: 32px;\n    padding-left: 6px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperInputGroup = _styledComponents2.default.div(_templateObject);

var InputWrapper = _styledComponents2.default.div(_templateObject2);

var PrefixWrapper = _styledComponents2.default.div(_templateObject3);

var SufixWrapper = _styledComponents2.default.div(_templateObject4);

var InputFieldGroup = function InputFieldGroup(_ref) {
    var children = _ref.children,
        prefix = _ref.prefix,
        sufix = _ref.sufix;
    return _react2.default.createElement(
        WrapperInputGroup,
        null,
        prefix && _react2.default.createElement(
            PrefixWrapper,
            null,
            prefix
        ),
        _react2.default.createElement(
            InputWrapper,
            null,
            children
        ),
        sufix && _react2.default.createElement(
            SufixWrapper,
            null,
            sufix
        )
    );
};

exports.default = InputFieldGroup;