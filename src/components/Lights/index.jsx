import './style.css';
import { Light } from '../Light';


export const Lights = ({ lightsData }) => {

	return (
		<div className="lights">
			{
				lightsData.map((light) => 
					<Light name={light.name} on={light.state === 'on' ? true : false} />
				)
			}			
		</div>
	);
};