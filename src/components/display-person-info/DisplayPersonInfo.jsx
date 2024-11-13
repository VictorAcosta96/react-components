import ValidateError from '../validate-error/ValidateError';

const DisplayPersonInfo = ({ name, age, occupation }) => {
	if (!name || !age || !occupation) {
		return <ValidateError />;
	}
	return (
		<>
			<h2>
				Informacion personal: nombre: {name}, edad: {age}, ocupacion:
				{occupation}
			</h2>
		</>
	);
};

export default DisplayPersonInfo;
