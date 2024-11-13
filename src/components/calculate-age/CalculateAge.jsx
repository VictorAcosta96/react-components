import ValidateError from '../validate-error/ValidateError';

const CalculateAge = ({ birthDate }) => {
	const isValidDate = validateDate(birthDate);

	if (!isValidDate) {
		return <ValidateError />;
	}
	const age = getAge(birthDate);
	return (
		<>
			<h2>
				Si naciste el {birthDate} tienes {age} años.
			</h2>
		</>
	);
};

// 1. funcion que se encargue de la logica de encontrar la edad
const getAge = birthDate => {
	// 2. debemos conocer el momento actual
	const now = new Date();
	// 3. necesitamos la fecha de nacimiento para poder hacer el calculo
	const birth = new Date(birthDate);

	// 4. con estos datos ya podremos saber cuantos años tiene
	let age = now.getFullYear() - birth.getFullYear();

	// 5. debemos saber si el mes y el dia tambien se cumplen
	const monthDifference = now.getMonth() - birth.getMonth();
	const dayDifference = now.getDate() - birth.getDate();

	// validamos si ya ha llegado la fecha de su cumpleaños
	const hasBirthDay =
		monthDifference < 0 || (monthDifference === 0 && dayDifference < 0);

	if (hasBirthDay) {
		age--;
	}

	return age;
};

const validateDate = dateString => {
	// expresion regular que se encarga de validar que la fecha venga con dos digitos en la primera posicion, dos en la segunda y 4 en la tercera
	const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
	// utilizamos el metodo match para que todo lo que coincida lo devuelva en un array
	const match = dateString.match(regex);

	// si no coincide retorna un false
	if (!match) return;

	// 1.Eliminar la primera posicion del array
	match.shift();

	// Desestructurar los valores restantes
	const [dayStr, monthSrt, yearStr] = match;

	const day = parseInt(dayStr, 10);
	const month = parseInt(monthSrt, 10);
	const year = parseInt(yearStr, 10);

	// verificar si el mes es valido (1-12)
	if (month < 1 || month > 12) return false;

	//verificar el año: debe estar dentro de los ultimos 100 años y no puede ser mayor que el año actual
	const currentYear = new Date().getFullYear;
	if (year < currentYear - 100 || year > currentYear) return false;

	//verificar si el dia es valido para el mes
	const daysInMonth = new Date(year, month, 0).getDate();
	return day > 0 && day <= daysInMonth;
};

export default CalculateAge;
