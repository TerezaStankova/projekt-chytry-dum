import { Energy } from "../Energy";
import { Blinds } from "../Blinds";
import { Lights } from '../Lights';

import './style.css';
import { Climate } from "../Climate";

export const Dashboard = () => {
	return (
		<main className="dashboard">
			<Lights />
			<Climate initialTemp={24}/>
			<Blinds/>
			<Energy/>
		</main>
	);
};