import navLinks from "../data/navLinks";

const NavList = () => {
	return (
		<nav className="nav-desktop">
			{navLinks.map(({ name, link, isDisabled }, id) => (
				<a href={link} disabled={isDisabled && "disabled"} key={id}>
					{name}
				</a>
			))}
		</nav>
	);
};

export default NavList;
