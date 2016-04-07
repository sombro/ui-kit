'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lang = require('lang');

var _api = require('api');

require('./InputControl.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPE = ['text', 'password', 'number', 'email'];
var SIZE = [];
var TEXTALIGN = ['right', 'center', 'left'];
var LABEL_SIZE = ['small', 'normal'];

var InputControl = function (_Component) {
    _inherits(InputControl, _Component);

    function InputControl(props) {
        _classCallCheck(this, InputControl);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputControl).call(this, props));

        _this.state = {
            helpMail: ''
        };

        _this._onChange = function (event, value) {
            _this._hideHelpMail();
            if (!value) {
                value = event.target.value;
            }
            if (_this.props.onChange) {
                _this.props.onChange(event, value);
            }
        };

        _this._checkMail = function (event) {
            if (event.target.value) {
                (0, _api.getHelpMail)(event.target.value).then(function (data) {
                    if (data.meta.code === 200 && data.response.suggestions) {
                        _this.setState({ helpMail: data.response.suggestions[0].full });
                    } else {
                        return false;
                    }
                }).catch(function (error) {
                    console.error(error);
                    throw error;
                });
            }

            if (_this.props.onBlur) {
                _this.props.onBlur(event);
            }
        };

        _this._changeMail = function () {
            _this._onChange(null, _this.state.helpMail);
            _this._hideHelpMail();
        };

        _this._hideHelpMail = function () {
            _this.setState({ helpMail: '' });
        };

        _this.state = {
            filled: false
        };
        return _this;
    }

    _createClass(InputControl, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var className = _props.className;

            var props = _objectWithoutProperties(_props, ['className']);

            className = (0, _classnames2.default)('InputControl', (_classNames = {
                'InputControl--multiline': props.multiline
            }, _defineProperty(_classNames, 'InputControl--' + props.size, props.size), _defineProperty(_classNames, '-success', props.success), _defineProperty(_classNames, '-error', props.error), _classNames), className);

            var inputClassName;
            inputClassName = (0, _classnames2.default)('InputControl-control', _defineProperty({}, 'InputControl-control--' + props.textalign, props.textalign), inputClassName);

            var inputControl;
            if (props.htmlType === 'email') {
                inputControl = _react2.default.createElement('input', _extends({}, props, {
                    type: this.props.htmlType,
                    className: inputClassName,
                    placeholder: props.placeholder,
                    onChange: this._onChange,
                    onBlur: this._checkMail,
                    ref: this.props.inputRef }));
            } else {
                inputControl = _react2.default.createElement('input', _extends({}, props, {
                    type: this.props.htmlType,
                    className: inputClassName,
                    placeholder: props.placeholder,
                    onChange: this._onChange,
                    ref: this.props.inputRef }));
            }

            var helpMessage;
            if (props.htmlType === 'email' && this.state.helpMail) {
                helpMessage = _react2.default.createElement(
                    'div',
                    { className: 'InputControl-help' },
                    _react2.default.createElement(
                        'span',
                        { className: 'InputControl-helpText' },
                        'Может быть, Вы имели в виду',
                        _react2.default.createElement(
                            'span',
                            { className: 'InputControl-helpMail' },
                            ' ',
                            (0, _lang.translate)(this.state.helpMail)
                        ),
                        '?'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'InputControl-helpYes',
                            onClick: this._changeMail },
                        'Да, исправить.'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'InputControl-helpNo',
                            onClick: this._hideHelpMail },
                        'Нет, оставить как есть.'
                    )
                );
            }

            var errorMessage;
            if (props.error) {
                errorMessage = _react2.default.createElement(
                    'div',
                    { className: 'InputControl-error' },
                    (0, _lang.translate)(props.error)
                );
            }

            if (props.label) {

                var star = '';
                if (props.required) {
                    star = _react2.default.createElement(
                        'span',
                        { className: 'InputControl-label-required' },
                        '*'
                    );
                }

                var label = _react2.default.createElement(
                    'label',
                    { className: (0, _classnames2.default)(['InputControl-label', 'InputControl-label--' + this.props.labelSize]),
                        htmlFor: props.id },
                    props.label,
                    ' ',
                    star
                );
            }

            return _react2.default.createElement(
                'div',
                { className: className },
                label,
                inputControl,
                helpMessage,
                errorMessage
            );
        }
    }]);

    return InputControl;
}(_react.Component);

InputControl.propTypes = {
    htmlType: _react.PropTypes.oneOf(TYPE),
    placeholder: _react.PropTypes.string,
    size: _react.PropTypes.oneOf(SIZE),
    textalign: _react.PropTypes.oneOf(TEXTALIGN),
    label: _react.PropTypes.string,
    labelSize: _react.PropTypes.oneOf(LABEL_SIZE),
    onChange: _react.PropTypes.func,
    id: _react.PropTypes.string,
    inputRef: _react.PropTypes.string,
    success: _react.PropTypes.bool,
    error: _react.PropTypes.string,
    required: _react.PropTypes.bool
};
InputControl.defaultProps = {
    htmlType: 'text',
    textalign: 'left',
    label_size: 'normal',
    id: (0, _lodash.uniqueId)(),
    inputRef: '',
    required: false,
    success: false,
    error: ''
};
exports.default = InputControl;
module.exports = exports['default'];