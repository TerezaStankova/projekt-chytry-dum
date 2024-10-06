import { Energy } from "../Energy";
import { Blinds } from "../Blinds";
import { Lights } from '../Lights';

import './style.css';

export const Dashboard = () => {
	return (
		<main className="dashboard">
			<Lights/>
			<Blinds/>
			<Energy/>
		</main>
	);
};