import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-container'>
				<div className='top'>
					<img src='./images/logo.png' alt='' />
					<div className='social'>
						<i className='fab fa-facebook-f icon'></i>
						<i className='fab fa-twitter icon'></i>
						<i className='fab fa-linkedin-in icon'></i>
						<i className='fab fa-pinterest-p icon'></i>
					</div>
				</div>
				<div className='bottom'>
					<p>Copyright Pixabey 2020</p>
					<div className='terms'>
						<p>Terms of use</p>
						<p>|</p>
						<p>Privacy policy</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
