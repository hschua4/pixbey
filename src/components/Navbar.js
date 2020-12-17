import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	const handleMenuClick = () => {
		setDisplayMenu(!displayMenu);
	};

	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<div className='logo'>
					<div className='logo-container'>
						<img src='./images/logo.png' alt='logo'></img>
					</div>
					<h1>Pixbey</h1>
				</div>
				<div className='menu-icon' onClick={handleMenuClick}>
					{/* toggle menu icon on click */}
					<div className={displayMenu ? 'menu-btn open' : 'menu-btn'}>
						<div className='menu-btn-burger'></div>
					</div>
				</div>
				<ul className={displayMenu ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<Link
							to='banner'
							smooth='true'
							duration={500}
							className='link'
							onClick={handleMenuClick}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='why-us'
							smooth='true'
							duration={500}
							offset={window.screen.width > 414 ? 120 : 0}
							className='link'
							onClick={handleMenuClick}
						>
							Why Us
						</Link>
					</li>
					<li>
						<Link
							to='portfolio'
							smooth='true'
							duration={500}
							className='link'
							onClick={handleMenuClick}
						>
							Our Portfolio
						</Link>
					</li>
					<li>
						<Link
							to='clients'
							smooth='true'
							duration={500}
							className='link'
							onClick={handleMenuClick}
						>
							Our Clients
						</Link>
					</li>
					<li className='contact-us-container'>
						<Link
							to='contact'
							smooth='true'
							duration={500}
							offset={window.screen.width > 414 ? -120 : 0}
							className='link contact-us'
							onClick={handleMenuClick}
						>
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
