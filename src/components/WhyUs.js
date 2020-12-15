import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
	return (
		<div className='why'>
			<div className='why-container'>
				<div className='why-head'>
					<h1>Why Us</h1>
					<p>
						It Is A Long Established Fact That A Reader Will Be Distracted By
						The Readable Content Of A Page When Looking At Its Layout. The Point
						Of Using Lorem.
					</p>
				</div>
				<div className='why-content'>
					<img src='./images/iphone-x.png' alt='' />
					<div className='why-content-text'>
						<h1>Built An App That Everyone Loves</h1>
						<p>
							It Is A Long Established Fact That A Reader Will Be Distracted By
							The Readable Content Of A Page When Looking At Its Layout. The
							Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal
							Distribution Of Letters,
						</p>
						<p>
							It Is A Long Established Fact That A Reader Will Be Distracted By
							The Readable Content Of A Page When Looking At Its Layout. The
							Point Of Using
						</p>
						<button>Get More →</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
