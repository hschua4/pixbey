import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<div className='logo'>
					<img src='./images/logo.png' alt='logo'></img>
				</div>
				<ul className='nav'>
					<li>
						<NavLink to='/' className='link'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='why-us' className='link'>
							Why Us
						</NavLink>
					</li>
					<li>
						<NavLink to='portfolio' className='link'>
							Our Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink to='clients' className='link'>
							Our Clients
						</NavLink>
					</li>
					<li className='contact-us-container'>
						<NavLink to='contact' className='link contact-us'>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
