import { validateNumbers } from '../../utils/validateData';
import ValidateError from '../validate-error/ValidateError';

const CalculateAverage = ({ listNumbers }) => {
	const areAllNumbers = validateNumbers(listNumbers);

	if (!areAllNumbers) {
		return <ValidateError />;
	}

	const avarege = getAvarege(listNumbers);
	return (
		<>
			<h2>
				La media de los números {listNumbers.join(',')} es {avarege}
			</h2>
		</>
	);
};

const getAvarege = listNumbers => {
	const result = listNumbers.reduce((acc, num) => {
		return acc + num;
	});
	return result / listNumbers.length;
};

export default CalculateAverage;
