'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Slide = require('uxi/internal/Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Flex = require('uxi/Layout/Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserFeedbackContainer = function UserFeedbackContainer(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _Slide2.default,
    {
      anchor: 'top',
      direction: 'bottom',
      inAttr: true
    },
    _react2.default.createElement(
      _Flex2.default,
      { style: { maxWidth: '700px', minWidth: '700px', margin: '0 auto' } },
      children
    )
  );
};

exports.default = UserFeedbackContainer;