import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Banner from './components/Banner';
import WhyUs from './components/WhyUs';

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch></Switch>
				<Banner />
				<WhyUs />
			</Router>
		</div>
	);
};

export default App;
