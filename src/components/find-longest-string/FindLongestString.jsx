import { validateWords } from '../../utils/validateData';
import ValidateError from '../validate-error/ValidateError';

const FindLongestString = ({ wordsList }) => {
	const allWords = validateWords(wordsList);

	if (!allWords) {
		return <ValidateError />;
	}

	const longestWord = getLongestWord(wordsList);

	return (
		<>
			<h2>
				De las palabras {wordsList.join(', ')} {longestWord} es la más larga
			</h2>
		</>
	);
};

const getLongestWord = wordsList => {
	return wordsList.reduce((finalWord, word) =>
		finalWord.length > word.length ? finalWord : word
	);
};

export default FindLongestString;
