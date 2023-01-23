import offers from "../data/OfferList";

const Offer = () => {
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
