import React from 'react';
import ReactDOM from 'react-dom';

// import ButtonControl from 'components/ButtonControl';
import {ButtonControl, CheckboxControl, SwitchControl} from '../library';
import './index.scss';

ReactDOM.render(
	<div className="UIKit">
		<h1>Dieses UI-Kit!</h1>
		<fieldset className="UIKit__buttons">
			<legend>Buttons</legend>
			<h3>Default</h3>
			<ButtonControl view="crystal">Button crystal</ButtonControl>
			<ButtonControl view="sand">Button sand</ButtonControl>
			<ButtonControl view="sky">Button sky</ButtonControl>
			<ButtonControl view="forest">Button forest</ButtonControl>
			<ButtonControl view="stone">Button stone</ButtonControl>
			<ButtonControl view="blackLink">Button blackLink</ButtonControl>
			<h3>With shadow</h3>
			<ButtonControl view="crystal" shadow={true}>Button crystal</ButtonControl>
			<ButtonControl view="sand" shadow={true}>Button sand</ButtonControl>
			<ButtonControl view="sky" shadow={true}>Button sky</ButtonControl>
			<ButtonControl view="forest" shadow={true}>Button forest</ButtonControl>
			<ButtonControl view="stone" shadow={true}>Button stone</ButtonControl>
			<ButtonControl view="blackLink" shadow={true}>Button blackLink</ButtonControl>
			<h3>Sizes</h3>
			<ButtonControl view="sand" size="s">Button sand S</ButtonControl>
			<ButtonControl view="sand" size="m">Button sand M</ButtonControl>
			<h3>Disabled</h3>
			<ButtonControl view="crystal" disabled>Button crystal</ButtonControl>
			<ButtonControl view="sand" disabled>Button sand</ButtonControl>
			<ButtonControl view="sky" disabled>Button sky</ButtonControl>
			<ButtonControl view="forest" disabled>Button forest</ButtonControl>
			<ButtonControl view="stone" disabled>Button stone</ButtonControl>
			<ButtonControl view="blackLink" disabled>Button blackLink</ButtonControl>
			<h3>With link</h3>
			<ButtonControl view="sand" href="#">Button sand</ButtonControl>
		</fieldset>
		<fieldset className="UIKit__checkboxes">
			<legend>Checkbox</legend>
			<h3>Default</h3>
			<CheckboxControl/>
			<CheckboxControl value={true}/>
			<CheckboxControl label="Checkbox label"/>
			<CheckboxControl label="Checkbox label" subLabel="Checkbox sublabel"/>
			<h3>Disabled</h3>
			<CheckboxControl disabled/>
			<CheckboxControl value={true} disabled/>
			<CheckboxControl label="Checkbox label" disabled/>
			<CheckboxControl label="Checkbox label" subLabel="Checkbox sublabel" disabled/>
		</fieldset>
		<fieldset className="UIKit__switches">
			<legend>Switch</legend>
			<h3>Default</h3>
			<SwitchControl/>
			<SwitchControl checked={true}/>
			<SwitchControl label="Switch label"/>
			<h3>Sizes</h3>
			<SwitchControl label="Switch label small" size="s"/>
			<SwitchControl label="Switch label medium" size="m"/>
			<SwitchControl label="Switch label large" size="l"/>
			<h3>Label position top</h3>
			<SwitchControl label="Switch label small" size="s" labelPos="top"/>
			<SwitchControl label="Switch label medium" size="m" labelPos="top"/>
			<SwitchControl label="Switch label large" size="l" labelPos="top"/>
			<h3>Disabled</h3>
			<SwitchControl disabled/>
			<SwitchControl checked={true} disabled/>
			<SwitchControl label="Switch label small" size="s" disabled/>
			<SwitchControl label="Switch label medium" size="m" disabled/>
			<SwitchControl label="Switch label large" size="l" disabled/>
		</fieldset>
	</div>,
	document.getElementById('root')
);
