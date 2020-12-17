import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import WhyUs from './components/WhyUs';
import WorkWithUs from './components/WorkWithUs';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Element name='banner'>
				<Banner />
			</Element>
			<Element name='why-us'>
				<WhyUs />
			</Element>
			<Element name='contact'>
				<WorkWithUs />
			</Element>
			<Footer />
		</div>
	);
};

export default App;
