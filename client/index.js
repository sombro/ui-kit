import React from 'react';
import ReactDOM from 'react-dom';

import ButtonControl from 'components/ButtonControl';

ReactDOM.render(
	<div>
		<h1>Dieses UI-Kit!</h1>
		<fieldset>
			<legend>Buttons</legend>
			<h3>Default</h3>
			<ButtonControl view="crystal">Кнопочка crystal</ButtonControl>
			<ButtonControl view="sand">Кнопочка sand</ButtonControl>
			<ButtonControl view="sky">Кнопочка sky</ButtonControl>
			<ButtonControl view="forest">Кнопочка forest</ButtonControl>
			<ButtonControl view="stone">Кнопочка stone</ButtonControl>
			<ButtonControl view="blackLink">Кнопочка blackLink</ButtonControl>
			<h3>With shadow</h3>
			<ButtonControl view="crystal" shadow={true}>Кнопочка crystal</ButtonControl>
			<ButtonControl view="sand" shadow={true}>Кнопочка sand</ButtonControl>
			<ButtonControl view="sky" shadow={true}>Кнопочка sky</ButtonControl>
			<ButtonControl view="forest" shadow={true}>Кнопочка forest</ButtonControl>
			<ButtonControl view="stone" shadow={true}>Кнопочка stone</ButtonControl>
			<ButtonControl view="blackLink" shadow={true}>Кнопочка blackLink</ButtonControl>
			<h3>Sizes</h3>
			<ButtonControl view="sand" size="s">Кнопочка sand S</ButtonControl>
			<ButtonControl view="sand" size="m">Кнопочка sand M</ButtonControl>
			<h3>Disabled</h3>
			<ButtonControl view="crystal" disabled>Кнопочка crystal</ButtonControl>
			<ButtonControl view="sand" disabled>Кнопочка sand</ButtonControl>
			<ButtonControl view="sky" disabled>Кнопочка sky</ButtonControl>
			<ButtonControl view="forest" disabled>Кнопочка forest</ButtonControl>
			<ButtonControl view="stone" disabled>Кнопочка stone</ButtonControl>
			<ButtonControl view="blackLink" disabled>Кнопочка blackLink</ButtonControl>
			<h3>With link</h3>
			<ButtonControl view="sand" href="#">Кнопочка sand</ButtonControl>
		</fieldset>
	</div>,
	document.getElementById('root')
);
