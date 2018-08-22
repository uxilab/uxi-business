'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatchErrorComponent = function (_Component) {
  _inherits(CatchErrorComponent, _Component);

  function CatchErrorComponent(props) {
    _classCallCheck(this, CatchErrorComponent);

    var _this = _possibleConstructorReturn(this, (CatchErrorComponent.__proto__ || Object.getPrototypeOf(CatchErrorComponent)).call(this, props));

    _this.state = {
      error: null
    };
    return _this;
  }

  _createClass(CatchErrorComponent, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error) {
      var log = this.props.log;


      log(error);

      this.setState({
        error: error
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var error = this.state.error;


      if (error) {
        return _react2.default.createElement(DefaultErrorMessage, {
          error: error
        });
      }

      return _react2.default.createElement(
        'div',
        null,
        children
      );
    }
  }]);

  return CatchErrorComponent;
}(Component);

exports.default = CatchErrorComponent;