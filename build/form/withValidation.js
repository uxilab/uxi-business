'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ErrorWrapperUI = require('uxi/Input/utils/ErrorWrapperUI');

var _ErrorWrapperUI2 = _interopRequireDefault(_ErrorWrapperUI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withValidation = function withValidation(Input) {
    return function (props) {
        var error = props && props.meta && props.meta.touched && props.meta.error;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                { style: error ? { paddingBottom: '6px' } : {} },
                _react2.default.createElement(Input, props)
            ),
            error && _react2.default.createElement(
                _ErrorWrapperUI2.default,
                null,
                error
            )
        );
    };
};

exports.default = withValidation;