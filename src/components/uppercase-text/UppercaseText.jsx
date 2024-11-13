const UppercaseText = ({ children }) => {
	if (!children) return <p>Error: texto incorrecto!</p>;

	const uppercase = children.toUpperCase();

	return (
		<>
			<h2> {uppercase} </h2>
		</>
	);
};

export default UppercaseText;
