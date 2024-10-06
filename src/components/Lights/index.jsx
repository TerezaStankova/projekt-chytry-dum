import './style.css';
import { Light } from '../Light';


export const Lights = () => {

	return (
		<div className="lights">
			<Light name='Obývací pokoj' on={false}/>
			<Light name='Ložnice' on={true}/>
			<Light name='Kuchyň' on={true}/>
			<Light name='Chodba' on={false}/>
		</div>
	);
};