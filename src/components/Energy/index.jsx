import './style.css';
import electricityIcon from './images/electricity.svg'; 
import waterIcon from './images/water.svg'; 

import { EnergySource } from '../EnergySource';

export const Energy = () => {
	return (
		<div className="energy">
			<EnergySource icon={electricityIcon} description='Elektřina' value='36.7 kW'/>
			<EnergySource icon={waterIcon} description='Voda' value='14.1 m'/>
		</div>
	);
};