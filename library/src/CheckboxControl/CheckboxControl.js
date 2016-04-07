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

require('./CheckboxControl.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckboxControl = function (_Component) {
    _inherits(CheckboxControl, _Component);

    function CheckboxControl() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, CheckboxControl);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CheckboxControl)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
            value: _this.props.value
        }, _this._onChange = function (event) {
            if (_this.props.onChange) {
                _this.props.onChange(event, event.target.checked);
            }
        }, _this._toggleValue = function (event) {
            if (_this.props.stopClickCheckboxPropagation) {
                event.stopPropagation();
            }

            _this.setState({ value: !_this.state.value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CheckboxControl, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            if (newProps.value !== this.props.value) {
                this.setState({ value: newProps.value });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.label) {
                var label = _react2.default.createElement(
                    'span',
                    { className: 'CheckboxControl-label' },
                    this.props.label
                );

                if (this.props.subLabel) {
                    label = _react2.default.createElement(
                        'span',
                        { className: 'CheckboxControl-label -sublabled' },
                        this.props.label,
                        _react2.default.createElement('br', null),
                        _react2.default.createElement(
                            'span',
                            { className: 'CheckboxControl-sublabel' },
                            this.props.subLabel
                        )
                    );
                }
            }

            var checkboxClass = (0, _classnames2.default)(['CheckboxControl', this.props.className]);

            return _react2.default.createElement(
                'label',
                { className: checkboxClass },
                _react2.default.createElement('input', _extends({}, this.props, {
                    className: 'CheckboxControl-input',
                    type: 'checkbox',
                    onChange: this._onChange,
                    onClick: this._toggleValue,
                    checked: this.state.value,
                    disabled: this.props.disabled,
                    name: this.props.name })),
                _react2.default.createElement('div', { className: 'CheckboxControl-box' }),
                label
            );
        }
    }]);

    return CheckboxControl;
}(_react.Component);

CheckboxControl.propTypes = {
    label: _react.PropTypes.string,
    subLabel: _react.PropTypes.string,
    value: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    stopClickCheckboxPropagation: _react.PropTypes.bool,
    name: _react.PropTypes.string
};
CheckboxControl.defaultProps = {
    label: '',
    subLabel: '',
    disabled: false,
    value: false,
    name: '',
    stopClickCheckboxPropagation: false
};
exports.default = CheckboxControl;
module.exports = exports['default'];