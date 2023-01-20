import NavList from "./NavList";

const Header = () => {
	return (
		<header>
			<div className="pos-center">
				<div className="logo">nazwa firmy</div>
				<NavList></NavList>
			</div>
		</header>
	);
};

export default Header;
