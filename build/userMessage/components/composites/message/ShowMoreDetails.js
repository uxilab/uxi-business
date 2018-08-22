'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowMoreDetails = function ShowMoreDetails(_ref) {
  var toggle = _ref.toggle,
      showMore = _ref.showMore;
  return _react2.default.createElement(
    'div',
    { style: { marginTop: '16px' } },
    _react2.default.createElement(
      'a',
      { onClick: toggle },
      showMore ? _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-hideDetails',
        defaultMessage: 'Hide details'
      }) : _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-showMoreDetails',
        defaultMessage: 'Show more details'
      })
    )
  );
};

exports.default = ShowMoreDetails;