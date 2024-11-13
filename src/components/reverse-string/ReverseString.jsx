import ValidateError from '../validate-error/ValidateError';

const ReverseString = ({ sentence }) => {
	if (!sentence || typeof sentence !== 'string') {
		return <ValidateError />;
	}

	const wordReverse = sentence.split('').reverse().join('');
	return (
		<>
			<h2>{wordReverse}</h2>
		</>
	);
};

export default ReverseString;
