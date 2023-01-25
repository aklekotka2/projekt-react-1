import offers from "../data/OfferList";
import SingleOffer from "./SingleOffer";

const Offer = () => {
	return (
		<section className="company" id="offer">
			<div className="pos-center">
				<h3>Czym zajmuje się nasza firma?</h3>
				<div className="offer-wrapper">
					{offers.map(({ title, isNew }, id) => (
						<SingleOffer
							title={title}
							isNew={isNew}
							key={id}
						></SingleOffer>
					))}
				</div>
			</div>
		</section>
	);
};

export default Offer;
