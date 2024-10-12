import { Energy } from "../Energy";
import { Blinds } from "../Blinds";
import { Lights } from '../Lights';

import './style.css';
import { Climate } from "../Climate";

export const Dashboard = ({ smartHomeData }) => {

	return (
		<main className="dashboard">
			<Lights lightsData={smartHomeData.lights}/>
			<Climate climateData={smartHomeData.climate}/>
			<Blinds blindsData={smartHomeData.blinds}/>
			<Energy energyData={smartHomeData.energyConsumption}/>
		</main>
	);
}; 



