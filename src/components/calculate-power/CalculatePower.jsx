import ValidateError from '../validate-error/ValidateError';

const CalculatePower = ({ base, exponent }) => {
	if (!base || !exponent || isNaN(base) || isNaN(exponent)) {
		return <ValidateError />;
	}

	const calculate = Math.pow(base, exponent);
	return (
		<>
			<h2>
				{base} elevado a {exponent} es: {calculate}
			</h2>
		</>
	);
};

export default CalculatePower;
