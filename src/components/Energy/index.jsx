import { EnergySource } from '../EnergySource';
import electricityIcon from './images/electricity.svg';
import waterIcon from './images/water.svg';
import './style.css';


export const Energy = ({ energyData }) => {
	return (
		<div className="energy">
			<EnergySource icon={electricityIcon} description='Elektřina' value={energyData.electricity} unit=' kW'/>
			<EnergySource icon={waterIcon} description='Voda' value={energyData.water} unit='m³'/>
		</div>
	);
};