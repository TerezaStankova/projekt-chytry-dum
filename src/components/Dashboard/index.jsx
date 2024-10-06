import { Energy } from "../Energy";
import { Blinds } from "../Blinds";

import './style.css';

export const Dashboard = () => {
	return (
		<main className="dashboard">
			<Blinds/>
			<Energy/>
		</main>
	);
};