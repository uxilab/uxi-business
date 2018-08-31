'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

var _Alert = require('uxi/Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _ShowMoreDetails = require('./ShowMoreDetails');

var _ShowMoreDetails2 = _interopRequireDefault(_ShowMoreDetails);

var _MessageTitle = require('./MessageTitle');

var _MessageTitle2 = _interopRequireDefault(_MessageTitle);

var _AllMessageDetails = require('./AllMessageDetails');

var _AllMessageDetails2 = _interopRequireDefault(_AllMessageDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultipleMessage = function (_Component) {
  _inherits(MultipleMessage, _Component);

  function MultipleMessage(props) {
    _classCallCheck(this, MultipleMessage);

    var _this = _possibleConstructorReturn(this, (MultipleMessage.__proto__ || Object.getPrototypeOf(MultipleMessage)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      showMore: false
    };
    return _this;
  }

  _createClass(MultipleMessage, [{
    key: 'toggle',
    value: function toggle() {
      var showMore = this.state.showMore;


      this.setState({
        showMore: !showMore
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultTitle = _props.defaultTitle,
          defaultExplanation = _props.defaultExplanation,
          onClose = _props.onClose,
          extra = _props.extra,
          type = _props.type,
          messages = _props.messages;
      var showMore = this.state.showMore;


      return _react2.default.createElement(
        _Alert2.default,
        {
          onClose: onClose,
          showClose: true,
          style: { fontSize: '14px', minWidth: '280px', width: '400px', maxWidth: '680px' },
          type: type
        },
        _react2.default.createElement(
          _MessageTitle2.default,
          null,
          defaultTitle
        ),
        _react2.default.createElement(
          'div',
          null,
          defaultExplanation
        ),
        extra && _react2.default.createElement(
          'div',
          null,
          extra
        ),
        _react2.default.createElement(_ShowMoreDetails2.default, {
          showMore: showMore,
          toggle: this.toggle
        }),
        showMore ? _react2.default.createElement(
          'div',
          { style: { marginTop: '12px' } },
          _react2.default.createElement(_AllMessageDetails2.default, {
            messages: messages
          })
        ) : null
      );
    }
  }]);

  return MultipleMessage;
}(_react.Component);

exports.default = MultipleMessage;