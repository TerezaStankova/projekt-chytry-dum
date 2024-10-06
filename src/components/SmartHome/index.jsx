import './style.css';
import { Dashboard } from '../Dashboard';


export const SmartHome = () => {

	return (
		<div className="container">

			<header className="header">
				<h1 className="header__title">Chytrý dům</h1>
			</header>
			<Dashboard/>
		
		</div>
	);
};