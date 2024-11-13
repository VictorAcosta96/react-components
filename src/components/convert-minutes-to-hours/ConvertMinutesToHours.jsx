import ValidateError from '../validate-error/ValidateError';

const ConvertMinutesToHours = ({ minutes }) => {
	if (typeof minutes !== 'number' || minutes < 0) {
		return <ValidateError />;
	}

	if (minutes <= 60)
		return (
			<h2>
				{minutes} minutos son {minutes} minutos
			</h2>
		);

	const totalMinutes = convertMinutes(minutes);
	return (
		<>
			<h2>
				{minutes} minutos son {totalMinutes}
			</h2>
		</>
	);
};

const convertMinutes = minutes => {
	const hours = Math.floor(minutes / 60);
	const remainingMinuts = minutes % 60;

	return `${hours} horas y ${remainingMinuts} minutos`;
};

export default ConvertMinutesToHours;
