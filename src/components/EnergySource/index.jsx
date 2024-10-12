import './style.css';

export const EnergySource = ({ icon, description, value, unit }) => {
	return (
		<div className="energy__source">
			<div className="energy__icon">
				<img src={icon}/>
			</div>
			<div className="energy__consumption">
				<div className="energy__description">{description}</div>
				<div className="energy__value">{value} {unit}</div>
			</div>
		</div>
	);
};