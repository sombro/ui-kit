'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

require('./ButtonControl.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BUTTON_TYPES = ['crystal', 'sand', 'sky', 'forest', 'stone', 'blackLink'];

var BUTTON_SIZES = ['s', 'm'];

var ButtonControl = function (_React$Component) {
    _inherits(ButtonControl, _React$Component);

    function ButtonControl() {
        _classCallCheck(this, ButtonControl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonControl).apply(this, arguments));
    }

    _createClass(ButtonControl, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
        }
    }, {
        key: 'render',
        value: function render() {

            // Classes
            var componentClass = (0, _classnames2.default)('ButtonControl', 'ButtonControl-' + this.props.view, this.props.size ? 'ButtonControl-' + this.props.size : 'ButtonControl-s', this.props.shadow ? 'ButtonControl-shadow' : '', this.props.className);

            // Props
            var props = (0, _blacklist2.default)(this.props, 'component', 'className');
            props.className = componentClass;

            if (this.props.component) {
                return _react2.default.cloneElement(this.props.component, props);
            }

            // Detect tag
            var tag = 'button';
            if (props.href) {
                tag = 'a';
                delete props.type;
            }

            var children = this.props.children;

            // Detect icons
            if ((props.leftIcon || props.rightIcon) && typeof this.props.children === 'string') {

                children = [_react2.default.createElement(
                    'div',
                    { key: 'buttonText', className: 'ButtonControl-text' },
                    children
                )];

                if (props.leftIcon) {
                    children.unshift(_react2.default.createElement(
                        'div',
                        { key: 'icon1', className: 'ButtonControl-lefticon' },
                        props.leftIcon
                    ));
                }

                if (props.rightIcon) {
                    children.push(_react2.default.createElement(
                        'div',
                        { key: 'icon2', className: 'ButtonControl-righticon' },
                        props.rightIcon
                    ));
                }
            }

            return _react2.default.createElement(tag, props, children);
        }
    }]);

    return ButtonControl;
}(_react2.default.Component);

ButtonControl.propTypes = {
    className: _react2.default.PropTypes.string,
    href: _react2.default.PropTypes.string,
    component: _react2.default.PropTypes.node,
    size: _react2.default.PropTypes.oneOf(BUTTON_SIZES),
    view: _react2.default.PropTypes.oneOf(BUTTON_TYPES),
    leftIcon: _react2.default.PropTypes.any,
    rightIcon: _react2.default.PropTypes.any,
    shadow: _react2.default.PropTypes.bool
};
ButtonControl.defaultProps = {
    size: 's',
    view: 'sand',
    shadow: false
};
exports.default = ButtonControl;
module.exports = exports['default'];