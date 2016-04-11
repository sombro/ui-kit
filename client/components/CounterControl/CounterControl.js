import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './CounterControl.scss';

const CHANGE_DELAY = 300;

class CounterControl extends Component {

    static propTypes = {
        label   : PropTypes.string,
        value   : PropTypes.number,
        minValue: PropTypes.number,
        maxValue: PropTypes.number,
        onChange: PropTypes.func
    };

    static defaultProps = {
        value   : 0,
        minValue: 0,
        maxValue: 999
    };

    state = {
        value: this.props.value || this.props.minValue,
    };

    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentWillReceiveProps(nextProps) {

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

        this.setState({value});
        this.refs.control.value = value;
    }

    _startCounterChanging(delta, event) {
        event.stopPropagation();

        var value = Number.parseInt(this.refs.control.value);

        this._setValue(event, value + delta);

        this._counterChangingCallback = setTimeout(function () {
            this._startCounterChanging.call(this, delta, event);
        }.bind(this), CHANGE_DELAY);
    }

    _stopCounterChanging = (e) => {
        e.stopPropagation();
        if (this._counterChangingCallback) {
            clearTimeout(this._counterChangingCallback);
        }
    };

    _onChange = (event) => {
        this._setValue(event, event.target.value);
    };

    _onCLick = (event) => {
        event.stopPropagation();
    };

    _setValue = (event, v) => {
        var value = Number.parseInt(v, 10);

        if (!Number.isNaN(value)) {
            if (value <= this.props.minValue) {
                value = this.props.minValue;
            } else if (value >= this.props.maxValue) {
                value = this.props.maxValue;
            }

            if (this.props.onChange) {
                this.props.onChange.call(this, event, value);
            }
        } else  {
            // value = this.props.minValue;
        }

        this.setState({value});
        this.refs.control.value = value;
    };

    render() {
        const {value} = this.state;

        var minusClassName = classNames([
            'CounterControl-decreaseButton',
            {
                '-disabled': value <= this.props.minValue
            }
        ]);

        var plusClassName = classNames([
            'CounterControl-increaseButton',
            {
                '-disabled': value >= this.props.maxValue
            }
        ]);

        var label = null;
        if (this.props.label) label = <div className="CounterControl-label">{this.props.label}</div>;

        return (
            <div className="CounterControl">
                { label }
                <div className="CounterControl-counter">
                    <div className={minusClassName}
                         onMouseDown={this._startCounterChanging.bind(this, -1)}
                         onMouseUp={this._stopCounterChanging}
                         onMouseLeave={this._stopCounterChanging}
                        onClick={ this._onCLick }>
                        <InlineSVG src={require('!svg-inline!./minus.svg')}/>
                    </div>
                    <input className="CounterControl-control"
                           ref="control"
                           maxLength={this.props.maxValue.toString().length}
                           defaultValue={value}
                           type="number"
                           pattern="[0-9]*"
                           inputMode="numeric"
                           onChange={this._onChange}
                           onClick={ this._onCLick }/>

                    <div className={plusClassName}
                         onMouseDown={this._startCounterChanging.bind(this, 1)}
                         onMouseUp={this._stopCounterChanging}
                         onMouseLeave={this._stopCounterChanging}
                         onClick={ this._onCLick }>
                        <InlineSVG src={require('!svg-inline!./plus.svg')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CounterControl;
