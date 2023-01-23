import workers from "../data/workersList";

const AboutUs = () => {
	return (
		<section className="about-us" id="aboutUs">
			<div className="pos-center">
				<h2>Nasi specjaliści</h2>
				{workers.map(({ name, department, desc }, id) => (
					<article key={id}>
						<div className="photo"></div>
						<div className="info">
							<h4>
								{name} [{department}]
							</h4>
							<p>{desc}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default AboutUs;
