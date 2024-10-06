import './style.css';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';
import { useState } from 'react';

export const Blinds = () => {
	const [open, setOpen] = useState(true);

	return (
		<div className="blinds">
			<div className="blinds__icon">
				<img src={open ? blindsOpen : blindsClosed} />
			</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">				
					<button onClick={() => setOpen(!open)} className={open ? "button button--active" : "button"}>Otevřeno</button>
					<button onClick={() => setOpen(!open)} className={open ? "button" : "button--active"}>Zavřeno</button>
				</div>							
			</div>
	);
};

