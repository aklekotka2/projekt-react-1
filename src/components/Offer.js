const Offer = () => {
	const offers = [
		{
			title: "Usługa 1",
			isNew: true,
		},
		{
			title: "Usługa 2",
			isNew: false,
		},
		{
			title: "Usługa 3",
			isNew: true,
		},
		{
			title: "Usługa 4",
			isNew: false,
		},
		{
			title: "Usługa 5",
			isNew: false,
		},
		{
			title: "Usługa 6",
			isNew: false,
		},
	];
	return (
		<section className="company" id="offer">
			<div className="pos-center">
				<h3>Czym zajmuje się nasza firma?</h3>
				<div className="offer-wrapper">
					{offers.map(({ title, isNew }, id) => (
						<div className={isNew ? "box is-new" : "box"} key={id}>
							<p>
								{title}
								{isNew ? <span>(nowość)</span> : ""}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Offer;
