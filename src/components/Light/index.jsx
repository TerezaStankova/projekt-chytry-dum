import './style.css';
import lightOnIcon from './images/light-on.svg';
import lightOffIcon from './images/light-off.svg';
import { useState } from 'react';

export const Light = ({ name, on}) => {
	const [lightOn, setLightOn] = useState(on);

	return (
		<div onClick={() => setLightOn(!lightOn)} className="light">
			<div className="light__icon">
				<img src={lightOn ? lightOnIcon : lightOffIcon} />
			</div>
			<div className="light__name">
				{name}
			</div>
		</div>
	);
};