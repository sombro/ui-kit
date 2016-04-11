'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _svgInlineReact = require('svg-inline-react');

var _svgInlineReact2 = _interopRequireDefault(_svgInlineReact);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

require('./CounterControl.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CHANGE_DELAY = 300;

var CounterControl = function (_Component) {
    _inherits(CounterControl, _Component);

    function CounterControl(props) {
        _classCallCheck(this, CounterControl);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CounterControl).call(this, props));

        _this.state = {
            value: _this.props.value || _this.props.minValue
        };

        _this._stopCounterChanging = function (e) {
            e.stopPropagation();
            if (_this._counterChangingCallback) {
                clearTimeout(_this._counterChangingCallback);
            }
        };

        _this._onChange = function (event) {
            _this._setValue(event, event.target.value);
        };

        _this._onCLick = function (event) {
            event.stopPropagation();
        };

        _this._setValue = function (event, v) {
            var value = Number.parseInt(v, 10);

            if (!Number.isNaN(value)) {
                if (value <= _this.props.minValue) {
                    value = _this.props.minValue;
                } else if (value >= _this.props.maxValue) {
                    value = _this.props.maxValue;
                }

                if (_this.props.onChange) {
                    _this.props.onChange.call(_this, event, value);
                }
            } else {
                // value = this.props.minValue;
            }

            _this.setState({ value: value });
            _this.refs.control.value = value;
        };

        _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
        return _this;
    }

    _createClass(CounterControl, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {

            var v = nextProps.value;

            var value = Number.parseInt(v, 10);

            if (!Number.isNaN(value)) {
                if (value <= this.props.minValue) {
                    value = this.props.minValue;
                } else if (value >= this.props.maxValue) {
                    value = this.props.maxValue;
                }
            } else {
                value = this.props.minValue;
            }

            this.setState({ value: value });
            this.refs.control.value = value;
        }
    }, {
        key: '_startCounterChanging',
        value: function _startCounterChanging(delta, event) {
            event.stopPropagation();

            var value = Number.parseInt(this.refs.control.value);

            this._setValue(event, value + delta);

            this._counterChangingCallback = setTimeout(function () {
                this._startCounterChanging.call(this, delta, event);
            }.bind(this), CHANGE_DELAY);
        }
    }, {
        key: 'render',
        value: function render() {
            var value = this.state.value;


            var minusClassName = (0, _classnames2.default)(['CounterControl-decreaseButton', {
                '-disabled': value <= this.props.minValue
            }]);

            var plusClassName = (0, _classnames2.default)(['CounterControl-increaseButton', {
                '-disabled': value >= this.props.maxValue
            }]);

            var label = null;
            if (this.props.label) label = _react2.default.createElement(
                'div',
                { className: 'CounterControl-label' },
                this.props.label
            );

            return _react2.default.createElement(
                'div',
                { className: 'CounterControl' },
                label,
                _react2.default.createElement(
                    'div',
                    { className: 'CounterControl-counter' },
                    _react2.default.createElement(
                        'div',
                        { className: minusClassName,
                            onMouseDown: this._startCounterChanging.bind(this, -1),
                            onMouseUp: this._stopCounterChanging,
                            onMouseLeave: this._stopCounterChanging,
                            onClick: this._onCLick },
                        _react2.default.createElement(_svgInlineReact2.default, { src: require('!svg-inline!./minus.svg') })
                    ),
                    _react2.default.createElement('input', { className: 'CounterControl-control',
                        ref: 'control',
                        maxLength: this.props.maxValue.toString().length,
                        defaultValue: value,
                        type: 'number',
                        pattern: '[0-9]*',
                        inputMode: 'numeric',
                        onChange: this._onChange,
                        onClick: this._onCLick }),
                    _react2.default.createElement(
                        'div',
                        { className: plusClassName,
                            onMouseDown: this._startCounterChanging.bind(this, 1),
                            onMouseUp: this._stopCounterChanging,
                            onMouseLeave: this._stopCounterChanging,
                            onClick: this._onCLick },
                        _react2.default.createElement(_svgInlineReact2.default, { src: require('!svg-inline!./plus.svg') })
                    )
                )
            );
        }
    }]);

    return CounterControl;
}(_react.Component);

CounterControl.propTypes = {
    label: _react.PropTypes.string,
    value: _react.PropTypes.number,
    minValue: _react.PropTypes.number,
    maxValue: _react.PropTypes.number,
    onChange: _react.PropTypes.func
};
CounterControl.defaultProps = {
    value: 0,
    minValue: 0,
    maxValue: 999
};
exports.default = CounterControl;
module.exports = exports['default'];