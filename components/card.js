const Card = ({ projectTitle, projectDescription }) => {
	return (
		<div>
			<h3>{projectTitle}</h3>
			<p>{projectDescription}</p>
		</div>
	);
};

export default Card;
