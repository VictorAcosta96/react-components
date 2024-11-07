const Flag = props => {
	return (
		<>
			<div>
				<h2> {props.country} </h2>
				<img
					src={`/assets/images/${props.image}`}
					alt={`bandera de ${props.country}`}
					width={300}
				/>
			</div>
		</>
	);
};

const App = () => {
	return (
		<>
			<h1>Curso de react.</h1>
			<Flag country='colombia' image='co.svg' />
			<Flag country='canadá' image='ca.svg' />
			<Flag country='españa' image='es.svg' />
			<Flag country='portugal' image='pt.svg' />
			<Flag country='francia' image='fr.svg' />
		</>
	);
};

export default App;
