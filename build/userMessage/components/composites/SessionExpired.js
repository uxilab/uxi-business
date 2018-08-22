'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('uxi/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _Button = require('uxi/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SessionExpired = function (_Component) {
  _inherits(SessionExpired, _Component);

  function SessionExpired(props) {
    _classCallCheck(this, SessionExpired);

    var _this = _possibleConstructorReturn(this, (SessionExpired.__proto__ || Object.getPrototypeOf(SessionExpired)).call(this, props));

    _this.state = {
      countDown: 10
    };
    return _this;
  }

  _createClass(SessionExpired, [{
    key: 'deCrementCountDown',
    value: function deCrementCountDown() {
      var countDown = this.state.countDown;

      this.setState({
        countDown: countDown > 0 ? countDown - 1 : 0
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.deCrementCountDown();
      }, 1000);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      var onSessionExpired = this.props.onSessionExpired;
      var countDown = this.state.countDown;

      if (countDown === 1) {
        onSessionExpired();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var onSessionExpired = this.props.onSessionExpired;
      var countDown = this.state.countDown;


      return _react2.default.createElement(
        _Alert2.default,
        { isBanner: true, type: 'error' },
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'module-error-sessionExpiredExplanation' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'module-error-sessionExpiredcountDown', values: { value: countDown } }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'module-error-sessionExpriredNotWorry' }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_reactIntl.FormattedMessage, { id: 'module-error-sessionExpiredBringBackToCurrent' }),
        _react2.default.createElement(
          'div',
          { style: { marginTop: '12px' } },
          _react2.default.createElement(_Button2.default, {
            text: 'Log back in',
            type: 'primary',
            onClick: onSessionExpired
          })
        )
      );
    }
  }]);

  return SessionExpired;
}(_react.Component);

exports.default = SessionExpired;