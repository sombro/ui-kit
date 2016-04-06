import React, {PropTypes} from 'react';
import classNames from 'classnames';
import blacklist from 'blacklist';
import ShallowCompare from 'react-addons-shallow-compare';

import './ButtonControl.scss';

const BUTTON_TYPES = [
    'crystal',
    'sand',
    'sky',
    'forest',
    'stone',
    'blackLink',
];

const BUTTON_SIZES = ['s', 'm'];

class ButtonControl extends React.Component {

    static propTypes = {
        className: React.PropTypes.string,
        href: React.PropTypes.string,
        component: React.PropTypes.node,
        size: React.PropTypes.oneOf(BUTTON_SIZES),
        view: React.PropTypes.oneOf(BUTTON_TYPES),
        leftIcon: React.PropTypes.any,
        rightIcon: React.PropTypes.any,
        shadow: React.PropTypes.bool,
    }

    static defaultProps = {
    	size: 's',
        view: 'sand',
        shadow: false,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return ShallowCompare(this, nextProps, nextState);
    }

    render() {

        // Classes
        var componentClass = classNames(
            'ButtonControl',
            'ButtonControl-' + this.props.view,
            (this.props.size ? 'ButtonControl-' + this.props.size : 'ButtonControl-s'),
            (this.props.shadow ? 'ButtonControl-shadow' : ''),
            this.props.className
        );

        // Props
        var props = blacklist(this.props, 'component', 'className');
        props.className = componentClass;

        if (this.props.component) {
            return React.cloneElement(this.props.component, props);
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

            children = [
                <div key="buttonText" className={`ButtonControl-text`}>
                    {children}
                </div>,
            ];

            if (props.leftIcon) {
                children.unshift(
                    <div key="icon1" className="ButtonControl-lefticon">
                        {props.leftIcon}
                    </div>
                );
            }

            if (props.rightIcon) {
                children.push(
                    <div key="icon2" className="ButtonControl-righticon">
                        {props.rightIcon}
                    </div>
                );
            }
        }

        return React.createElement(tag, props, children);
    }
}

export default ButtonControl;
