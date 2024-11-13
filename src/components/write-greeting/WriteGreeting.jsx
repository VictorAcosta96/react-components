import ValidateError from '../validate-error/ValidateError';

const WriteGreeting = ({ name, hour }) => {
	if (!name || !hour || hour < 0 || hour > 24) {
		return <ValidateError />;
	}

	const greeting = getGreeting(hour);
	return (
		<>
			<h2>
				{greeting}, {name}
			</h2>
		</>
	);
};

const getGreeting = hourOfDay => {
	if (hourOfDay >= 0 && hourOfDay < 12) {
		return 'Buenos Dias';
	} else if (hourOfDay >= 12 && hourOfDay < 18) {
		return 'Buenas tardes';
	} else if (hourOfDay >= 18 && hourOfDay <= 23) {
		return 'Buenas noches';
	}
};

export default WriteGreeting;
