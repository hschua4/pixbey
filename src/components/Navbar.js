import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	const handleMenuClick = () => {
		setDisplayMenu(!displayMenu);
	};

	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<div className='logo'>
					<img src='./images/logo.png' alt='logo'></img>
				</div>
				<div className='menu-icon' onClick={handleMenuClick}>
					{/* toggle menu icon on click */}
					<div className={displayMenu ? 'menu-btn open' : 'menu-btn'}>
						<div className='menu-btn-burger'></div>
					</div>
				</div>
				<ul className={displayMenu ? 'nav-menu active' : 'nav-menu'}>
					<li>
						<NavLink to='/' className='link' onClick={handleMenuClick}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='why-us' className='link'>
							Why Us
						</NavLink>
					</li>
					<li>
						<NavLink to='portfolio' className='link' onClick={handleMenuClick}>
							Our Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink to='clients' className='link' onClick={handleMenuClick}>
							Our Clients
						</NavLink>
					</li>
					<li className='contact-us-container'>
						<NavLink
							to='contact'
							className='link contact-us'
							onClick={handleMenuClick}
						>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
