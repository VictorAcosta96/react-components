const WriteBookInfo = ({ title, author, year, genre }) => {
	if (!title || !author || !year || !genre) return <p>Wrong Data...</p>;
	return (
		<>
			<h2>
				El libro {title} fue escrito por {author} en el año {year}. Es un libro
				de {genre}
			</h2>
		</>
	);
};

/* 
El libro [title] fue escrito por [author] en el año [year]. Es un libro de [genre].
*/

export default WriteBookInfo;
