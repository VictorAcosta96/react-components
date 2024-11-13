import ValidateError from '../validate-error/ValidateError';

const GenerateFullName = ({ name, lastName }) => {
	if (!name || !lastName) return <ValidateError />;
	return (
		<>
			<h2>
				Hola, {name} {lastName}
			</h2>
		</>
	);
};

export default GenerateFullName;
