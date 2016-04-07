import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import { uniqueId } from 'lodash';

import { translate as t } from 'lang';
import { getHelpMail } from 'api';

import './InputControl.scss';

const TYPE = ['text', 'password', 'number', 'email'];
const SIZE = [];
const TEXTALIGN = ['right', 'center', 'left'];
const LABEL_SIZE = ['small', 'normal'];

class InputControl extends Component {

    static propTypes = {
        htmlType: PropTypes.oneOf(TYPE),
        placeholder: PropTypes.string,
        size: PropTypes.oneOf(SIZE),
        textalign: PropTypes.oneOf(TEXTALIGN),
        label: PropTypes.string,
        labelSize: PropTypes.oneOf(LABEL_SIZE),
        onChange: PropTypes.func,
        id: PropTypes.string,
        inputRef: PropTypes.string,
        success: PropTypes.bool,
        error: PropTypes.string,
        required: PropTypes.bool,
    };

    static defaultProps = {
        htmlType: 'text',
        textalign: 'left',
        label_size: 'normal',
        id: uniqueId(),
        inputRef: '',
        required: false,
        success: false,
        error: '',
    };

    state = {
        helpMail: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            filled: false
        };
    }

    _onChange = (event, value) => {
        this._hideHelpMail();
        if (!value) {
            value = event.target.value;
        }
        if (this.props.onChange) {
            this.props.onChange(event, value);
        }
    };


    _checkMail = (event) => {
        if (event.target.value) {
            getHelpMail(event.target.value).then(data => {
                if (data.meta.code === 200 && data.response.suggestions) {
                    this.setState({helpMail: data.response.suggestions[0].full});
                } else {
                    return false;
                }
            })
            .catch(error => {
                console.error(error);
                throw error;
            });
        }

        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };

    _changeMail = () => {
        this._onChange(null, this.state.helpMail);
        this._hideHelpMail();
    };

    _hideHelpMail = () => {
        this.setState({helpMail: ''});
    };

    render() {
        var {className, ...props} = this.props;
        className = classNames(
            'InputControl',
            {
                'InputControl--multiline': props.multiline,
                [`InputControl--${props.size}`]: props.size,
                '-success': props.success,
                '-error': props.error
            },
            className
        );

        var inputClassName;
        inputClassName = classNames(
            'InputControl-control',
            {
                [`InputControl-control--${props.textalign}`]: props.textalign
            },
            inputClassName
        );

        var inputControl;
        if (props.htmlType === 'email'){
            inputControl = (
                <input {...props}
                    type={this.props.htmlType}
                    className={inputClassName}
                    placeholder={props.placeholder}
                    onChange={this._onChange}
                    onBlur={this._checkMail}
                    ref={this.props.inputRef}/>
            );
        } else {
            inputControl = (
                <input {...props}
                    type={this.props.htmlType}
                    className={inputClassName}
                    placeholder={props.placeholder}
                    onChange={this._onChange}
                    ref={this.props.inputRef}/>
            );
        }

        var helpMessage;
        if (props.htmlType === 'email' && this.state.helpMail) {
            helpMessage = (
                <div className="InputControl-help">
                    <span className="InputControl-helpText">
                        Может быть, Вы имели в виду
                        <span className="InputControl-helpMail"> {t(this.state.helpMail)}</span>
                        ?
                    </span>
                    <span className="InputControl-helpYes"
                        onClick={this._changeMail}>
                        Да,&nbsp;исправить.
                    </span>
                    <span className="InputControl-helpNo"
                        onClick={this._hideHelpMail}>
                        Нет,&nbsp;оставить&nbsp;как&nbsp;есть.
                    </span>
                </div>
            );
        }

        var errorMessage;
        if (props.error) {
            errorMessage = (
                <div className="InputControl-error">
                    {t(props.error)}
                </div>
            );
        }


        if (props.label) {

            var star = '';
            if (props.required) {
                star = (<span className="InputControl-label-required">*</span>);
            }

            var label = (
                <label className={classNames([
                                    'InputControl-label',
                                    'InputControl-label--' + this.props.labelSize,
                                ])}
                    htmlFor={props.id}>
                    {props.label} {star}
                </label>
            );
        }

        return (
            <div className={className}>
                {label}
                {inputControl}
                {helpMessage}
                {errorMessage}
            </div>
        );
    }

}

export default InputControl;
