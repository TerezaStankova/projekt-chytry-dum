import './style.css';
import tempIcon from './images/temp.svg';
import { useState } from 'react';

export const Climate = ({ initialTemp }) => {
	const [temp, setTemp] = useState(initialTemp);

	return (
		<div className="climate">
			<div className="climate__icon">
				<img src={tempIcon}/>
			</div>
				<div className="climate__content">
				<div className="climate__temperature">{temp}&deg;C</div>
					<div className="climate__humidity">Vlhost vzduchu 51&nbsp;%</div>
				</div>
				<div className="climate__controls">
				<button onClick={() => setTemp(temp+1)} className="button">+</button>
				<button onClick={() => setTemp(temp-1)} className="button">-</button>
				</div>
		</div>
	);
};