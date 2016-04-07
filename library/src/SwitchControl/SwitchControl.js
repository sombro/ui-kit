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

require('./SwitchControl.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUTTON_SIZES = ['s', 'm', 'l'];
var LABEL_POS = ['top', 'middle'];

var SwitchControl = function (_React$Component) {
    _inherits(SwitchControl, _React$Component);

    function SwitchControl() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, SwitchControl);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SwitchControl)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            checked: _this.props.checked
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SwitchControl, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.checked !== this.props.checked) {
                this.setState({ checked: newProps.checked });
            }
        }
    }, {
        key: '_switchCheck',
        value: function _switchCheck() {
            this.setState({ checked: !this.state.checked });
        }
    }, {
        key: '_onChange',
        value: function _onChange(event) {
            this._switchCheck();
            if (this.props.onChange) {
                this.props.onChange.call(this, event, event.target.checked);
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var sizeLabelClass = 'SwitchControl-label--' + this.props.size;
            var posLabelClass = 'SwitchControl-label--' + this.props.labelPos;
            var mainPosClass = 'SwitchControl--' + this.props.labelPos;

            if (this.props.label) {
                var labelClass = (0, _classnames2.default)('SwitchControl-label', sizeLabelClass, posLabelClass);
                var label = _react2.default.createElement(
                    'span',
                    { className: labelClass },
                    this.props.label
                );
            }

            var mainClasses = (0, _classnames2.default)('SwitchControl', mainPosClass, this.props.className ? this.props.className : '');

            return _react2.default.createElement(
                'label',
                { className: mainClasses },
                _react2.default.createElement('input', _extends({}, this.props, {
                    className: 'SwitchControl-input',
                    type: 'checkbox',
                    onChange: this._onChange.bind(this),
                    checked: this.state.checked,
                    name: this.props.name })),
                label && this.props.labelPos === 'top' ? label : '',
                _react2.default.createElement(
                    'div',
                    { className: 'SwitchControl-buttonwrapper' },
                    _react2.default.createElement('span', { className: 'SwitchControl-track' }),
                    _react2.default.createElement('span', { className: 'SwitchControl-button' })
                ),
                label && this.props.labelPos === 'middle' ? label : '',
                this.props.children
            );
        }
    }]);

    return SwitchControl;
}(_react2.default.Component);

SwitchControl.propTypes = {
    size: _react2.default.PropTypes.oneOf(BUTTON_SIZES),
    labelPos: _react2.default.PropTypes.oneOf(LABEL_POS),
    className: _react2.default.PropTypes.string,
    checked: _react2.default.PropTypes.bool,
    label: _react2.default.PropTypes.string,
    name: _react2.default.PropTypes.string
};
SwitchControl.defaultProps = {
    size: 'm',
    labelPos: 'middle',
    checked: false,
    label: '',
    name: ''
};
exports.default = SwitchControl;
module.exports = exports['default'];