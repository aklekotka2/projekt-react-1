import "./Reset.css";
import "./App.css";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import AboutUs from "./components/AboutUs.js";
import Offer from "./components/Offer.js";
import Foot from "./components/Foot.js";

function App() {
	return (
		<>
			<Header></Header>
			<Hero></Hero>
			<AboutUs></AboutUs>
			<Offer></Offer>
			<Foot></Foot>
		</>
	);
}

export default App;
