import './style.css';
import blindsOpen from './images/blinds-open.svg';
import blindsClosed from './images/blinds-closed.svg';
import { useState } from 'react';

export const Blinds = () => {
	const [open, setOpen] = useState(true);

	return (
		<div class="blinds">
			<div class="blinds__icon">
				<img src={open ? blindsOpen : blindsClosed} />
			</div>
				<div class="blinds__name">
					Žaluzie
				</div>
				<div class="blinds__controls">				
					<button onClick={() => setOpen(!open)} className={open ? "button button--active" : "button"}>Otevřeno</button>
					<button onClick={() => setOpen(!open)} className={open ? "button" : "button--active"}>Zavřeno</button>
				</div>							
			</div>
	);
};

