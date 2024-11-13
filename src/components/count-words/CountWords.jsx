import ValidateError from '../validate-error/ValidateError';

const CountWords = ({ phrase }) => {
	if (typeof phrase !== 'string' || !phrase) {
		return <ValidateError />;
	}

	const lengthWord = phrase.split(' ').length;
	return (
		<>
			<h2>
				En la frase &quot;{phrase}&quot; hay {lengthWord} palabras.
			</h2>
		</>
	);
};

export default CountWords;
