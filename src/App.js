// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import AboutUs from "./components/AboutUs.js";
import Offer from "./components/Offer.js";
import Foot from "./components/Foot.js";

function App() {
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>

		// </div>
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
