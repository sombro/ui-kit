import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import './RadioControl.scss';

class RadioGroup extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		groupAttributes: PropTypes.object.isRequired,
		onChange: PropTypes.func
	};

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

	static defaultProps = {
		name: '',
		groupAttributes: {
			radio1: {
				checked: false,
				label: '',
				subLabel: '',
				value: '',
			},
		}
	};

	state = {
		checked: Object.keys(this.props.groupAttributes).map(id => {
			return(this.props.groupAttributes[id].checked || false);
		}),
	}

	_onChange = (event) => {
		if (this.props.onChange) {
			this.props.onChange(event, event.target.value);
		}
	}

	_onClick = (event, id) => {
		var newChecked = [];
		for (var i = 0; i < this.state.checked.length; i++) {
			newChecked[i] = false;
		}
		newChecked[id] = true;
		this.setState({checked: newChecked});
	}

	render() {
		var RadioGroup = null;
		var i = -1;
		RadioGroup = Object.keys(this.props.groupAttributes).map(id => {
			i++;
			return (
				<RadioControl {...this.props}
					key={id}
					radioId={i}
					name={ this.props.name }
					label={ this.props.groupAttributes[id].label || '' }
					subLabel={ this.props.groupAttributes[id].subLabel || '' }
					value={ this.props.groupAttributes[id].value || '' }
					onChange={ this._onChange }
					onClick={ this._onClick }
					checked={ this.state.checked[i] }/>
			)
		});

		return(
			<div className={classNames([
					'RadioGroup',
					this.props.className
				])}>
				{ RadioGroup }
			</div>
		);
	}
}

class RadioControl extends Component {

	static propTypes = {
		label: PropTypes.string,
		subLabel: PropTypes.string,
		value: PropTypes.string,
		name: PropTypes.string,
		checked: PropTypes.bool,
		onChange: PropTypes.func,
		onClick: PropTypes.func,
	};

	static defaultProps = {
		label: '',
		subLabel: '',
		value: '',
		name: '',
		checked: false,
	};

	_onChange = (event) => {
		if (this.props.onChange) {
			this.props.onChange(event, event.target.value);
		}
	};

	_onClick = (event) => {
		if (this.props.onClick) {
			this.props.onClick(event, this.props.radioId);
		}
	};

	render() {
		if (this.props.label) {
			var sublabel = '';
			if (this.props.subLabel) {
				sublabel = (
					<span>
						<br/>
						<span className="RadioControl-sublabel">
							{this.props.subLabel}
						</span>
					</span>
				);
			}

			var label = (
				<span className="RadioControl-label">
					{this.props.label}
					{sublabel}
				</span>
			);
		}

		return (
			<label className="RadioControl">
				<input {...this.props}
					className="RadioControl-input"
					type="radio"
					onChange={ this._onChange }
					onClick={ this._onClick }
					value={ this.props.value }
					checked={ this.props. checked }
					name={ this.props.name }/>
				<div className="RadioControl-box"></div>
				{label}
			</label>
		);
	}
}

export default RadioGroup;
