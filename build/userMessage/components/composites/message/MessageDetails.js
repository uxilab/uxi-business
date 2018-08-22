'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageDetails = function MessageDetails(_ref) {
  var message = _ref.message;
  return _react2.default.createElement(
    'div',
    { style: { marginTop: '6px' } },
    _react2.default.createElement(
      'div',
      { style: { fontSize: '12px', marginTop: '5px', marginBottom: '5px' } },
      _react2.default.createElement(_reactIntl.FormattedMessage, {
        id: 'module-error-supportInformation',
        defaultMessage: 'Message Detail'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: { fontSize: '12px', fontStyle: 'italic' } },
      message.message ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          message.message
        )
      ) : null,
      message.url ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactIntl.FormattedMessage, {
          id: 'module-error-urlTitle',
          defaultMessage: 'Url:'
        }),
        _react2.default.createElement(
          'span',
          { style: { marginLeft: '6px' } },
          message.url
        )
      ) : null,
      message.status ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactIntl.FormattedMessage, {
          id: 'module-error-statusTitle',
          defaultMessage: 'Status code:'
        }),
        _react2.default.createElement(
          'span',
          { style: { marginLeft: '6px' } },
          message.status
        )
      ) : null
    )
  );
};

exports.default = MessageDetails;