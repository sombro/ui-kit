import React from 'react';
import classNames from 'classnames';

import './SwitchControl.scss';

const BUTTON_SIZES = ['s', 'm', 'l'];
const LABEL_POS = ['top', 'middle'];

class SwitchControl extends React.Component {

    static propTypes = {
        size: React.PropTypes.oneOf(BUTTON_SIZES),
        labelPos: React.PropTypes.oneOf(LABEL_POS),
        className: React.PropTypes.string,
        checked: React.PropTypes.bool,
        label: React.PropTypes.string,
        name: React.PropTypes.string,
    }

    static defaultProps = {
    	size: 'm',
    	labelPos: 'middle',
        checked: false,
        label: '',
        name: '',
    }

    state = {
        checked: this.props.checked,
    }

    componentWillReceiveProps(newProps) {
        if (newProps.checked !== this.props.checked) {
            this.setState({checked: newProps.checked});
        }
    }

    _switchCheck() {
        this.setState({checked: !this.state.checked});
    }

    _onChange(event) {
        this._switchCheck();
        if (this.props.onChange) {
            this.props.onChange.call(this, event, event.target.checked);
        }
    }

    render() {

        var sizeLabelClass = `SwitchControl-label--${this.props.size}`;
        var posLabelClass = `SwitchControl-label--${this.props.labelPos}`;
        var mainPosClass = `SwitchControl--${this.props.labelPos}`;

        if (this.props.label) {
            var labelClass = classNames(
                'SwitchControl-label',
                sizeLabelClass,
                posLabelClass
            );
            var label = (
                <span className={labelClass}>
                    {this.props.label}
                </span>
            );
        }

        var mainClasses = classNames(
            'SwitchControl',
            mainPosClass,
            this.props.className ? this.props.className : ''
        );

        return (
            <label className={mainClasses}>
                <input {...this.props}
                	className="SwitchControl-input"
                    type="checkbox"
                    onChange={this._onChange.bind(this)}
                    checked={this.state.checked}
                    name={this.props.name} />
                {label && this.props.labelPos === 'top' ? label : ''}
                <div className="SwitchControl-buttonwrapper">
                    <span className="SwitchControl-track"></span>
                    <span className="SwitchControl-button"></span>
                </div>
                {label && this.props.labelPos === 'middle' ? label : ''}
                {this.props.children}
            </label>
        );
    }

}

export default SwitchControl;
