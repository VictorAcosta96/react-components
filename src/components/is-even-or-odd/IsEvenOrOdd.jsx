import ValidateError from '../validate-error/ValidateError';

const IsEvenOrOdd = ({ number }) => {
	if (!number || typeof number !== 'number') {
		return <ValidateError />;
	}
	const resultNumber = number % 2 === 0 ? 'Par' : 'Impar';
	return (
		<>
			<h2>
				El numero {number} es {resultNumber}{' '}
			</h2>
		</>
	);
};

export default IsEvenOrOdd;
