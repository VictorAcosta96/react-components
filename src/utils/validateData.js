export const validateNumbers = numbers => {
	const areAllNumbers = numbers.every(number => typeof number === 'number');
	return areAllNumbers;
};

export const validateWords = words => {
	const areAllWords = words.every(word => typeof word === 'string');
	return areAllWords;
};
