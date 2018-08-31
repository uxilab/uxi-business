'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  flex-direction: column;\n\n  & > *:first-child:before {\n    content: \'\';\n    display: block;\n    height: 16px;\n  }\n\n  & > *:after {\n    content: \'\';\n    display: block;\n    height: 16px;\n  }\n'], ['\n  flex-direction: column;\n\n  & > *:first-child:before {\n    content: \'\';\n    display: block;\n    height: 16px;\n  }\n\n  & > *:after {\n    content: \'\';\n    display: block;\n    height: 16px;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CompactSlide = require('uxi/internal/CompactSlide');

var _CompactSlide2 = _interopRequireDefault(_CompactSlide);

var _Flex = require('uxi/Layout/Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ExtendedFlex = _Flex2.default.extend(_templateObject);

var UserFeedbackContainer = function UserFeedbackContainer(_ref) {
  var children = _ref.children;

  var childArray = _react2.default.Children.map(children, function (child) {
    return child;
  });

  return _react2.default.createElement(
    _CompactSlide2.default,
    {
      anchor: 'top',
      direction: 'bottom',
      inAttr: _react2.default.Children.count(childArray) > 0
    },
    _react2.default.createElement(
      ExtendedFlex,
      null,
      childArray
    )
  );
};

exports.default = UserFeedbackContainer;