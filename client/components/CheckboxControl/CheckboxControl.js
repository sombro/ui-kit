import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './CheckboxControl.scss';

class CheckboxControl extends Component {

    static propTypes = {
        label: PropTypes.string,
        subLabel: PropTypes.string,
        value: PropTypes.bool,
        onChange: PropTypes.func,
        stopClickCheckboxPropagation: PropTypes.bool,
        name: PropTypes.string,
    };

    static defaultProps = {
        label: '',
        subLabel: '',
        disabled: false,
        value: false,
        name: '',
        stopClickCheckboxPropagation: false,
    };

    state = {
        value: this.props.value
    };

    componentWillReceiveProps(newProps) {
        if (newProps.value !== this.props.value) {
            this.setState({value: newProps.value});
        }
    }

    _onChange = (event) => {
        if (this.props.onChange) {
            this.props.onChange(event, event.target.checked);
        }
    };

    _toggleValue = (event) => {
        if (this.props.stopClickCheckboxPropagation) {
            event.stopPropagation();
        }

        this.setState({value: !this.state.value});
    };

    render() {
        if (this.props.label) {
            var label = (
                <span className="CheckboxControl-label">
                    {this.props.label}
                </span>
            );

            if (this.props.subLabel) {
                label = (
                    <span className="CheckboxControl-label -sublabled">
                        {this.props.label}
                        <br/>
                        <span className="CheckboxControl-sublabel">
                            {this.props.subLabel}
                        </span>
                    </span>
                );
            }
        }

        var checkboxClass = classNames([
            'CheckboxControl',
            this.props.className
        ]);

        return (
            <label className={checkboxClass}>
                <input {...this.props}
                    className="CheckboxControl-input"
                    type="checkbox"
                    onChange={this._onChange}
                    onClick={this._toggleValue}
                    checked={this.state.value}
                    disabled={this.props.disabled}
                    name={this.props.name} />
                <div className="CheckboxControl-box" />
                {label}
            </label>
        );
    }

}

export default CheckboxControl;
