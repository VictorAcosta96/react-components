const Flag = ({ country, image, people }) => {
	return (
		<>
			<div>
				<h2> {country} </h2>
				<img
					src={`/assets/images/${image}`}
					alt={`bandera de ${country}`}
					width={300}
				/>
				<p>{people}M. de habitantes</p>
			</div>
		</>
	);
};

export default Flag;
