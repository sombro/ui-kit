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

require('./RadioControl.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = function (_Component) {
	_inherits(RadioGroup, _Component);

	function RadioGroup() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, RadioGroup);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(RadioGroup)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
			checked: Object.keys(_this.props.groupAttributes).map(function (id) {
				return _this.props.groupAttributes[id].checked || false;
			})
		}, _this._onChange = function (event) {
			if (_this.props.onChange) {
				_this.props.onChange(event, event.target.value);
			}
		}, _this._onClick = function (event, id) {
			var newChecked = [];
			for (var i = 0; i < _this.state.checked.length; i++) {
				newChecked[i] = false;
			}
			newChecked[id] = true;
			_this.setState({ checked: newChecked });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	// exampleGroupAttributes = {
	// 	radio1: {
	// 		checked: false,
	// 		label: 'Label 1',
	// 		subLabel: 'Sublabel 1',
	// 		value: 'value1',
	// 	},
	// 	radio2: {
	// 		checked: false,
	// 		label: 'Label 2',
	// 		subLabel: 'Sublabel 2',
	// 		value: 'value2',
	// 	},
	// }

	_createClass(RadioGroup, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var RadioGroup = null;
			var i = -1;
			RadioGroup = Object.keys(this.props.groupAttributes).map(function (id) {
				i++;
				return _react2.default.createElement(RadioControl, _extends({}, _this2.props, {
					key: id,
					radioId: i,
					name: _this2.props.name,
					label: _this2.props.groupAttributes[id].label || '',
					subLabel: _this2.props.groupAttributes[id].subLabel || '',
					value: _this2.props.groupAttributes[id].value || '',
					onChange: _this2._onChange,
					onClick: _this2._onClick,
					checked: _this2.state.checked[i] }));
			});

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)(['RadioGroup', this.props.className]) },
				RadioGroup
			);
		}
	}]);

	return RadioGroup;
}(_react.Component);

RadioGroup.propTypes = {
	name: _react.PropTypes.string.isRequired,
	groupAttributes: _react.PropTypes.object.isRequired,
	onChange: _react.PropTypes.func
};
RadioGroup.defaultProps = {
	name: '',
	groupAttributes: {
		radio1: {
			checked: false,
			label: '',
			subLabel: '',
			value: ''
		}
	}
};

var RadioControl = function (_Component2) {
	_inherits(RadioControl, _Component2);

	function RadioControl() {
		var _Object$getPrototypeO2;

		var _temp2, _this3, _ret2;

		_classCallCheck(this, RadioControl);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_Object$getPrototypeO2 = Object.getPrototypeOf(RadioControl)).call.apply(_Object$getPrototypeO2, [this].concat(args))), _this3), _this3._onChange = function (event) {
			if (_this3.props.onChange) {
				_this3.props.onChange(event, event.target.value);
			}
		}, _this3._onClick = function (event) {
			if (_this3.props.onClick) {
				_this3.props.onClick(event, _this3.props.radioId);
			}
		}, _temp2), _possibleConstructorReturn(_this3, _ret2);
	}

	_createClass(RadioControl, [{
		key: 'render',
		value: function render() {
			if (this.props.label) {
				var sublabel = '';
				if (this.props.subLabel) {
					sublabel = _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement('br', null),
						_react2.default.createElement(
							'span',
							{ className: 'RadioControl-sublabel' },
							this.props.subLabel
						)
					);
				}

				var label = _react2.default.createElement(
					'span',
					{ className: 'RadioControl-label' },
					this.props.label,
					sublabel
				);
			}

			return _react2.default.createElement(
				'label',
				{ className: 'RadioControl' },
				_react2.default.createElement('input', _extends({}, this.props, {
					className: 'RadioControl-input',
					type: 'radio',
					onChange: this._onChange,
					onClick: this._onClick,
					value: this.props.value,
					checked: this.props.checked,
					name: this.props.name })),
				_react2.default.createElement('div', { className: 'RadioControl-box' }),
				label
			);
		}
	}]);

	return RadioControl;
}(_react.Component);

RadioControl.propTypes = {
	label: _react.PropTypes.string,
	subLabel: _react.PropTypes.string,
	value: _react.PropTypes.string,
	name: _react.PropTypes.string,
	checked: _react.PropTypes.bool,
	onChange: _react.PropTypes.func,
	onClick: _react.PropTypes.func
};
RadioControl.defaultProps = {
	label: '',
	subLabel: '',
	value: '',
	name: '',
	checked: false
};
exports.default = RadioGroup;
module.exports = exports['default'];