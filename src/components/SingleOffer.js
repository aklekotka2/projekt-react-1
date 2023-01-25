const SingleOffer = ({ isNew, title }) => {
	return (
		<div className={isNew ? "box is-new" : "box"}>
			<p>
				{title}
				{isNew ? <span>(nowość)</span> : ""}
			</p>
		</div>
	);
};

export default SingleOffer;
