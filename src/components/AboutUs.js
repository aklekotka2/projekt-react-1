const AboutUs = () => {
	const workers = [
		{
			name: "Anna Kowalska",
			department: "PR",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing. Praesent et felis vel augue euismod aliquam. Fusce ornare fringilla erat ac suscipit. Duispharetra, ante non fringilla aliquam, nulla erat fringilla ligula, in lacinia arcu urna ut est. Sus endisse pulvinar laoreet tempor. Sed euismod arcu enim, sit amet porttitor risus",
		},
		{
			name: "Jan Nowak",
			department: "HR",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing. Praesent et felis vel augue euismod aliquam. Fusce ornare fringilla erat ac suscipit. Duispharetra, ante non fringilla aliquam, nulla erat fringilla ligula, in lacinia arcu urna ut est. Sus endisse pulvinar laoreet tempor. Sed euismod arcu enim, sit amet porttitor risus",
		},
	];

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
